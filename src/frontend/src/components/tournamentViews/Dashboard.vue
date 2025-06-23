<script setup>
import { useTournamentStore } from "@/stores/tournamentStore";
import { RouterLink } from "vue-router";
import IconQrCode from "../icons/IconQrCode.vue";
import IconTrophy from "../icons/IconTrophy.vue";
import Game from "../utilcomponents/Game.vue";

import { getCurrentGamePerField } from "@/util/tournamentDataStructureUtil.js";

const store = useTournamentStore();

const currentGamePerField = getCurrentGamePerField(store.tournament.games, 25);

// Time für Dashboard-Games
function getGameTime(gameId) {
	const game = store.getGameById(gameId);
	return game[3]; // index 3 = startTime
}
</script>

<template>
	<div
		id="dashboard-container"
		class="flex flex-col w-full align-center justify-between items-center h-full"
	>
		<RouterLink
			class="colorButton cursor-pointer w-full max-w-100"
			to="/tournament-home/sync"
		>
			<span>{{ $t("home.sync") }}</span>
			<IconQrCode />
		</RouterLink>
		<div class="overflow-y-auto flex-1 w-full px-2 py-4 scrollbar-hidden">
			<div
				v-for="(idCurrGame, field) in currentGamePerField"
				:key="field"
				class="flex flex-col w-full gap-2 mb-4 px-2"
			>
				<!-- Zeile mit Feld + Uhrzeit -->
				<div
					class="flex flex-row justify-between items-center text-base font-semibold px-2"
				>
					<div>{{ $t("games.field") }}: {{ field }}</div>

					<div>{{ getGameTime(idCurrGame) }}</div>
				</div>

				<!-- Game-Component -->
				<Game
					:gameId="idCurrGame"
					:showTime="false"
					class="flex w-full"
				/>
			</div>
		</div>

		<RouterLink
			class="colorButton cursor-pointer w-full max-w-100"
			to="/tournament-home/eval"
		>
			<span>{{ $t("home.results") }}</span>
			<IconTrophy />
		</RouterLink>
	</div>
</template>
