<!-- TODO:
   + fill as per wireframe
   + list games per field via api calls or localstorage (pinia store)
   + maybe create "editable Game"- component for listing Games
      because user should be able to change Game State
      => so when clicking on it, should open a Game-Editor where
          points can be changed (maybe as router-links to a GameEdit.vue component)

-->

<script setup>
import { useTournamentStore } from "@/stores/tournamentStore";
import Game from "../utilcomponents/Game.vue";
import { ref } from "vue";


const activeFieldID = ref(1);
const gamesOfActiveField = ref({});
const store = useTournamentStore();


// TODO: first fetch from api for newest tournamentData and write it into the store
// then always use store to load data (also offline)
if (navigator.onLine) {
  onMounted(async function () {
    try {
      const response = await api.getGamesWithScoresFromField(store.tournament.id, activeFieldID.value);
      gamesOfActiveField.value = response.games;
      // FIXME: see that correct data arrives first
      console.log(response.games);
      store.tournament.games[activeFieldID] = gamesOfActiveField.value;
    } catch (error) {
      console.error("get old tournaments failed");
    }
  });
}

function renderGamesForField(fieldID) {
  activeFieldID.value = fieldID;
  console.log(fieldID);
}
</script>

<template>
  <div id="fields">
    <div class="button" v-for="field in Object.keys(store.tournament.games)" :key="field"
      @click="renderGamesForField(field)">
      Feld {{ field }}
    </div>
  </div>

  <div id="games-for-field">
    <div v-for="(game, gameId) in store.tournament.games[activeFieldID]" :key="gameId">
      <Game :team1="game[0]" :team2="game[1]" :referee="game[2]" :points="game[3]" :gameId="Number(gameId)" />
    </div>
  </div>
</template>

<style scoped>
#fields {
  display: flex;
  justify-content: space-evenly;
}

#games-for-field {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

div.button {
  padding: 0.4em;
}
</style>
