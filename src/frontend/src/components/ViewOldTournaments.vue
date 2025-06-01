<script setup>
import api from "@/api/api.js";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import BackHeader from "./utilcomponents/BackHeader.vue";
import { useTournamentStore } from "@/stores/tournamentStore.js";


const router = useRouter();
const store = useTournamentStore();

const tournamentIds = ref([]);

onBeforeMount(async function () {
  try {
    const response = await api.getOldTournaments();
    tournamentIds.value = response.tournaments;
    console.log(response.tournaments);
  } catch (error) {
    console.error("get old tournaments failed");
  }
});

// TODO: Get old Tournament details when user clicks on one
async function getTournament(tid) {
  try {
    const response = await api.getTournament(tid);

    // set tournament data in the store
    store.tournament.date = response.date;
    store.tournament.id = response.id;
    store.tournament.name = response.name;
    store.tournament.groups = response.teams;
    store.tournament.games = response.games;

    // Navigate to the tournament home page
    router.push("/tournament-home/dashboard");
  } catch (error) {
    console.error("get old tournaments failed");
  }
}
</script>

<template>
  <BackHeader />
  <h1 class="underline">Old Tournaments</h1>
  <div class="button" style="cursor: pointer" v-for="tourn in tournamentIds" :key="tourn.id"
    @click="getTournament(tourn.id)">
    {{ tourn.name }}
  </div>
</template>

<style scoped></style>
