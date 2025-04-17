<script setup>
import QrcodeVue, { QrcodeCanvas, QrcodeSvg } from "qrcode.vue";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import { ref } from "vue";

const value = ref(JSON.stringify({ Team: 1, Spiel: "Hannes" }));
const size = ref(300);

const syncGames = ref(false);

function onDetect(detectedCodes) {}
function toggleSyncGames() {
  syncGames.value = !syncGames.value;
}
</script>

<template>
  <!-- ? maybe use dynamic component loading instead of conditional rendering -->
  <!-- Tournament Dashboard -->
  <div v-if="!syncGames" id="dashboard-container" class="flex-container">
    <h1>Dashboard</h1>
    <div class="highlight-button" @click="toggleSyncGames">Sync Games</div>
  </div>



  
  <!-- Dialog for syncing Games  -->
  <div v-else id="synchronize-games-container" class="flex-container">
    <div class="highlight-button" @click="toggleSyncGames">Dashboard</div>

    <h2>QR-Scanner for offline updating Tournament Data:</h2>
    <div id="qr-code-wrapper">
      <qrcode-stream @detect="onDetect"></qrcode-stream>
    </div>

    <h2>QR-Generator for current Tournament Data:</h2>
    <qrcode-vue
      class="qr-code"
      :value="value"
      :size="size"
      level="H"
      render-as="svg"
    />
  </div>
</template>

<style scoped>
div.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#qr-code-wrapper {
  width: 30%; /* Set the width you desire */
  height: 30%; /* Set the height you desire */
  overflow: hidden; /* Prevent the content from spilling out */
}
</style>
