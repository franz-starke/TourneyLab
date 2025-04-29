<script setup>
import { useTournamentStore } from "@/stores/tournamentStore";
import { onBeforeMount, ref, watch } from "vue";

const store = useTournamentStore();

const props = defineProps({
  gameID: {
    type: Number,
    required: true,
  },
});

const game = ref([]);
const points = ref([]);



// TODO: first request most recent Points for game from server
// if not online, then use pinia store
onBeforeMount(() => {
  console.log("gameID ", props.gameID);
  Object.values(store.tournamentData).forEach((field) => {
    Object.keys(field).forEach((gameId) => {
      if (gameId == props.gameID) {
        game.value = field[gameId];
        points.value = field[gameId][3];
      }
    });
  });

  console.log("game ", game.value);
});


//  TODO: first send request to api for new points
watch(
  () => points.value,
  (newPoints) => {
    console.log("Points updated to", newPoints);
    Object.values(store.tournamentData).forEach((field) => {
      Object.keys(field).forEach((gameId) => {
        if (gameId == props.gameID) {
          field[gameId][3] = newPoints;
        }
      });
    });
    console.log(store.tournamentData);
  },
  { deep: true }
);
</script>

<template>
  <h2>Schiedsrichter: {{ game[2] }}</h2>
  <div id="t1-points">
    <p>Team {{ game[0] }}</p>
    <h1>{{ points[0] }}</h1>

    <div id="points-buttons">
      <button
        @click="points[0] > 0 ? (points[0] -= 1) : points[0]"
        class="float-left"
      >
        -
      </button>
      <button
        @click="(points[0] += 1)"
        class="float-right"
      >
        +
      </button>
    </div>
  </div>
  <div id="t2-points">
    <p>Team {{ game[1] }}</p>
    <h1>{{ points[1] }}</h1>

    <div id="points-buttons">
      <button
        @click="points[1] > 0 ? (points[1] -= 1) : points[1]"
        class="float-left"
      >
        -
      </button>
      <button @click="points[1] += 1" class="float-right">+</button>
    </div>
  </div>
</template>

<style scoped>
#t1-points,
#t2-points {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 1em;
}

#points-buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}

.float-left {
  float: left;
}
.float-right {
  float: right;
}

button {
  border-radius: 30px;
  width: 4em;
  height: 4em;
}
</style>
