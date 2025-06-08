<script setup>
import LanguageSelectBtn from './utilcomponents/LanguageSelectBtn.vue';
import ThemeChangeBtn from './utilcomponents/ThemeChangeBtn.vue';
import IconEnter from '@/components/icons/IconEnter.vue';
</script>

<template>
	<div class="flex flex-col min-h-[100svh] overflow-hidden touch-none overscroll-none">
		<header class="flex items-center justify-between p-4">
			<LanguageSelectBtn />
			<ThemeChangeBtn />
		</header>

		<main class="flex flex-col flex-1 justify-center items-center gap-8 px-8">
			<RouterLink to="/enter-tournament" class="enterButton group">
				<IconEnter class="w-50 h-50 text-white mb-2 group-hover:text-black duration-200 ease-in-out" />
				<span class="text-xl font-bold text-white group-hover:text-black duration-200 ease-in-out">
					Turnier beitreten
				</span>
			</RouterLink>

			<RouterLink to="/create-tournament" class="landingButton group">
				<span class="text-xl font-bold z-10 transition-colors duration-300 group-hover:text-white">
					Neue Turniere Erstellen
				</span>
			</RouterLink>

			<RouterLink to="/old-tournament" class="landingButton group">
				<span class="text-xl font-bold z-10 transition-colors duration-300 group-hover:text-white">
					Alte Turniere Einsehen
				</span>
			</RouterLink>
		</main>
	</div>
</template>