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

// TODO: first fetch from api for newest tournamentData and write it into the store
// if offline just use store
const activeFieldID = ref(1);

const store = useTournamentStore();
console.log(store.tournamentData);

function renderGamesForField(fieldID) {
  activeFieldID.value = fieldID;
  console.log(fieldID);
}
</script>

<template>
  <div id="fields">
    <div
      class="button"
      v-for="field in Object.keys(store.tournamentData)"
      @click="renderGamesForField(field)"
    >
      Feld {{ field }}
    </div>
  </div>

  <div id="games-for-field">
    <div
      v-for="(game, gameID) in store.tournamentData[activeFieldID]"
      :key="gameID"
    >
      <Game 
        :team1="game[0]"
        :team2="game[1]"
        :referee="game[2]"
        :points="game[3]"
        :gameID="Number(gameID)"
      />
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
