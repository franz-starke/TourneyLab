<!-- TODO: include unmount hook to sync data with server and or button-->

<script setup>
import { useTournamentStore } from "@/stores/tournamentStore";
import Game from "../utilcomponents/Game.vue";
import { ref, onMounted, onUnmounted } from "vue";
import api from "@/api/api.js";

const activeFieldID = ref(1);
const gamesOfActiveField = ref({});
const store = useTournamentStore();

// first fetch from api for newest tournamentData and write it into the store
// then always use store to load data (also offline)
if (navigator.onLine) {
	onMounted(syncGamesForFieldFromAPI);
}

async function syncGamesForFieldFromAPI() {
	try {
		const response = await api.getGamesWithScoresFromField(
			store.tournament.id,
			activeFieldID.value
		);
		gamesOfActiveField.value = response.games;

		// assign each game in local store the data from the api
		for (let game of response.games) {
			store.tournament.games[activeFieldID.value][game.id][3] = game.time;
			store.tournament.games[activeFieldID.value][game.id][4] =
				game.score;
		}
	} catch (error) {
		console.error(error);
		console.error("API: Get games for field FAILED");
	}
}

async function changeActiveField(fieldID) {
	activeFieldID.value = fieldID;
	if (navigator.onLine) {
		await syncGamesForFieldFromAPI();
	}
}
</script>

<template>
	<div class="flex flex-col flex-1 overflow-hidden">
		<div class="sticky top-0 bg-[var(--color-background)] py-2">
			<div
				class="flex flex-wrap w-full justify-center items-center gap-2"
			>
				<div
					class="flex cursor-pointer px-4 py-2 rounded-full text-base font-bold"
					v-for="field in Object.keys(store.tournament.games)"
					:class="
						field == activeFieldID
							? 'bg-[var(--color-accent)] text-[var(--color-text-alt)]'
							: 'bg-[var(--color-element)] text-[var(--color-text)]'
					"
					:key="field"
					@click="changeActiveField(field)"
				>
					<span class="whitespace-nowrap"
						>{{ $t("games.field") }} {{ field }}</span
					>
				</div>
			</div>
		</div>

		<div class="flex-1 overflow-y-auto flex flex-col gap-2 py-2">
			<div
				class="flex w-full"
				v-for="(game, gameId) in store.tournament.games[activeFieldID]"
				:key="gameId"
			>
				<Game :gameId="gameId" class="flex w-full" />
			</div>
		</div>
	</div>
</template>
