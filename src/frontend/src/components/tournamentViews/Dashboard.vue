<script setup>
import QrcodeVue, { QrcodeCanvas, QrcodeSvg } from "qrcode.vue";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import { ref, onMounted, watch } from "vue";
import { useTournamentStore } from "@/stores/tournamentStore";
import IconQrCode from "../icons/IconQrCode.vue";
import IconTrophy from "../icons/IconTrophy.vue";
import { gzip, ungzip } from "pako";
import { evaluateTournamentData } from "@/util/tournamentEvaluation.js";

const store = useTournamentStore();

const syncGames = ref(false);
const evalShow = ref(false);
const qrSize = ref(0);
onMounted(() => {
	const minSize = Math.min(window.innerWidth, window.innerHeight);
	qrSize.value = minSize * 0.7;
});

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

function toggleSyncGames() {
	syncGames.value = !syncGames.value;
}

const leaderboard = ref({});
function evalTournament() {
	console.log("Evaluating Tournament...");
	leaderboard.value = evaluateTournamentData(store.tournament);
	console.log("Leaderboard: ", leaderboard);
	evalShow.value = true;
}

const activeGroup = ref(0);
function setActiveGroup(groupIndex) {
	activeGroup.value = groupIndex;
}
</script>

<template>
	<!-- Tournament Dashboard -->
	<div v-if="evalShow" id="eval-dialog" class="p-2">
		<div class="flex items-center justify-evenly">
			<button class="default-btn" @click="setActiveGroup(0)">Fun</button>
			<button
				v-if="leaderboard.groups.length == 2"
				class="default-btn"
				@click="setActiveGroup(1)"
			>
				Schwitzer
			</button>
		</div>

		<div class="grid grid-cols-4 justify-center text-center mt-4 gap-4">
			<div id="leaderboard-header" class="contents">
				<h3 class="font-bold">{{ $t("result.placement") }}</h3>
				<h3 class="font-bold">{{ $t("result.team") }}</h3>
				<h3 class="font-bold">{{ $t("result.win") }}</h3>
				<h3 class="font-bold">{{ $t("result.points") }}</h3>
			</div>

			<div
				class="contents"
				v-for="team in leaderboard.groups[activeGroup].teams"
			>
				<h3 class="font-bold">{{ team.rank }}</h3>
				<h3 class="font-bold">{{ team.id }}</h3>
				<h3 class="font-bold">{{ team.wins }}</h3>
				<h3 class="font-bold">{{ team.points }}</h3>
			</div>
		</div>
	</div>

	<div
		v-else-if="!syncGames"
		id="dashboard-container"
		class="flex flex-col w-full align-center justify-between h-full "
	>
		<button class="colorButton" @click="toggleSyncGames">
			<span>{{ $t("home.sync") }}</span>
			<IconQrCode />
		</button>

		<button class="colorButton" @click="evalTournament">
			<span>{{ $t("home.results") }}</span>
			<IconTrophy />
		</button>
	</div>

	<!-- Tournament Dashboard -->
	<div v-else-if="evalShow" id="eval-dialog">
		<h2>Turnier Auswertung kommt noch</h2>
	</div>

	<!-- Dialog for syncing Games  -->
	<div v-else id="synchronize-games-container" class="flex-container overflow-y-auto">
		<h2>{{ $t("sync.offline") }}</h2>
		<div id="qr-code-wrapper">
			<qrcode-stream @detect="onDetect"></qrcode-stream>
		</div>

		<!-- TODO: if online, we can use smaller Qrcodes -->
		<div class="flex flex-col items-center justify-center gap-4">
			<h2 class="font-medium">
				{{ $t("sync.code") }}
				<span class="text-blue-500">{{ store.tournament.id }}</span>
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
