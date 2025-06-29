<!-- src/components/LandingPage.vue -->

<script setup>
/**
 * @file LandingPage.vue
 * @description The main landing page component for the application. Provides navigation to enter, create, or view old tournaments, and includes controls for language and theme selection.
 *
 * @component
 * @name LandingPage
 *
 * @example
 * <LandingPage />
 *
 * @imports
 * - LanguageSelectBtn: Button for selecting application language.
 * - ThemeChangeBtn: Button for toggling application theme.
 * - IconEnter: Icon used for the "Enter Tournament" button.
 *
 * @dependencies
 * - Vue Router's RouterLink for navigation.
 * - i18n for translations via $t.
 *
 * @features
 * - Responsive layout with Tailwind CSS utility classes.
 * - Navigation to enter, create, or view old tournaments.
 * - Language and theme selection controls in the header.
 */

import LanguageSelectBtn from './utilcomponents/LanguageSelectBtn.vue';
import ThemeChangeBtn from './utilcomponents/ThemeChangeBtn.vue';
import IconEnter from '@/components/icons/IconEnter.vue';
</script>

<template>
	<div class="flex flex-col 	h-[100svh]  overflow-hidden w-full lg:items-center">
		<header class="flex w-full items-center justify-between pt-4 px-4 m-4">
			<LanguageSelectBtn />
			<ThemeChangeBtn />
		</header>

		<main class="flex flex-col flex-1 w-full justify-center items-center gap-8 px-8">

			<span class="hidden font-bold text-7xl mb-8 lg:flex">TourneyLab</span>

			<RouterLink to="/enter-tournament" class="enterButton group">
				<IconEnter class="w-40 h-40 mb-2 ease-in-out" />
				<span>{{ $t('landing.enter') }}</span>
			</RouterLink>

			<div class="flex flex-col w-full gap-8 lg:max-w-300 lg:flex-row lg:mt-8 lg:gap-16">
				<RouterLink to="/create-tournament" class="landingButton group">
					<span>{{ $t('landing.create') }}</span>
				</RouterLink>

				<RouterLink to="/old-tournament" class="landingButton group">
					<span>{{ $t('landing.old') }}</span>
				</RouterLink>
			</div>
		</main>
	</div>
</template>
