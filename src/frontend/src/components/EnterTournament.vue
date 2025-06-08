<script setup>
// TODO: add a QR-Code scanner to enter a tournament via Tournament Code

import { createTournamentAlgo } from "@/util/tournamentalgo.js";
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import { ref, computed } from "vue";
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
	<div class="flex flex-col min-h-[100svh] overflow-hidden touch-none">
		<BackHeader />
		<main class="flex flex-col flex-1 justify-evenly items-center px-8">
			<h1 class="text-2xl font-bold text-center">Turnier Beitreten</h1>

			<div class="flex flex-col w-full">
				<p class="text-gray-800 text-base font-bold text-center mb-1">QR-Code Scannen</p>
				<div
					class="flex flex-col items-center justify-center w-full aspect-square rounded-4xl bg-white duration-200">
					<IconCamera class="w-30 h-30">
						<qrcode-stream @detect="onDetect"></qrcode-stream>
					</IconCamera>
				</div>
			</div>

			<div class="flex flex-col w-full">
				<p for="enter-code" class="text-gray-600 text-base font-bold text-center mb-2">Oder Manuell Eingeben</p>

				<div v-if="isOnline" class="flex flex-col justify-center w-full gap-4">
					<input id="enter-code" class="flex bg-white p-4 rounded-full font-bold text-center text-gray-500 text-xl"
						name="enter-code" type="text" placeholder="Turnier-Code Eingeben..." v-model="tournamentId" />

					<div class="colorButton" @click="enterTournament">
						<span>Beitreten</span>
					</div>
				</div>
			</div>
		</main>
	</div>

</template>
