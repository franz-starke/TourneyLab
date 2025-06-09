<script setup>
import { useRouter } from "vue-router";
import LanguageSelectBtn from "../utilcomponents/LanguageSelectBtn.vue";
import IconMoon from "../icons/IconMoon.vue";
import IconSun from "../icons/IconSun.vue";
import IconLeave from "../icons/IconLeave.vue";

const router = useRouter();

function exitTournament() {
	// Logic to exit the tournament can be added here if needed
	router.push({ name: "landing" });
}
</script>

<template>
	<div class="flex flex-col w-full h-full justify-start items-center gap-4">
		<div class="settingsSection">
			<span>App Sprache:</span>
			<LanguageSelectBtn />
		</div>

		<div class="settingsSection">
			<span>App Aussehen:</span>
			<div class="flex flex-row gap-4">
				<div class="settingsTheme text-white bg-[var(--color-accent)]">
					<IconSun />
				</div>
				<div class="settingsTheme text-black bg-white">
					<IconMoon />
				</div>
			</div>
		</div>

		<div class="settingsSection">
			<span>Akzent Farbe:</span>
			<div class="flex flex-row gap-4">
				<div class="settingsAccentColor bg-[var(--color-green)] border-3"></div>
				<div class="settingsAccentColor bg-[var(--color-blue)]"></div>
				<div class="settingsAccentColor bg-[var(--color-red)]"></div>
				<div class="settingsAccentColor bg-[var(--color-purple)]"></div>
			</div>
		</div>

		<div class="settingsSection w-full">
			<span class="font-bold text-xl mb-2">Turnier Verlassen:</span>
			<div class="flex w-full h-18 justify-evenly items-center text-2xl font-bold bg-red-500 text-white rounded-3xl" @click="exitTournament">
				<span class="mb-0!">Turnier Verlassen</span>
				<IconLeave />
			</div>
		</div>
	</div>
</template>
