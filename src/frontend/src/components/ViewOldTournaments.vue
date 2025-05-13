<script setup>
import api from "@/api/api.js";
import { ref, onMounted } from "vue";



const tournamentIds = ref([]);

// getTournamentIds();

onMounted(async () => {
  try {
    const response = await api.getOldTournaments();
    tournamentIds.value = response.tournaments;
    console.log(response.tournaments);
  } catch (error) {
    console.error("get old tournaments failed");
  }
});
</script>


<template>
  <h1>View old Tournaments Not Implemented</h1>
  <div v-for="tourn in tournamentIds"> {{ tourn.id }} </div>

</template>



<style scoped></style>
