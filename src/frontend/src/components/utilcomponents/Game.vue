<script setup>
import { RouterLink } from "vue-router";
import { computed, ref, watch } from "vue";
import { useTournamentStore } from "@/stores/tournamentStore";
import api from "@/api/api.js";

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



const gameRoute = computed(() => ({
	name: "edit-game",
	params: { gameId: props.gameId },
}));

watch(
	() => points.value,
	(newPoints) => {

		// console.log("Points updated to", newPoints);
		// TODO: call api if onLine at editGameScore
		if (navigator.onLine) {
			try {
				// FIXME: test whether correct request is sent
				const response = api.editGameScore(store.tournament.id, props.gameId, newPoints);
			} catch (error) {
				console.error("get old tournaments failed");
			}
		}

		game[4] = newPoints;
		store.setGameById(props.gameId, game);
		// console.log(store.tournament);
	},
	{ deep: true }
);


const numberInput1 = ref(null)
function selectInput1() {
  numberInput1.value?.select()
}

const numberInput2 = ref(null)
function selectInput2() {
  numberInput2.value?.select()
}
</script>

<template>
	<RouterLink :to="gameRoute">
		<div class="flex flex-col w-full justify-center items-center">
			<p class="font-bold text-gray-500">{{ startTime }}</p>
			<div class="null-game" v-if="team1 == 0 || team2 == 0">--</div>
			<div class="flex flex-row justify-between items-center w-full px-4 py-2 bg-[var(--color-element)] rounded-3xl" v-else>
				<div class="flex flex-col">
					<div>
						<p class="text-lg font-bold">{{ $t('games.team') }} {{ team1 }} vs. {{ $t('games.team') }} {{ team2 }}</p>
					</div>

					<p class="text-sm font-bold text-gray-500">{{ $t('games.ref') }}: {{ $t('games.team') }} {{ referee }}</p>
				</div>

				<div class="flex flex-row w-30 justify-evenly items-center bg-[var(--color-sub-element)] p-2 rounded-full">
					<input class="flex w-8 text-center text-2xl font-bold" ref="numberInput1" min="0" type="number"
						v-model.number="points[0]" @click.stop.prevent @click="selectInput1()" @focus="selectInput1()"/>
					:
					<input class="flex w-8 text-center text-2xl font-bold" ref="numberInput2" min="0" type="number"
						v-model.number="points[1]" @click.stop.prevent @click="selectInput2()" @focus="selectInput2()" />
				</div>
			</div>
		</div>
	</RouterLink>
</template>
