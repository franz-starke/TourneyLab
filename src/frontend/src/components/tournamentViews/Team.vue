<script setup>
import { useTournamentStore } from "@/stores/tournamentStore";
import { defineProps } from "vue";
import Game from "../utilcomponents/Game.vue";

const store = useTournamentStore();

const props = defineProps({
	groupId: {
		type: [Number, String],
		required: true,
	},
	teamId: {
		type: [Number, String],
		required: true,
	},
});

let teams = store.teams;
</script>

<template>
	<div class="flex flex-col h-[100svh] overflow-hidden">
		<div
			class="flex-1 overflow-y-auto scrollbar-hidden flex flex-col gap-2 px-4 pb-[calc(env(safe-area-inset-bottom)+2rem)]"
		>
			<h1 class="text-center font-bold text-4xl pt-4">
				{{ props.groupId === 1 ? "Fun" : $t("teams.pro") }}
				{{ props.teamId }}
			</h1>
			<div
				class="flex w-full"
				v-for="(game, gameId) in teams[props.groupId][props.teamId]"
				:key="gameId"
			>
				<Game :gameId="gameId" class="flex w-full" />
			</div>
		</div>
	</div>
</template>
