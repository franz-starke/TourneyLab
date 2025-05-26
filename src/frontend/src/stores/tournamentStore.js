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
    for (const gamesOnField of Object.values(tournament.value.games)) {
      if (gameId in gamesOnField) {
        return gamesOnField[gameId];
      }
    }
    return undefined;
  }

function setGameById(gameId, updatedGame) {
      // console.log("update ",updatedGame)
  for (const [field, gamesOnField] of Object.entries(tournament.value.games)) {
    if (gameId in gamesOnField) {
      gamesOnField[gameId] = updatedGame;
      // Update the reactive tournament object
      tournament.value.games[field] = { ...gamesOnField };
      // console.log("Updated game: ", tournament.value.games[field]);
      // Update the local storage
      break;
    }
  }
}


  return {
    setGameById,
    getGameById,
    tournament,
  };
});
