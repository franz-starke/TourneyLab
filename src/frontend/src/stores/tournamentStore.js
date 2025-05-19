// stores/tournamentStore.js
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { ref, watch } from "vue";

export const useTournamentStore = defineStore("tournament", () => {
  const tournament = ref({
    games: {},
    name: "",
    id: "",
    groups: [],
  });

  // Use local storage to persist tournament
  const tournamentLocalStorage = useLocalStorage("tournament", {});
  tournament.value = tournamentLocalStorage.value;
  watch(tournament, (newTournament) => {
    tournamentLocalStorage.value = newTournament;
  });


  function getGameById(gameId) {
    for (const [field, gamesOnField] of Object.entries(tournament.value.games)) {
      for (const [gId, game] of Object.entries(gamesOnField)) {
        if (gId == gameId) {
          return tournament.value.games[field][gId];
        }
      }
    };
    return undefined;
  }


  return {
    getGameById,
    tournament,
  };
});
