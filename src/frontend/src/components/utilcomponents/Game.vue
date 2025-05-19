<script setup>
import { RouterLink } from "vue-router";
import { computed, ref, onMounted } from "vue";
import { useTournamentStore } from "@/stores/tournamentStore";


const props = defineProps({
  team1: {
    type: Number,
    required: true,
  },
  team2: {
    type: Number,
    required: true,
  },
  referee: {
    type: Number,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  // points: {
  //   type: Array,
  //   required: true,
  // },
  gameId: {
    type: String,
    required: true,
  },
});



const store = useTournamentStore();

const game = ref(store.getGameById(props.gameId));
console.log(game.value)
const points = ref(game.value[4]);
points[0] = 3;

const gameRoute = computed(() => ({
  name: "edit-game",
  params: { gameId: props.gameId },
}));
</script>

<template>
  <RouterLink id="edit-game-state" class="edit-game-link" :to="gameRoute">
    <div id="game-container">
      <p id="time">{{ startTime }} </p>
      <div class="null-game" v-if="team1 == 0 || team2 == 0"> -- </div>
      <div id="info-container" v-else>
        <div id="team1-vs-team2">
          <p id="teams">Team {{ team1 }} vs. Team {{ team2 }}</p>
        </div>

        <p id="referee">Referee: Team {{ referee }}</p>

        <p>Points: <input type="number" :value="points[0]" @click.stop.prevent> :<input type="number" :value="points[1]"
            @click.stop.prevent></p>
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
