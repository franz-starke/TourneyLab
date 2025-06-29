<script setup>
import QrcodeVue, { QrcodeCanvas, QrcodeSvg } from "qrcode.vue";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import IconCamera from "../icons/IconCamera.vue";
import { useTournamentStore } from "@/stores/tournamentStore";
import { ref, onMounted } from "vue";
import { gzip, ungzip } from "pako";



const store = useTournamentStore();

const qrSize = ref(0);
onMounted(() => {
	const minSize = Math.min(window.innerWidth, window.innerHeight);
	qrSize.value = minSize <= 750 ? minSize * 0.85 : 750;
});

const scannerActive = ref(false);
// Start scanner after 2 seconds (adjust as needed)
setTimeout(() => {
	scannerActive.value = true;
}, 2000);

// QrCode data for offline sync
// 1. Convert to JSON string
// qr code can hold max of 1273 characters at Level H and 2953 at Level L
const jsonStr = JSON.stringify(store.tournament);
console.log("Tournament JSON String: ", jsonStr, "Length: ", jsonStr.length);
// 2. Compress using GZIP
const compressed = gzip(jsonStr);
console.log(
	"Compressed:",
	compressed,
	"Compressed Length: ",
	compressed.length
);
// 3. Encode to Base64 (QR-safe string)
const base64Encoded = btoa(String.fromCharCode(...compressed));
console.log("Base64 Encoded:", base64Encoded, "Length: ", base64Encoded.length);
const qrvalue = ref(base64Encoded); // this works, because the longest possible Tournament Json String results to 2756 characters,which is in the Limits of an L level QR Code

// Qr scanner function
function onDetect(detectedCodes) {
	// detectedCodes is a Proxy Array
	const rawValue = detectedCodes[0].rawValue;
	if (rawValue === "") {
		alert("Bitte scannen Sie einen gültigen QR-Code.");
		return;
	}
	const decoded = atob(rawValue);
	const decompressed = ungzip(
		new Uint8Array([...decoded].map((c) => c.charCodeAt(0))),
		{ to: "string" }
	);

	// Parse the JSON string back to an object
	const tournamentData = JSON.parse(decompressed);

	// Update the store with the new tournament data
	store.tournament = tournamentData;

	console.log("Tournament data updated:", tournamentData);
}
</script>
<template>



	<div
		id="synchronize-games-container"
		class="flex flex-col items-center overflow-y-auto"
	>
		<h2 class="text-lg text-center lg:text-xl font-bold mx-4 mb-4">
			{{ $t("sync.offline") }}
		</h2>
		<div class="flex justify-center items-center w-full">
			<div
				class="flex flex-col items-center justify-center w-full max-w-50 aspect-square rounded-4xl bg-[var(--color-element)]"
			>
				<IconCamera v-if="!scannerActive" class="w-30 h-30"></IconCamera>
				<qrcode-stream v-else @detect="onDetect"></qrcode-stream>
			</div>
		</div>
		<div class="flex flex-col items-center justify-center gap-4 mt-4">
			<h2 class="font-medium">
				{{ $t("sync.code") }}
				<span class="text-[var(--color-accent)]">{{
					store.tournament.id
				}}</span>
			</h2>
			<qrcode-vue
				class=""
				:value="qrvalue"
				:size="qrSize"
				level="L"
				render-as="svg"
			/>
		</div>
	</div>
</template>
