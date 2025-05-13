<script setup>
import api from "@/api/api.js";
import { ref, onBeforeMount } from "vue";



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
    const tdata = await api.getTournament(tid);
    console.log(tdata);
  } catch (error) {
    console.error("get old tournaments failed");
  }
}
</script>


<template>
  <h1>View old Tournaments Not Implemented</h1>
  <div style="cursor:pointer;" v-for="tourn in tournamentIds" :key="tourn.id" @click="getTournament(tourn.id)"> {{
    tourn.id }} {{ tourn.name }}
  </div>


</template>



<style scoped></style>
