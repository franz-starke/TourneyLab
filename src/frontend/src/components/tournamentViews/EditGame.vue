<script setup>
import { useTournamentStore } from "@/stores/tournamentStore";
import { onBeforeMount, ref, watch } from "vue";
import api from "@/api/api.js";

const store = useTournamentStore();


const props = defineProps({
	gameId: {
		type: Number,
		required: true,
	},
});
const game = ref([]);
const points = ref([]);


// TODO: get this games score from api first if online
// if online: update pinia store
// then always use pinia store for rendering
onBeforeMount(async function () {

	game.value = store.getGameById(props.gameId);

	if (navigator.onLine) {
		try {
			const response = await api.getGameScore(store.tournament.id, props.gameId);

			// console.log("Server Points: ", response.score);

			// update local store
			game.value[4] = response.score;
			store.setGameById(props.gameId, game.value);

		} catch (error) {
			console.error("get old tournaments failed");
		}
	}

	points.value = game.value[4];
});

watch(
	() => points.value,
	(newPoints) => {
		game.value[4] = newPoints;

		console.log("Points updated to", newPoints);
		if (navigator.onLine) {
			try {
				const response = api.editGameScore(store.tournament.id, props.gameId, newPoints);
			} catch (error) {
				console.error("Edit games failed");
			}
		}

		store.setGameById(props.gameId, game.value);
	},
	{ deep: true }
);
</script>

<template>
	<div class="flex flex-col w-full justify-center items-center">
		<h2 class="text-xl font-bold">Schiedsrichter: {{ game[2] }}</h2>
		<span class="font-bold text-gray-500"> {{ game[3] }}</span>
	</div>

	<div class="flex flex-col h-full justify-evenly">
		<div class="flex flex-col w-full justify-center items-center rounded-3xl p-2 bg-white">
			<span class="text-xl font-bold text-gray-500">Team {{ game[0] }}</span>
			<span class="text-8xl font-bold">{{ points[0] }}</span>

			<div class="flex w-full justify-between">
				<button @click="points[0] > 0 ? (points[0] -= 1) : points[0]"
					class="flex justify-center items-center w-15 h-15 rounded-full text-4xl bg-gray-300">-</button>
				<button @click="points[0] += 1"
					class="flex justify-center items-center w-15 h-15 rounded-full text-4xl bg-gray-300">+</button>
			</div>
		</div>

		<div class="flex flex-col w-full justify-center items-center rounded-3xl p-2 bg-white">
			<span class="text-xl font-bold text-gray-500">Team {{ game[1] }}</span>
			<span class="text-8xl font-bold">{{ points[1] }}</span>

			<div class="flex w-full justify-between">
				<button @click="points[1] > 0 ? (points[1] -= 1) : points[1]"
					class="flex justify-center items-center w-15 h-15 rounded-full text-4xl bg-gray-300">-</button>
				<button @click="points[1] += 1"
					class="flex justify-center items-center w-15 h-15 rounded-full text-4xl bg-gray-300">+</button>
			</div>
		</div>
	</div>
</template>