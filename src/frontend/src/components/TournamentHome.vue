<script setup>
import { useTournamentStore } from "@/stores/tournamentStore";
import IconHome from "@/components/icons/IconHome.vue";
import IconTournTree from "@/components/icons/IconTournTree.vue";
import IconSettings from "./icons/IconSettings.vue";
import IconTeam from "./icons/IconTeam.vue";
import { ref, onMounted } from "vue";

// TODO: first fetch from api for newest tournamentData and write it into the store
// if offline just use store

const store = useTournamentStore();

</script>

<template>
	<div class="flex flex-col h-[100svh] overflow-hidden">

		<header class="sticky top-0 pt-[env(safe-area-inset-top)] px-4 pb-2 mt-4 mb-2">
			<h1 class="flex w-full h-12 justify-center items-center rounded-full text-2xl font-bold bg-[var(--color-element)]"
				ref="tournamentName">
				{{ store.tournament.name }}
			</h1>
		</header>

		<div class="flex flex-1 flex-col overflow-hidden px-4">
			<RouterView />
		</div>

		<nav
			class="sticky bottom-0 px-4 pt-2 pb-[calc(env(safe-area-inset-bottom)+1rem)] mt-2">
			<div class="flex w-full h-18 justify-between items-center rounded-3xl bg-[var(--color-element)]">
				<RouterLink class="navbarItem" to="/tournament-home/dashboard">
					<IconHome />
				</RouterLink>
				<RouterLink class="navbarItem" to="/tournament-home/games">
					<IconTournTree />
				</RouterLink>
				<RouterLink class="navbarItem" to="/tournament-home/teams">
					<IconTeam />
				</RouterLink>
				<RouterLink class="navbarItem" to="/tournament-home/settings">
					<IconSettings />
				</RouterLink>
			</div>
		</nav>

	</div>
</template>
