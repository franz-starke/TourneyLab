<!-- TODO:
	+ make possible to change points of a game here as well

 	+
	+ or function to extract from one group
-->

<script setup>
import Game from "../utilcomponents/Game.vue";

import { useTournamentStore } from "@/stores/tournamentStore";
import IconEnter from "../icons/IconEnter.vue";
import { ref, onMounted, onBeforeMount } from "vue";

const store = useTournamentStore();

const activeGroup = ref(1);
const teamSelected = ref(false);

function setActiveGroup(groupIndex) {
	activeGroup.value = groupIndex;
}


/**
 * An object to store information about teams participating in the tournament.
 * The structure is intended to represent groups, teams per group, and games per team.
 * Each entry may include details such as Team1, Team2, RefTeam, start-time, Points, and field.
 *
 * Groups.TeamsPerGroup.GamesPerTeam = [Team1, Team2, RefTeam, start-time, Points, field]
 *
 * @type {Object}
 */
let teams = {};

// build up current Infos on Teams
let firstTeamIdOfGroup = 1;
onBeforeMount(function () {
	Object.entries(store.tournament.groups).forEach(function ([
		groupId,
		teamAmount,
	]) {
		teams[groupId] = {};
		for (
			let teamId = firstTeamIdOfGroup;
			teamId < teamAmount + firstTeamIdOfGroup;
			teamId++
		) {
			teams[groupId][teamId] = {};
			// now search all games, where teamId is a part of
			Object.values(store.tournament.games).forEach(function (
				gamesOnField
			) {
				Object.entries(gamesOnField).forEach(function ([
					gameId,
					gameArray,
				]) {
					let playingTeams = gameArray.slice(0, 2);
					let refTeam = gameArray[2];


					if (
						playingTeams.includes(teamId) ||
						refTeam === teamId
					) {

						teams[groupId][teamId][gameId] = gameArray;
					}
				});
			});
		}
		firstTeamIdOfGroup += teamAmount;
	});
	console.log("teams: ", teams);
});

const selectedTeamId = ref(1);
function selectTeam(teamId) {
	selectedTeamId.value = teamId;
	teamSelected.value = true;
}
</script>

<template>
	<!-- Show Teams per Group when no Team has been selected -->
	 <!-- the group Id-conditionals are hardcoded with numbers here, because it doesn't have to be scalable yet -->
	<div v-if="!teamSelected" class="flex flex-col h-[100svh] overflow-hidden">

		<div class="sticky top-0 bg-[var(--color-background)] py-2 z-10">
			<div class="flex flex-wrap w-full justify-center items-center gap-2">
				<div class="flex cursor-pointer px-4 py-2 rounded-full text-base font-bold" :class="activeGroup === 1
					? 'bg-[var(--color-accent)] text-[var(--color-text-alt)]'
					: 'bg-[var(--color-element)] text-[var(--color-text)]'" @click="setActiveGroup(1)">
					<span class="whitespace-nowrap">Fun</span>
				</div>
				<div v-if="Object.keys(store.tournament.groups).length == 2"
					class="flex cursor-pointer px-4 py-2 rounded-full text-base font-bold" :class="activeGroup === 2
						? 'bg-[var(--color-accent)] text-[var(--color-text-alt)]'
						: 'bg-[var(--color-element)] text-[var(--color-text)]'" @click="setActiveGroup(2)">
					<span class="whitespace-nowrap">{{ $t("teams.pro") }}</span>
				</div>
			</div>
		</div>

		<div
			class="flex-1 overflow-y-auto scrollbar-hidden flex flex-col gap-2 px-4 pb-[calc(env(safe-area-inset-bottom)+2rem)]">
			<div class="flex flex-row h-18 font-bold text-lg bg-[var(--color-element)] rounded-3xl py-2 px-4 cursor-pointer"
				v-for="(teamsOfGroup, teamId) in teams[activeGroup]" :key="teamId" @click="selectTeam(teamId)">
				<div class="flex flex-row w-full items-center justify-between">
					<span>{{ activeGroup === 1 ? "Fun" : $t("teams.pro") }} {{ teamId }}</span>
					<IconEnter />
				</div>
			</div>
		</div>
	</div>


	<div v-else class="flex flex-col h-[100svh] overflow-hidden">
		<div
			class="flex-1 overflow-y-auto scrollbar-hidden flex flex-col gap-2 px-4 pb-[calc(env(safe-area-inset-bottom)+2rem)]">
			<h1 class="text-center font-bold text-4xl pt-4">
				{{ activeGroup === 1 ? "Fun" : $t("teams.pro") }} {{ selectedTeamId }}
			</h1>
			<div class="flex w-full" v-for="(game, gameId) in teams[activeGroup][selectedTeamId]" :key="gameId">
				<Game :gameId="gameId" class="flex w-full" />
			</div>
		</div>
	</div>
</template>
