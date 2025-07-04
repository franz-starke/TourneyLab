<script setup>
// TODO: add a QR-Code scanner to enter a tournament via Tournament Code

import { createTournamentAlgo } from "@/util/tournamentalgo.js";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import { ref, computed, onMounted } from "vue";
import { useTournamentStore } from "@/stores/tournamentStore";
import BackHeader from "./utilcomponents/BackHeader.vue";
import IconCamera from "./icons/IconCamera.vue";
import api from "@/api/api.js";
import { useRouter } from "vue-router";
import { gzip, ungzip } from "pako";

const debugInfo = ref("degubingfo: pls scan a qr-code");
const tournamentId = ref("");

const store = useTournamentStore();
const router = useRouter();
const scannerActive = ref(false);

const isOnline = computed(() => {
	return navigator.onLine;
});

onMounted(() => {
	// Start scanner after 2 seconds (adjust as needed)
	setTimeout(() => {
		scannerActive.value = true;
	}, 2000);
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
		store.tournament.id = tournamentId.value;
		store.tournament.name = response.name;
		store.tournament.groups = response.teams;
		store.tournament.games = response.games;
		store.tournament.matchpoint = response.matchpoint;

		// Navigate to the tournament home page
		router.push("/tournament-home/dashboard");
	} catch (error) {
		console.error("Error fetching tournament data:", error);
		alert(
			"Fehler beim Abrufen des Turniers. Bitte überprüfen Sie den Code."
		);
	}
}

function onDetect(detectedCodes) {
	let rawValue = detectedCodes[0].rawValue;
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
	tournamentId.value = tournamentData.id;

	if (navigator.onLine) {
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
	<div class="flex flex-col h-[100svh] overflow-hidden">
		<BackHeader />

		<main class="flex flex-col flex-1 justify-evenly items-center px-8">
			<h1 class="text-2xl font-bold text-center">
				{{ $t("enter.joinT") }}
			</h1>

			<div class="flex flex-col w-full">
				<p class="text-gray-500 text-base font-bold text-center mb-1">
					{{ $t("enter.scan") }}
				</p>

				<div class="flex justify-center items-center w-full">
					<div
						class="flex flex-col items-center justify-center w-full max-w-[500px] aspect-square rounded-4xl bg-[var(--color-element)]">

						<IconCamera v-if="!scannerActive" class="w-30 h-30"></IconCamera>
						<qrcode-stream v-else @detect="onDetect"></qrcode-stream>
					</div>
				</div>
			</div>

			<div class="flex flex-col w-full lg:max-w-150">
				<p for="enter-code" class="text-gray-500 text-base font-bold text-center mb-2">
					{{ $t("enter.manual") }}
				</p>

				<div v-if="isOnline" class="flex flex-col justify-center w-full gap-4">
					<input id="enter-code"
						class="flex bg-[var(--color-element)] p-4 rounded-full font-bold text-center text-gray-500 text-xl"
						name="enter-code" type="text" :placeholder="$t('enter.code')" v-model="tournamentId" />

					<div class="colorButton" @click="enterTournament">
						<span>{{ $t("enter.join") }}</span>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>
