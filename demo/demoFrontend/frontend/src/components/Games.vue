<script setup>
import { ref,reactive  } from 'vue';
import GameBlock from './GameBlock.vue';
import { watch } from 'vue';

// Initialize with default data or as an empty array
const gameData = ref([]);
gameData.value = [
  { "time": "14:30 - 15:00", "games": [{ "Fun 1": 12, "Fun 2": 20 }] }
];
console.log('Data:', gameData.value[0]["time"]);
watch(gameData, (newValue) => {
  console.log('Data changed:', newValue);
});
</script>

<template>
  <div id="fields">
    <div>Feld 1</div>
    <div>Feld 2</div>
    <div>Feld 3</div>
  </div>

  <!-- Safe rendering with optional chaining -->
  <div v-if="gameData.value?.length > 0">
    <GameBlock :time="gameData.value[0].time" :games="gameData.value[0].games" />
  </div>
</template>

<style scoped>
</style>
