// stores/tournamentStore.js
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { ref, watch } from "vue";

export const useTournamentStore = defineStore("tournament", () => {
  const tournament = ref({
    game: {},
    name: "",
    id: "",
    groups: [],
  });

  // Use local storage to persist tournament name
  const tournamentLocalStorage = useLocalStorage("tournament", {});
  tournament.value = tournamentLocalStorage.value;
  watch(tournament, (newName) => {
    storedTournamentName.value = newName;
  });

  return {
    tournament,
  };
});
