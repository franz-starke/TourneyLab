<!-- TODO:
	+ make possible to change points of a game here as well

 	+
	+ or function to extract from one group
-->

<script setup>
import { useTournamentStore } from "@/stores/tournamentStore";
import IconEnter from "../icons/IconEnter.vue";
import { ref, onBeforeMount, computed } from "vue";

const store = useTournamentStore();

const activeGroup = ref(1);

function setActiveGroup(groupIndex) {
	activeGroup.value = groupIndex;
}


let teams = computed(() => store.teams);
onBeforeMount(() => {
    store.buildTeams();
});
</script>

<template>
	<!-- Show Teams per Group when no Team has been selected -->
	<!-- the group Id-conditionals are hardcoded with numbers here, because it doesn't have to be scalable yet -->
	<div class="flex flex-col h-[100svh] overflow-hidden">
		<div class="sticky top-0 bg-[var(--color-background)] py-2 z-10">
			<div
				class="flex flex-wrap w-full justify-center items-center gap-2"
			>
				<div
					class="flex cursor-pointer px-4 py-2 rounded-full text-base font-bold"
					:class="
						activeGroup === 1
							? 'bg-[var(--color-accent)] text-[var(--color-text-alt)]'
							: 'bg-[var(--color-element)] text-[var(--color-text)]'
					"
					@click="setActiveGroup(1)"
				>
					<span class="whitespace-nowrap">Fun</span>
				</div>
				<div
					v-if="Object.keys(store.tournament.groups).length == 2"
					class="flex cursor-pointer px-4 py-2 rounded-full text-base font-bold"
					:class="
						activeGroup === 2
							? 'bg-[var(--color-accent)] text-[var(--color-text-alt)]'
							: 'bg-[var(--color-element)] text-[var(--color-text)]'
					"
					@click="setActiveGroup(2)"
				>
					<span class="whitespace-nowrap">{{ $t("teams.pro") }}</span>
				</div>
			</div>
		</div>

		<div
			class="flex-1 overflow-y-auto scrollbar-hidden flex flex-col gap-2 px-4 pb-[calc(env(safe-area-inset-bottom)+2rem)]"
		>
			<div
				v-for="(teamsOfGroup, team_Id) in teams[activeGroup]"
				:key="team_Id"
			>
				<RouterLink
					class="flex flex-row h-18 font-bold text-lg bg-[var(--color-element)] rounded-3xl py-2 px-4 cursor-pointer"
					:to="{
						name: 'team',
						params: { teamId: team_Id, groupId: activeGroup },
					}"
				>
					<div
						class="flex flex-row w-full items-center justify-between"
					>
						<span
							>{{ activeGroup === 1 ? "Fun" : $t("teams.pro") }}
							{{ team_Id }}</span
						>
					</div>
					<IconEnter />
				</RouterLink>
			</div>
		</div>
	</div>
</template>
