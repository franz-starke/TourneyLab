<script setup>
import QrcodeVue, { QrcodeCanvas, QrcodeSvg } from "qrcode.vue";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import { ref } from "vue";
import { useTournamentStore } from "@/stores/tournamentStore";
import { gzip, ungzip } from 'pako';

const store = useTournamentStore();

const syncGames = ref(false);

// 1. Convert to JSON string
const jsonStr = JSON.stringify(store.tournament);
// Note: The `null, 2` is for pretty-printing the JSON with indentation
// 2. Compress using GZIP
const compressed = gzip(jsonStr);
// 3. Encode to Base64 (QR-safe string)
const base64Encoded = btoa(String.fromCharCode(...compressed));
const qrvalue = ref(base64Encoded);
function onDetect(detectedCodes) {
  // detectedCodes is a Proxy Array
  const rawValue = detectedCodes[0].rawValue;
  const decoded = atob(rawValue);
  const decompressed = ungzip(new Uint8Array([...decoded].map(c => c.charCodeAt(0))), { to: 'string' });
  
  // Parse the JSON string back to an object
  const tournamentData = JSON.parse(decompressed);
  
  // Update the store with the new tournament data
  store.updateTournament(tournamentData);
  
  console.log("Tournament data updated:", tournamentData);
}

function toggleSyncGames() {
  syncGames.value = !syncGames.value;
}
</script>

<template>
  <!-- Tournament Dashboard -->
  <div v-if="!syncGames" id="dashboard-container" class="flex-container">
    <h1>Dashboard</h1>
    <div class="button" @click="toggleSyncGames">Sync Games</div>
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
      :value="qrvalue"`
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
