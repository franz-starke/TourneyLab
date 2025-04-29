<script setup>
import { createTournamentAlgo } from "../tournamentalgo/tournamentalgo.js";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import { ref } from "vue";
import { useTournamentStore } from "@/stores/tournamentStore";

const debugInfo = ref("degubingfo: pls scan a qr-code");
const tournamentName = ref("test");

const store = useTournamentStore();

// FIXME: change function to enter tournament based on input field not only test data
function enterCodeEval(event) {
  // * handle enter tournament manually by input
  // * only supports test data atm
  store.setTournamentName(tournamentName.value); // or some user input

  if (tournamentName.value.toLowerCase() === "test") {
    // ! static test tournament data here
    store.updateTournament(createTournamentAlgo(3, 0, 1, 2, false));
  } else {
    console.log("Haven't implemented tournaments except for test");
  }
}

async function onDetect(detectedCodes) {
  // detectedCodes is a Proxy Array
  debugInfo.value = await JSON.parse(detectedCodes[0].rawValue);
  console.log(JSON.stringify(debugInfo.value, null, 2));
}
</script>

<template>
  <h2>Scan Tournament QR-Code</h2>
  <div class="flex-container">
    <div id="qr-code-wrapper">
      <qrcode-stream @detect="onDetect"></qrcode-stream>
    </div>

    <!-- output of what the qr-scanner scans -->
    <p>
      {{ debugInfo }}
    </p>

    <input
      id="enter-code"
      type="text"
      placeholder="Turnier-Code eingeben..."
      v-model="tournamentName"
    />
    <RouterLink
      class="router-link"
      to="/tournament-home/dashboard"
      @click.native="enterCodeEval"
      >Beitreten</RouterLink
    >
  </div>
</template>




<style scoped>
#qr-code-wrapper {
  width: 30%; /* Set the width you desire */
  height: 30%; /* Set the height you desire */
  overflow: hidden; /* Prevent the content from spilling out */
}

#enter-code {
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
