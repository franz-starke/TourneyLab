<script setup>
import api from "@/api/api.js";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import BackHeader from "./utilcomponents/BackHeader.vue";
import { useTournamentStore } from "@/stores/tournamentStore.js";
import IconEnter from '@/components/icons/IconEnter.vue';

const router = useRouter();
const store = useTournamentStore();

const tournamentIds = ref([]);

onBeforeMount(async function () {
  try {
    const response = await api.getOldTournaments();
    tournamentIds.value = response.tournaments;
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
  <h1 class="text-2xl font-medium text-center">Erstellte Turniere</h1>
  <div class="flex flex-col items-stretch justify-between gap-4">
    <div class="flex flex-row justify-between  default-btn" style="cursor: pointer" v-for="tourn in tournamentIds"
      :key="tourn.id" @click="getTournament(tourn.id)">
      {{ tourn.name }}
      <IconEnter />
    </div>
  </div>
</template>

<style scoped></style>
