// stores/tournamentStore.js
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useTournamentStore = defineStore("tournament", () => {
  //  tournament object in LocalStorage:
  //   games: {},
  //   name: "",
  //   id: "",
  //   groups: {},
  //   date: ""

  const tournament = useLocalStorage("tournament", {});

  function getGameById(gameId) {
    for (const gamesOnField of Object.values(tournament.value.games)) {
      if (gameId in gamesOnField) {
        return gamesOnField[gameId];
      }
    }
    return undefined;
  }


  // FIXME: check if correct
function setGameById(gameId, updatedGame) {
  for (const [field, gamesOnField] of Object.entries(tournament.value.games)) {
    if (gameId in gamesOnField) {
      gamesOnField[gameId] = updatedGame;
      // Update the reactive tournament object
      tournament.value.games[field] = { ...gamesOnField };
      // console.log("Updated game: ", tournament.value.games[field]);
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
