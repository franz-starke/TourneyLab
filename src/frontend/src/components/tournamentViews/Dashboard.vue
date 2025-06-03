<script setup>
import QrcodeVue, { QrcodeCanvas, QrcodeSvg } from "qrcode.vue";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import { ref, onMounted, watch } from "vue";
import { useTournamentStore } from "@/stores/tournamentStore";
import IconQrCode from "../icons/IconQrCode.vue";
import IconTrophy from "../icons/IconTrophy.vue";
import { gzip, ungzip } from "pako";

const store = useTournamentStore();

const syncGames = ref(false);
const evalShow = ref(false);

// // 1. Convert to JSON string
// const jsonStr = JSON.stringify(store.tournament);
// // Note: The `null, 2` is for pretty-printing the JSON with indentation
// // 2. Compress using GZIP
// const compressed = gzip(jsonStr);
// // 3. Encode to Base64 (QR-safe string)
// const base64Encoded = btoa(String.fromCharCode(...compressed));
// const qrvalue = ref(base64Encoded);
// function onDetect(detectedCodes) {
//   // detectedCodes is a Proxy Array
//   const rawValue = detectedCodes[0].rawValue;
//   const decoded = atob(rawValue);
//   const decompressed = ungzip(new Uint8Array([...decoded].map(c => c.charCodeAt(0))), { to: 'string' });

//   // Parse the JSON string back to an object
//   const tournamentData = JSON.parse(decompressed);

//   // Update the store with the new tournament data
//   store.updateTournament(tournamentData);

//   console.log("Tournament data updated:", tournamentData);
// }

const qrvalue = ref(store.tournament.id);
console.log("QR Value: ", qrvalue.value);

function toggleSyncGames() {
  syncGames.value = !syncGames.value;
}

function evalTournament() {
  console.log("Evaluating Tournament...");
  evalShow.value = true;
}
</script>

<template>
  <!-- Tournament Dashboard -->
  <div v-if="evalShow" id="eval-dialog">
    <h2>Turnier Auswertung kommt noch</h2>
  </div>

  <div
    v-else-if="!syncGames"
    id="dashboard-container"
    class="flex flex-col align-center justify-between gap-4 h-full p-4"
  >
    <button
      class="highlighted-btn flex flex-row items-center justify-center gap-4"
      @click="toggleSyncGames"
    >
      <span class="block text-xl font-bold">Spielstände Sync.</span>
      <IconQrCode />
    </button>

    <button
      class="highlighted-btn flex flex-row items-center justify-center gap-4"
      @click="evalTournament"
    >
      <span class="block text-xl font-bold">Turnier auswerten</span>
      <IconTrophy />
    </button>
  </div>

  <!-- Dialog for syncing Games  -->
  <div v-else id="synchronize-games-container" class="flex-container">

    <!-- <h2>QR-Scanner for offline updating Tournament Data:</h2> -->
    <!-- <div id="qr-code-wrapper">
      <qrcode-stream @detect="onDetect"></qrcode-stream>
    </div> -->

   
    <div class="flex flex-col items-center justify-center gap-4">
       <h2 class="font-medium">Turnier QR-Code: <span class="text-blue-500">{{ qrvalue }}</span></h2>
      <qrcode-vue class="rounded-md " :value="qrvalue" :size="200" level="H" render-as="svg" />
    </div>
  </div>
</template>

<style scoped>



</style>
