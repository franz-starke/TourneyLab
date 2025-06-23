<script setup>

import { ref, onMounted } from "vue";
import { useTournamentStore } from "@/stores/tournamentStore";
import { RouterLink } from "vue-router";
import IconQrCode from "../icons/IconQrCode.vue";
import IconDownload from "../icons/IconDownload.vue";
import IconTrophy from "../icons/IconTrophy.vue";
import Game from "../utilcomponents/Game.vue";


import { evaluateTournamentData } from "@/util/tournamentEvaluation.js";
import { generatePdfBrowser } from "@/util/tournamentPDFCreation";

import { getCurrentGamePerField } from "@/util/tournamentDataStructureUtil.js";

const store = useTournamentStore();


const leaderboard = ref({});
async function evalTournament() {
	console.log("Evaluating Tournament...");

	const result = evaluateTournamentData(store.tournament);
	leaderboard.value = result;
	console.log("Leaderboard: ", result);

	evalShow.value = true;
}

//PDF-Download
function downloadPdf() {
	generatePdfBrowser(leaderboard.value);
}

// Time für Dashboard-Games
function getGameTime(gameId) {
	const game = store.getGameById(gameId);
	return game[3]; // index 3 = startTime
}



const activeGroup = ref(0);
function setActiveGroup(groupIndex) {
	activeGroup.value = groupIndex;
}

const currentGamePerField = getCurrentGamePerField(store.tournament.games, 25);
</script>

<template>
	<div class="h-full overflow-y-auto scrollbar-hidden">
		<!-- EVAL: first condition renders Evaluation -->
		<div v-if="evalShow" id="eval-dialog" class="flex flex-col flex-1">
			<div class="sticky top-0 z-10 bg-[var(--color-background)] pb-2">
				<div class="flex items-center justify-center gap-4 m-2">
					<button class="cursor-pointer rounded-full px-6 py-2 font-semibold" :class="activeGroup === 0
						? 'bg-[var(--color-accent)] text-[var(--color-text-alt)]'
						: 'bg-[var(--color-element)] text-[var(--color-text)]'" @click="setActiveGroup(0)">
						Fun
					</button>
					<button v-if="leaderboard.groups.length == 2"
						class="cursor-pointer rounded-full px-6 py-2 font-semibold" :class="activeGroup === 1
							? 'bg-[var(--color-accent)] text-[var(--color-text-alt)]'
							: 'bg-[var(--color-element)] text-[var(--color-text)]'" @click="setActiveGroup(1)">
						{{ $t("teams.pro") }}
					</button>
				</div>

				<div class="grid grid-cols-4 bg-[var(--color-element)] rounded-full py-2 px-4 text-center font-bold">
					<div>{{ $t("result.placement") }}</div>
					<div>{{ $t("result.team") }}</div>
					<div>{{ $t("result.win") }}</div>
					<div>{{ $t("result.points") }}</div>
				</div>
			</div>

			<div class="flex-1 overflow-y-auto mt-2 flex flex-col gap-3 pb-[calc(env(safe-area-inset-bottom))]">
				<div v-for="team in leaderboard.groups[activeGroup].teams"
					class="grid grid-cols-4 text-xl items-center bg-[var(--color-element)] rounded-4xl h-18 py-2 px-4 text-center">
					<div class="rounded-full w-8 h-8 mx-auto flex items-center justify-center" :class="{
						'bg-yellow-500 text-[var(--color-text)]': team.rank === 1,
						'bg-gray-400': team.rank === 2,
						'bg-amber-700 text-[var(--color-text)]': team.rank === 3,
						'bg-[var(--color-background)]': team.rank > 3,
					}">
						{{ team.rank }}
					</div>
					<div>{{ team.id }}</div>
					<div>{{ team.wins }}</div>
					<div :class="{
						'text-green-500': team.points > 0,
						'text-red-500': team.points < 0,
						'text-gray-500': team.points === 0,
					}">
						{{ team.points > 0 ? "+" : "" }}{{ team.points }}
					</div>
				</div>
			</div>

			<!-- PDF-Download Button unterhalb des Leaderboards -->
			<div class="flex justify-center m-2">
				<button
					@click="downloadPdf"
					class="colorButton cursor-pointer w-full max-w-100 rounded-4xl"
				>
					<span>{{ $t('home.downloadPdf') }}</span>
					<IconDownload />
				</button>
			</div>
		</div>

		<!-- MAIN-VIEW: main Dashboard view -->
		<div v-else-if="!syncGames" id="dashboard-container"
			class="flex flex-col w-full align-center justify-between items-center h-full">
			<!-- <button class="colorButton cursor-pointer w-full max-w-100" @click="toggleSyncGames">
				<span>{{ $t("home.sync") }}</span>
				<IconQrCode />
			</button> -->
			<RouterLink class="colorButton cursor-pointer w-full max-w-100"  to="/tournament-home/sync">
				<span>{{ $t("home.sync") }}</span>
				<IconQrCode />
			</RouterLink>

			<div
				v-for="(idCurrGame, field) in currentGamePerField"
				:key="field"
				class="flex flex-col w-full gap-2 mb-4 px-2"
			>
				<!-- Zeile mit Feld + Uhrzeit -->
				<div class="flex flex-row justify-between items-center text-base font-semibold px-2">
					<div>{{ $t("games.field") }}: {{ field }}</div>

					<div>{{ getGameTime(idCurrGame) }}</div>
				</div>

				<!-- Game-Component -->
				<Game :gameId="idCurrGame" :showTime="false" class="flex w-full" />
			</div>

			<button class="colorButton cursor-pointer w-full max-w-100" @click="evalTournament">
				<span>{{ $t("home.results") }}</span>
				<IconTrophy />
			</button>
		</div>

		<!-- SYNC: sync dialogue -->

	</div>
</template>
