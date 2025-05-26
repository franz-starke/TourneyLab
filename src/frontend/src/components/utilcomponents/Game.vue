<script setup>
import { RouterLink } from "vue-router";
import { computed, ref, watch } from "vue";
import { useTournamentStore } from "@/stores/tournamentStore";
import api from "@/api/api.js";

const props = defineProps({
  gameId: {
    type: String,
    required: true,
  },
});

const store = useTournamentStore();
let game = store.getGameById(props.gameId);

const team1 = game[0];
const team2 = game[1];
const referee = game[2]; 
const startTime = game[3];
const points = ref(game[4]);



const gameRoute = computed(() => ({
  name: "edit-game",
  params: { gameId: props.gameId },
}));

watch(
  () => points.value,
  (newPoints) => {

    // console.log("Points updated to", newPoints);
    // TODO: call api if onLine at editGameScore
    if (navigator.onLine) {
      try {
        // FIXME: test whether correct request is sent
        const response = api.editGameScore(store.tournament.id, props.gameId, newPoints);
      } catch (error) {
        console.error("get old tournaments failed");
      }
    }
    
    game[4] = newPoints;
    store.setGameById(props.gameId, game);
    // console.log(store.tournament);
  },
  { deep: true }
);

</script>

<template>
  <RouterLink id="edit-game-state" class="edit-game-link" :to="gameRoute">
    <div id="game-container">
      <p id="time">{{ startTime }}</p>
      <div class="null-game" v-if="team1 == 0 || team2 == 0">--</div>
      <div id="info-container" v-else>
        <div id="team1-vs-team2">
          <p id="teams">Team {{ team1 }} vs. Team {{ team2 }}</p>
        </div>

        <p id="referee">Referee: Team {{ referee }}</p>

        <p>
          Points:
          <input min="0"  type="number" v-model.number="points[0]" @click.stop.prevent /> :<input min="0" type="number" v-model.number="points[1]" @click.stop.prevent/>
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
#teams {
  margin-top: 0.2em;
}

#time {
  margin-bottom: 0.2em;
}

#referee {
  font-size: 0.5em;
}

.edit-game-link {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  color: var(--font-color-main);
}

input[type="number"] {
  -webkit-user-select: text; /* Chrome, Safari */
  -moz-user-select: text;    /* Firefox */
  -ms-user-select: text;     /* Internet Explorer/Edge */
  user-select: text;         /* Standard syntax */
}

input {
  width: 2em;
  height: 1em;
  text-align: center;
  font-size: 1.5em;
  border-radius: 10px;
  border: none;
}

#info-container {
  /* width: 100%; */
  /* height: 100%; */
  border: 1px solid black;
  border-radius: 30px;
  padding: 0.4em 0.4em;
}

#game-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
  background-color: var(--color-background);
  padding: 1em;
}
</style>
