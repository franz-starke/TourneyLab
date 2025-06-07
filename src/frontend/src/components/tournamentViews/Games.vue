<!-- TODO:
   + fill as per wireframe
   + list games per field via api calls or localstorage (pinia store)

-->

<script setup>
import { useTournamentStore } from "@/stores/tournamentStore";
import Game from "../utilcomponents/Game.vue";
import { ref, onMounted } from "vue";
import api from "@/api/api.js";


const activeFieldID = ref(1);
const gamesOfActiveField = ref({});
const store = useTournamentStore();


// TODO: first fetch from api for newest tournamentData and write it into the store
// then always use store to load data (also offline)
if (navigator.onLine) {
	onMounted(syncGamesForFieldFromAPI);
	// console.log(store.tournament.games[activeFieldID]);
}


async function syncGamesForFieldFromAPI() {
	try {
		const response = await api.getGamesWithScoresFromField(store.tournament.id, activeFieldID.value);
		gamesOfActiveField.value = response.games;

		// assign each game in local store the data from the api
		for (let game of response.games) {
			store.tournament.games[activeFieldID.value][game.id][3] = game.time;
			store.tournament.games[activeFieldID.value][game.id][4] = game.score;
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
	<div id="fields-container">
		<div class="button" v-for="field in Object.keys(store.tournament.games)" :key="field"
			@click="changeActiveField(field)">
			Field {{ field }}
		</div>
	</div>

	<div id="games-container">
		<div v-for="(game, gameId) in store.tournament.games[activeFieldID]" :key="gameId">
			<Game :gameId="gameId" />
		</div>
	</div>
</template>

<style scoped>
#fields-container {
	display: flex;
	justify-content: space-evenly;
}

#games-container {
	overflow: scroll;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
}

div.button {
	padding: 0.4em;
}


@media screen and (max-width: 480px) {
	#games-for-field {
		background-color: black;
	}



}
</style>
