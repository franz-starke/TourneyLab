<script setup>
import api from "@/api/api.js";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import BackHeader from "./utilcomponents/BackHeader.vue";
import { useTournamentStore } from "@/stores/tournamentStore.js";
import IconEnter from '@/components/icons/IconEnter.vue';
import Input from "@/components/ui/input/Input.vue";

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
  <BackHeader />
  <h1 class="text-2xl font-medium text-center m-4">Erstellte Turniere</h1>

<div class="flex items-center justify-center sticky top-0">
  <Input class="text-input m-4" type="text" v-model="tournamentName" placeholder="Suche Turniername" maxlength="120" required />
</div>  

  <div class="flex flex-col items-stretch  gap-4 overflow-scroll h-[calc(100vh-15rem)]">
    <div class="grid grid-cols-2 grid-rows-2  default-btn" style="cursor: pointer" v-for="tourn in filteredTournaments()"
      :key="tourn.id" @click="getTournament(tourn.id)">
      <p  class="place-self-start text-lg font-semibold text-left inline-block overflow-x-auto max-w-[11em] whitespace-nowrap">{{ tourn.name }}</p>
      <IconEnter class="row-span-2 place-self-end"/>
      <p class="place-self-start text-left text-zinc-500 font-medium">{{ tourn.date }}</p>
    </div>
    <div class="" v-if="tournamentName && !filteredTournaments().length">
      <p>No results found!</p>
    </div>
  </div>
</template>

<style scoped>

.default-btn {
  margin: 0 2em;
  border-radius: 20px;
}
</style>
