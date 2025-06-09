<script setup>
import LanguageSelectBtn from './utilcomponents/LanguageSelectBtn.vue';
import ThemeChangeBtn from './utilcomponents/ThemeChangeBtn.vue';
import IconEnter from '@/components/icons/IconEnter.vue';
</script>

<template>
	<div class="flex flex-col h-[100svh] overflow-hidden">
<!-- test git  -->
		<header class="flex items-center justify-between pt-4 px-4">
			<LanguageSelectBtn />
			<ThemeChangeBtn />
		</header>

		<main class="flex flex-col flex-1 justify-center items-center gap-8 px-8">
			<RouterLink to="/enter-tournament" class="enterButton group">
				<IconEnter class="w-50 h-50 text-white mb-2 group-hover:text-black duration-200 ease-in-out" />
				<span> Turnier Beitreten </span>
			</RouterLink>

			<RouterLink to="/create-tournament" class="landingButton group">
				<span> Neue Turniere Erstellen </span>
			</RouterLink>

			<RouterLink to="/old-tournament" class="landingButton group">
				<span> Alte Turniere Einsehen </span>
			</RouterLink>
		</main>
		
	</div>
</template>