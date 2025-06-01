<script setup>
import { createTournamentAlgo } from "@/util/tournamentalgo.js";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import { ref, computed } from "vue";
import { useTournamentStore } from "@/stores/tournamentStore";
import BackHeader from "./utilcomponents/BackHeader.vue";
import api from "@/api/api.js";
import { useRouter } from "vue-router";

const debugInfo = ref("degubingfo: pls scan a qr-code");
const tournamentId = ref("");

const store = useTournamentStore();
const router = useRouter();

const isOnline = computed(() => {
  return navigator.onLine;
});

async function enterTournament() {
  if (tournamentId.value === "") {
    alert("Please enter a tournament code.");
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

async function onDetect(detectedCodes) {
  // detectedCodes is a Proxy Array
  debugInfo.value = await JSON.parse(detectedCodes[0].rawValue);
  console.log(JSON.stringify(debugInfo.value, null, 2));
}
</script>

<template>
  <BackHeader />
  <h2>Scan Tournament QR-Code</h2>
  <div class="flex-container">
    <div id="qr-code-wrapper">
      <qrcode-stream @detect="onDetect"></qrcode-stream>
    </div>

    <!-- output of what the qr-scanner scans -->
    <p>
      {{ debugInfo }}
    </p>

    <div>
      <div v-if="isOnline">
        <label for="enter-code">Enter Tournament Id</label>
        <input id="enter-code" name="enter-code" type="text" placeholder="Turnier-Code eingeben..."
          v-model="tournamentId" />
        <div id="button" class="button" @click="enterTournament">Enter</div>
      </div>
    </div>
  </div>
</template>




<style scoped>
#qr-code-wrapper {
  width: 30%;
  /* Set the width you desire */
  height: 30%;
  /* Set the height you desire */
  overflow: hidden;
  /* Prevent the content from spilling out */
}

#enter-code {
  border: 1px solid #ccc;
  border-radius: 30px;
}

div.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input.enter-code {
  display: block;
  flex-shrink: 0;
  width: 70%;
}

a.router-link {
  width: 100%;
}
</style>
