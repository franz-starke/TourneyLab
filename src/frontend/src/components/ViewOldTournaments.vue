<script setup>
import api from "@/api/api.js";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import BackHeader from "./utilcomponents/BackHeader.vue";
import { useTournamentStore } from "@/stores/tournamentStore.js";
import IconEnter from '@/components/icons/IconEnter.vue';

const router = useRouter();
const store = useTournamentStore();

const tournaments = ref([]);
const tournamentName = ref("");

onBeforeMount(async function () {
	try {
		const response = await api.getOldTournaments();
		tournaments.value = response.tournaments;
		// console.log(response.tournaments);
	} catch (error) {
		console.error("get old tournaments failed");
	}
});

async function getTournament(tid) {
	try {
		const response = await api.getTournament(tid);
		// set tournament data in the store
		store.tournament.date = response.date;
		store.tournament.id = tid;
		store.tournament.name = response.name;
		store.tournament.groups = response.teams;
		store.tournament.games = response.games;

		// Navigate to the tournament home page
		router.push("/tournament-home/dashboard");
	} catch (error) {
		console.error("get old tournaments failed");
	}
}

function filteredTournaments() {
	if (tournaments.value.length === 0) {
		return [];
	}

	return tournaments.value.filter(tourn => {
		return tourn.name.toLowerCase().includes(tournamentName.value.toLowerCase());
	});
}

</script>


<template>
	<div class="flex flex-col h-[100svh] overflow-hidden">
		<BackHeader />

		<main class="flex flex-col flex-1 items-center px-8">
			<h1 class="text-2xl font-bold text-center mt-8 mb-4">Vergangene Turniere</h1>

			<input class="bg-white p-4 rounded-full font-bold text-center text-gray-500 text-xl mb-4 w-full" type="text"
				v-model="tournamentName" placeholder="Suche Turniername..." maxlength="120" required />

			<div class="w-full overflow-y-auto flex flex-col gap-2 pb-4 h-[65svh]">
				<div class="grid grid-cols-2 grid-rows-2 bg-white rounded-3xl py-2 px-4 cursor-pointer"
					v-for="tourn in filteredTournaments()" :key="tourn.id" v-if="filteredTournaments().length > 0"
					@click="getTournament(tourn.id)">
					<p
						class="place-self-start text-lg font-semibold text-left inline-block overflow-x-clip max-w-[11em] whitespace-nowrap">
						{{ tourn.name }}
					</p>
					<IconEnter class="row-span-2 place-self-end" />
					<p class="place-self-start text-left text-gray-400 font-medium">
						{{ tourn.date }}
					</p>
				</div>

				<div class="flex w-full justify-center mt-50" v-if="filteredTournaments().length == 0">
					<p class="text-xl font-bold">Keine Turniere gefunden...</p>
				</div>
			</div>
		</main>
		
	</div>
</template>
