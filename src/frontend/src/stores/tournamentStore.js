// stores/tournamentStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTournamentStore = defineStore("tournament", () => {
  const tournamentName = ref("lol");
  const tournamentData = ref({});

  function updateTournament(data) {
    tournamentData.value = data;
  }

  function setTournamentName(name) {
    tournamentName.value = name;
  }

  return {
    tournamentName,
    tournamentData,
    updateTournament,
    setTournamentName,
  };
});
