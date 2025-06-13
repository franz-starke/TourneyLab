<script setup>
import { useRouter } from 'vue-router';
import { useThemeStore } from '@/stores/userTheme.js';

import LanguageSelectBtn from "../utilcomponents/LanguageSelectBtn.vue";
import IconMoon from "../icons/IconMoon.vue";
import IconSun from "../icons/IconSun.vue";
import IconLeave from "../icons/IconLeave.vue";

const router = useRouter();
const settings = useThemeStore();

function exitTournament() {
	router.push({ name: "landing" });
}
</script>

<template>
	<div class="flex flex-col w-full h-full justify-start items-center gap-4">
		<div class="settingsSection">
			<span>{{ $t('settings.lang') }}</span>
			<LanguageSelectBtn />
		</div>

		<div class="settingsSection">
			<span>{{ $t('settings.appe') }}</span>
			<div class="flex flex-row gap-4">
				<div class="settingsTheme text-[var(--color-text)] bg-[var(--color-element)]" :class="{ '!bg-[var(--color-accent)] !text-[var(--color-text-alt)]' : settings.appTheme == 'light'}" @click="settings.setAppTheme('light')">
					<IconSun />
				</div>
				<div class="settingsTheme text-[var(--color-text)] bg-[var(--color-element)]" :class="{ '!bg-[var(--color-accent)]' : settings.appTheme == 'dark'}" @click="settings.setAppTheme('dark')">
					<IconMoon />
				</div>
			</div>
		</div>

		<div class="settingsSection">
			<span>{{ $t('settings.accent') }}</span>
			<div class="flex flex-row gap-4">
				<div class="settingsAccentColor bg-[var(--color-green)]"
					:class="{ 'ring-4 ring-[var(--color-text)]': settings.accentColor === 'green' }"
					@click="settings.setAccentColor('green')"></div>
				<div class="settingsAccentColor bg-[var(--color-blue)]"
					:class="{ 'ring-4 ring-[var(--color-text)]': settings.accentColor === 'blue' }"
					@click="settings.setAccentColor('blue')"></div>
				<div class="settingsAccentColor bg-[var(--color-red)]"
					:class="{ 'ring-4 ring-[var(--color-text)]': settings.accentColor === 'red' }"
					@click="settings.setAccentColor('red')"></div>
				<div class="settingsAccentColor bg-[var(--color-purple)]"
					:class="{ 'ring-4 ring-[var(--color-text)]': settings.accentColor === 'purple' }"
					@click="settings.setAccentColor('purple')"></div>
			</div>
		</div>

		<div class="settingsSection w-full">
			<div class="flex w-full h-18 justify-evenly items-center text-2xl font-bold bg-red-500 text-white rounded-4xl mt-8"
				@click="exitTournament">
				<span class="mb-0!">{{ $t('settings.leave') }}</span>
				<IconLeave />
			</div>
		</div>
	</div>
</template>
