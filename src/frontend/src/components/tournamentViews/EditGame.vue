<script setup>
import { useTournamentStore } from "@/stores/tournamentStore";
import { onBeforeMount, ref, watch } from "vue";

const store = useTournamentStore();

const props = defineProps({
  gameId: {
    type: Number,
    required: true,
  },
});

const game = ref([]);
const points = ref([]);


// TODO: get this games score from api first if online
// if online: update pinia store
// then always use pinia store for rendering
onBeforeMount(async function () {
  if (navigator.onLine) {
    try {
      const response = await api.getGameScore(store.tournament.id, props.gameId);

      // FIXME: see that correct data arrives first
      console.log(response.score);
      //TODO: update store here

    } catch (error) {
      console.error("get old tournaments failed");
    }
  }

  console.log("gameId ", props.gameId);
  Object.values(store.tournament.games).forEach((field) => {
    Object.keys(field).forEach((gameId) => {
      if (gameId == props.gameId) {
        game.value = field[gameId];
        points.value = field[gameId][4];
      }
    });
  });

});

watch(
  () => points.value,
  (newPoints) => {

    console.log("Points updated to", newPoints);
    // TODO: call api if onLine at editGameScore
    if (navigator.onLine) {
      try {
        // FIXME: test whether correct request is sent
        const response = api.editGameScore(store.tournament.id, props.gameId, newPoints);
      } catch (error) {
        console.error("get old tournaments failed");
      }
    }

    Object.values(store.tournament.games).forEach((field) => {
      Object.keys(field).forEach((gameId) => {
        if (gameId == props.gameId) {
          console.log("new points", newPoints)
          field[gameId][4] = newPoints;
        }
      });
    });
    console.log(store.tournament);
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
      <button @click="points[0] > 0 ? (points[0] -= 1) : points[0]" class="float-left">
        -
      </button>
      <button @click="points[0] += 1" class="float-right">+</button>
    </div>
  </div>
  <div id="t2-points">
    <p>Team {{ game[1] }}</p>
    <h1>{{ points[1] }}</h1>

    <div id="points-buttons">
      <button @click="points[1] > 0 ? (points[1] -= 1) : points[1]" class="float-left">
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
