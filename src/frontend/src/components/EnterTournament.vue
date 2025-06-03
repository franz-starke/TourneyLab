<script setup>
// TODO: add a QR-Code scanner to enter a tournament via Tournament Code

import { createTournamentAlgo } from "@/util/tournamentalgo.js";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import { ref, computed } from "vue";
import { useTournamentStore } from "@/stores/tournamentStore";
import BackHeader from "./utilcomponents/BackHeader.vue";
import api from "@/api/api.js";
import { useRouter } from "vue-router";
import { gzip, ungzip } from "pako";

const debugInfo = ref("degubingfo: pls scan a qr-code");
const tournamentId = ref("");

const store = useTournamentStore();
const router = useRouter();

const isOnline = computed(() => {
  return navigator.onLine;
});


async function enterTournament() {
  if (tournamentId.value === "") {
    alert("Bitte geben Sie einen Turnier-Code ein.");
    return;
  }

  try {
    const response = await api.getTournament(tournamentId.value);
    // set tournament data in the store
    store.tournament.date = response.date;
    store.tournament.id = response.id;
    store.tournament.name = response.name;
    store.tournament.groups = response.teams;
    store.tournament.games = response.games;

    // Navigate to the tournament home page
    router.push("/tournament-home/dashboard");
  } catch (error) {
    console.error("Error fetching tournament data:", error);
    alert("Fehler beim Abrufen des Turniers. Bitte überprüfen Sie den Code.");
  }
}

function onDetect(detectedCodes) {
  let rawValue = detectedCodes[0].rawValue;
  if (rawValue === "") {
    alert("Bitte scannen Sie einen gültigen QR-Code.");
    return;
  }
  const decoded = atob(rawValue);
  const decompressed = ungzip(new Uint8Array([...decoded].map(c => c.charCodeAt(0))), { to: 'string' });

  // Parse the JSON string back to an object
  const tournamentData = JSON.parse(decompressed);
  tournamentId.value = tournamentData.id;

  if(navigator.onLine) {
    enterTournament();
  } else {

  // Update the store with the new tournament data
  store.tournament = tournamentData;
  console.log("Tournament data updated:", tournamentData);
  router.push("/tournament-home/dashboard");
  }
}
</script>

<template>
  <BackHeader />
  <h1 class="text-2xl font-medium text-center">Turnier beitreten</h1>

  <p class="text-gray-700 text-xs text-center ">QR-Code scannen</p>
  <div class="rounded-lg border-2 border-gray-300 p-4 mb-4">
    <qrcode-stream @detect="onDetect"></qrcode-stream>
  </div>


  <p for="enter-code" class="text-gray-700 font-medium text-xs text-center ">oder manuell eingeben</p>
  <div v-if="isOnline" class="flex flex-col  items-stretch justify-center gap-4">
    <input id="enter-code" class="text-input" name="enter-code" type="text" placeholder="Turnier-Code eingeben..."
      v-model="tournamentId" />
    <div class="default-btn" @click="enterTournament">Enter</div>
  </div>

</template>


<style scoped></style>
