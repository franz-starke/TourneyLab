<script setup>
import { RouterLink } from "vue-router";
import { computed, ref, watch } from "vue";
import { useTournamentStore } from "@/stores/tournamentStore";
import api from "@/api/api.js";
import IconEnter from "../icons/IconEnter.vue";

const props = defineProps({
	gameId: {
		type: String,
		required: true,
	},
});

const store = useTournamentStore();
let game = store.getGameById(props.gameId);

const team1 = game[0];
const team2 = game[1];
const referee = game[2];
const startTime = game[3];
const points = ref(game[4]);

const matchpoint = 25


const whichTeamWon = computed(() => {
	// console.log("points.value", points.value);
	if (points.value[0] >= matchpoint && points.value[0] - points.value[1] >= 2) {
		return 1;
	} else if (points.value[1] >= matchpoint && points.value[1] - points.value[0] >= 2) {
		return 2;
	} else {
		return 0; // game not finished
	}
});

const gameRoute = computed(() => ({
	name: "edit-game",
	params: { gameId: props.gameId },
}));

watch(
	() => points.value,
	(newPoints) => {
		if (navigator.onLine) {
			try {
				const response = api.editGameScore(
					store.tournament.id,
					props.gameId,
					newPoints
				);
			} catch (error) {
				console.error("get old tournaments failed");
			}
		}

		game[4] = newPoints;
		store.setGameById(props.gameId, game);



	},
	{ deep: true }
);

const numberInput1 = ref(null);
function selectInput1() {
	numberInput1.value?.select();
}

const numberInput2 = ref(null);
function selectInput2() {
	numberInput2.value?.select();
}






</script>

<template>
	<div class="flex flex-col w-full justify-center items-center">
		<p class="font-bold text-gray-500">{{ startTime }}</p>
		<div class="null-game" v-if="team1 == 0 || team2 == 0">--</div>
		<div
			v-else
			class="flex flex-row justify-between items-center w-full px-4 py-2 bg-[var(--color-element)] rounded-3xl"
			@click="selectInput1()"
		>
			<div class="flex flex-col">
				<div>
					<p class="text-lg font-bold">
						<span :class="{'text-[var(--color-accent)]': whichTeamWon == 1}">{{ $t("games.team") }} {{ team1 }}</span> vs.
						<span :class="{'text-[var(--color-accent)]': whichTeamWon == 2}">{{ $t("games.team") }} {{ team2 }}</span>
					</p>
				</div>

				<p class="text-sm font-bold text-gray-500">
					{{ $t("games.ref") }}: {{ $t("games.team") }}
					{{ referee }}
				</p>
			</div>

			<div class="flex space-x-4 items-center">
				<div
					class="flex flex-row w-30 justify-evenly items-center bg-[var(--color-sub-element)] p-2 rounded-full"
				>
					<input
						class="flex w-8 text-center text-2xl font-bold"
						:class="{'text-[var(--color-accent)]': whichTeamWon == 1}"
						ref="numberInput1"
						min="0"
						type="number"
						v-model.number="points[0]"
						@click.stop.prevent
						@click="selectInput1()"
						@focus="selectInput1()"
					/>
					:
					<input
						class="flex w-8 text-center text-2xl font-bold"
						:class="{'text-[var(--color-accent)]': whichTeamWon == 2}"
						ref="numberInput2"
						min="0"
						type="number"
						v-model.number="points[1]"
						@click.stop.prevent
						@click="selectInput2()"
						@focus="selectInput2()"
					/>
				</div>
				<RouterLink :to="gameRoute"> <IconEnter/> </RouterLink>
			</div>
		</div>
	</div>
</template>
