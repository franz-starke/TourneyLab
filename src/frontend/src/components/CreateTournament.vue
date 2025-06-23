<script setup>

// TODO: manual ref assinging dialogue
// TODO: disallow some combinations of tournament params (checkTournamentParams)
import api from "@/api/api.js";
import { createTournamentAlgo } from "@/util/tournamentalgo.js";
import { addMinutes } from "@/util/time.js"
import { availableRefsForGame, getRounds, someGameInGamesHasNoRef } from "@/util/tournamentDataStructureUtil.js"
import { checkTournamentParams, impossibleRefAssigning } from "@/util/tournamentParamCheck";
import {
	NumberField,
	NumberFieldContent,
	NumberFieldDecrement,
	NumberFieldIncrement,
	NumberFieldInput,
} from '@/components/ui/number-field'
import Modal from "@/components/utilcomponents/Modal.vue";
import { useTournamentStore } from "@/stores/tournamentStore.js";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import BackHeader from "./utilcomponents/BackHeader.vue";

// * IMPORTANT SEMANTICS
// * Treat a game with [0,0,0] as empty game
const emptyGame = [0, 0, 0];

const store = useTournamentStore();
const router = useRouter();

// * variables for the tournament creation with default values
const tournamentName = ref("");
const amountFields = ref(1);
const amountTeams1 = ref(3);
const amountTeams2 = ref(0);
const amountGroups = ref(1);
const withReturnGame = ref(false);
const date = ref((new Date()).toISOString().split('T')[0]);
const startTime = ref("10:00");
const roundDuration = ref(25);
const breakDuration = ref(5);
const matchpoint = ref(25); // default matchpoint, can be changed later in the tournament settings


let games = {};
let teamgroups = {}; // variable to hold the teams in the groups
let tournamentData = {};
let rounds = []; // variable to hold the rounds of the tournament

// * variables for the modal dialog to assign referees
let resolvePromise; // Shared variable to hold the resolve function of a promise, used for the modal dialog
const showRefModal = ref(false); // variable to handle if there is a ref dialog going on (for conditional rendering with v-if)



/**
* Creates a tournament based on the user input.
*
* @summary
* This function first validates the input data on unsupported parameter combinations. If the data is valid, it uses a tournament generation
* algorithm to create the tournament structure. Afterward, if any matches are missing referees,
* it opens a modal dialog prompting the user to assign them. If the modal returns successfully or it wasn't needed, the tournament data is
* synchronized with the server, which yields the tournamentId. And the user is redirected to the Tournament Home.
*/
async function generateTournament() {

	// tournament Name can't be empty
	if (tournamentName.value.trim() === "") {
		alert("Bitte geben Sie einen Turniernamen ein.");
		return;
	}

	// run tournament algorithm
	games = createTournamentAlgo(
		amountTeams1.value,
		amountTeams2.value,
		amountGroups.value,
		amountFields.value,
		withReturnGame.value
	);

	console.log("Game plan: ", games);

	rounds = getRounds(games);
	console.log("rounds ", rounds);

	// check for sensible combinations of tournament parameters
	// This is done by checking for unsupported combinations or if there are games where no referee can be assigned
	if (!checkTournamentParams(amountFields.value, amountGroups.value, amountTeams1.value, amountTeams2.value, withReturnGame.value) || impossibleRefAssigning(games, rounds, amountTeams1.value + amountTeams2.value)) {
		alert("Die Kombination der Turnierparameter wird nicht unterstützt bzw. ist nicht sinnvoll. Bitte überprüfen Sie Ihre Eingaben.");
		return;
	}


	// TODO: handle cases with manual referee assignment through modal dialog
	if (someGameInGamesHasNoRef(games)) {
		// TODO: Open the modal dialog to assign referees
		if (await openRefModal()) {
			console.log("Referees assigned successfully.");
		} else {
			console.log("Referee assignment was cancelled.");
			return; // Exit if the user cancels the referee assignment
		}
	}


	// TODO: yet another dialog to add or change time slots


	// prepare for server sync
	// attach the start-time of each game to each game-Array
	Object.keys(games).forEach((field) => {
		let roundTime = startTime.value;
		Object.keys(games[field]).forEach((gameId) => {
			games[field][gameId][3] = roundTime;
			roundTime = addMinutes(roundTime, roundDuration.value + breakDuration.value);
		});
	});


	teamgroups = {
		1: amountTeams1.value,
	};
	if (amountTeams2.value > 0) {
		teamgroups[2] = amountTeams2.value; // Add second group only if it has teams
	}

	// if online, then sync this data to the server
	let tournamentId = undefined; // Initialize tournamentId to undefined
	if (navigator.onLine) {
		console.log("Online: Synchronizing tournament data with the server...");
		tournamentId = await syncTournament();
		if (tournamentId === undefined) {
			alert("Fehler beim Synchronisieren des Turniers mit dem Server. Netzwerkverbindung überprüfen.");
			return;
		}
	}
	else {
		console.log("Offline: no server sync");
		tournamentId = undefined;
	}

	// init games with Points 0,0
	Object.keys(games).forEach((field) => {
		Object.keys(games[field]).forEach((gameId) => {
			if (games[field][gameId] !== emptyGame) {
				games[field][gameId][4] = [0, 0]; // Add points [0, 0] to each game
			}
		});
	});

	// store Tournament data in localstorage via pinia
	store.tournament.games = games;
	store.tournament.name = tournamentName.value;
	store.tournament.id = tournamentId;
	store.tournament.groups = teamgroups;
	store.tournament.matchpoint = matchpoint.value;

	// Redirect to the tournament home page
	router.push("/tournament-home/dashboard");
}



/**
* Nach erfolgter Turnierplanerstellung, die Daten mit dem Server synchronisieren.
*
* @returns {Promise<string>} Returns the tournament ID if successful, otherwise undefined.
*/
async function syncTournament() {

	tournamentData = {
		name: tournamentName.value, // string
		teams: teamgroups,
		games: games,
		date: date.value, // string ex: "2025-04-26"
		matchpoint: matchpoint.value, // number
	};

	// FIXME: continous testing
	// call API at create
	let tId = await api.createTournament(tournamentData);
	if (tId == undefined) {
		console.error("Api access error in syncTournament");
		return undefined;
	}

	return tId.tournament_id;
}



/**
 * This function handles the opening of the modal dialog for manual referee assignment.
 *
 * @returns Promise which resolves to the updated Games data structure
 */
async function openRefModal() {
	console.log("Opening referee assignment modal...");
	return new Promise((resolve) => {
		showRefModal.value = true;

		resolvePromise = resolve; // Assign `resolve` to the shared variable
	});
}

// Define submitForm and closeModal locally
function submitRefModal() {
	showRefModal.value = false;
	if (resolvePromise) {
		resolvePromise(true); // Resolve the promise with the updated games
	}
}

function closeRefModal() {
	console.log("Modal closed without saving changes.");
	showRefModal.value = false;
	if (resolvePromise) {
		resolvePromise(false);
	}
}

watch(amountGroups, (newValue) => {
	// Watcher to update amountTeams2 based on amountGroups
	if (newValue === 1) {
		amountTeams2.value = 0; // Reset amountTeams2 if only one group
	} else if (newValue === 2 && amountTeams2.value < 3) {
		amountTeams2.value = 3; // Ensure minimum of 3 teams in second group
	}
});
</script>

<template>
	<div class="flex flex-col h-[100svh] overflow-hidden">

		<BackHeader />

		<main class="flex flex-col items-center h-full lg:mt-16">
			<h1 class="text-2xl font-bold text-center mb-4 sticky top-0 pt-[env(safe-area-inset-top)] px-4">{{
				$t('create.createT') }}</h1>

			<div v-if="!showRefModal"
				class="flex-1 w-full overflow-y-auto scrollbar-hidden flex flex-col gap-4 px-8 pb-[calc(env(safe-area-inset-bottom)+2rem)] lg:w-150">

				<input
					class="flex bg-[var(--color-element)] p-2 rounded-full font-bold text-center placeholder:text-gray-500 text-xl"
					type="text" v-model="tournamentName" :placeholder="$t('create.name')" maxlength="120" required />

				<NumberField id="amountFields" v-model="amountFields" :min="1" :max="4">
					<span class="sectionSpan">{{ $t('create.fields') }}</span>
					<NumberFieldContent class="numberInputBox">
						<NumberFieldDecrement />
						<NumberFieldInput />
						<NumberFieldIncrement />
					</NumberFieldContent>
				</NumberField>

				<NumberField id="amountGroups" v-model="amountGroups" :min="1" :max="2">
					<span class="sectionSpan">{{ $t('create.groups') }}</span>
					<NumberFieldContent class="numberInputBox">
						<NumberFieldDecrement />
						<NumberFieldInput />
						<NumberFieldIncrement />
					</NumberFieldContent>
				</NumberField>

				<NumberField id="amountTeams1" v-model="amountTeams1" :min="3" :max="12">
					<span class="sectionSpan">
						{{ $t('create.teams') }} <span v-if="amountGroups == 2"> {{ $t('create.group') }} 1</span>
					</span>
					<NumberFieldContent class="numberInputBox">
						<NumberFieldDecrement />
						<NumberFieldInput />
						<NumberFieldIncrement />
					</NumberFieldContent>
				</NumberField>

				<NumberField id="amountTeams2" v-if="amountGroups == 2" v-model="amountTeams2"
					:min="amountGroups == 2 ? 3 : 0" :max="12">
					<span class="sectionSpan">{{ $t('create.teams') }} {{ $t('create.group') }} 2</span>
					<NumberFieldContent class="numberInputBox">
						<NumberFieldDecrement />
						<NumberFieldInput />
						<NumberFieldIncrement />
					</NumberFieldContent>
				</NumberField>

				<div class="flex items-center justify-center">
					<span class="sectionSpan mr-4">{{ $t('create.return') }}</span>
					<input id="withReturnGame" class="custom-checkbox" v-model="withReturnGame" type="checkbox" />
				</div>

				<div class="flex flex-row justify-between w-full">
					<div class="flex flex-col justify-center">
						<span class="sectionSpan">{{ $t('create.date') }}</span>
						<div class="flex items-center justify-center">
							<input class="numberInputBox" type="date" id="input-date" name="date" v-model="date" />
						</div>
					</div>

					<div class="flex flex-col justify-center">
						<span class="sectionSpan" for="start-time">{{ $t('create.time') }}</span>
						<div class="flex items-center justify-center">
							<input class="numberInputBox" type="time" id="input-start-time" name="start-time"
								v-model="startTime" />
						</div>
					</div>

				</div>

				<NumberField id="input-round-duration" v-model="roundDuration" :min="5" :step="5">
					<span class="sectionSpan">{{ $t('create.round') }}</span>
					<NumberFieldContent class="numberInputBox">
						<NumberFieldDecrement />
						<NumberFieldInput />
						<NumberFieldIncrement />
					</NumberFieldContent>
				</NumberField>

				<NumberField id="input-break-duration" v-model="breakDuration" :min="0" :step="5">
					<span class="sectionSpan">{{ $t('create.break') }}</span>
					<NumberFieldContent class="numberInputBox">
						<NumberFieldDecrement />
						<NumberFieldInput />
						<NumberFieldIncrement />
					</NumberFieldContent>
				</NumberField>
			</div>

			<div class="w-full px-4 pt-2 pb-4 mt-2 mb-[calc(env(safe-area-inset-bottom)+4.5rem)] lg:w-200">
				<button class="colorButton " @click="generateTournament">
					<span>{{ $t('create.create') }}</span>
				</button>
			</div>


			<!-- Referee Assignment Dialog -->
			<Modal v-if="showRefModal" @close="closeRefModal" @submit="submitRefModal">
				<h1 class="text-center font-medium">manual referee assigning not implemented</h1>
			</Modal>
		</main>
	</div>
</template>
