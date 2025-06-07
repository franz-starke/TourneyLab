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
const qrSize = ref(0);
onMounted(() => {
	const minSize = Math.min(window.innerWidth, window.innerHeight);
	qrSize.value = minSize * 0.7;
});

// // 1. Convert to JSON string
// qr code can hold max of 1273 characters at Level H and 2953 at Level L

const jsonStr = JSON.stringify(store.tournament);
console.log("Tournament JSON String: ", jsonStr, "Length: ", jsonStr.length);
// 2. Compress using GZIP
const compressed = gzip(jsonStr);
console.log("Compressed:", compressed, "Compressed Length: ", compressed.length);
// 3. Encode to Base64 (QR-safe string)
const base64Encoded = btoa(String.fromCharCode(...compressed));
console.log("Base64 Encoded:", base64Encoded, "Length: ", base64Encoded.length);
const qrvalue = ref(base64Encoded); // this works, because the longest possible Tournament Json String results to 2756 characters,which is in the Limits of an L level QR Code

function onDetect(detectedCodes) {
	// detectedCodes is a Proxy Array
	const rawValue = detectedCodes[0].rawValue;
	if (rawValue === "") {
		alert("Bitte scannen Sie einen gültigen QR-Code.");
		return;
	}
	const decoded = atob(rawValue);
	const decompressed = ungzip(new Uint8Array([...decoded].map(c => c.charCodeAt(0))), { to: 'string' });

	// Parse the JSON string back to an object
	const tournamentData = JSON.parse(decompressed);

	// Update the store with the new tournament data
	store.tournament = tournamentData;

	console.log("Tournament data updated:", tournamentData);
}


// qrval is only tournament id: 
// const qrvalue = ref(store.tournament.id);


// console.log("QR Value: ", qrvalue.value);



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

	<div v-else-if="!syncGames" id="dashboard-container"
		class="flex flex-col align-center justify-between gap-4 h-full p-4">
		<button class="highlighted-btn flex flex-row items-center justify-center gap-4" @click="toggleSyncGames">
			<span class="block text-xl font-bold">Spielstände Sync.</span>
			<IconQrCode />
		</button>

		<button class="highlighted-btn flex flex-row items-center justify-center gap-4" @click="evalTournament">
			<span class="block text-xl font-bold">Turnier auswerten</span>
			<IconTrophy />
		</button>
	</div>

	<!-- Dialog for syncing Games  -->
	<div v-else id="synchronize-games-container" class="flex-container">

		<h2>QR-Scanner for offline updating Tournament Data:</h2>
		<div id="qr-code-wrapper">
			<qrcode-stream @detect="onDetect"></qrcode-stream>
		</div>

		<!-- TODO: if online, we can use smaller Qrcodes -->
		<div class="flex flex-col items-center justify-center gap-4">
			<h2 class="font-medium">Turnier QR-Code: <span class="text-blue-500">{{ store.tournament.id }}</span></h2>
			<qrcode-vue class="" :value="qrvalue" :size="qrSize" level="L" render-as="svg" />
		</div>
	</div>
</template>

<style scoped></style>
