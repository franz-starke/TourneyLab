// stores/tournamentStore.js
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core"
import { ref, watch } from "vue";


export const useTournamentStore = defineStore("tournament", () => {
  const tournamentGroups = ref(1)
  const tournamentName = ref("");
  const tournamentData = ref({});

  function updateTournament(data) {
    tournamentData.value = data;
  }

  

  // Use local storage to persist tournament name
  const storedTournamentName = useLocalStorage("tournamentName", "");
  tournamentName.value = storedTournamentName.value;
  watch(tournamentName, (newName) => {
    storedTournamentName.value = newName;
  });


  const storedTournamentData = useLocalStorage("tournamentData", {});
  tournamentData.value = storedTournamentData.value;

  watch(tournamentData, (newData) => {
    storedTournamentData.value = newData;
  });
  // now if updateTournamentData is called and tournamentData.value is changed, 
  // the same change will apply to localstorage


  function setTournamentName(name) {
    tournamentName.value = name;
  }

  function setTournamentGroups(groups) {
    tournamentGroups.value = groups;
  }

  return {
    tournamentGroups,
    tournamentName,
    tournamentData,
    updateTournament,
    setTournamentName,
  };
});
