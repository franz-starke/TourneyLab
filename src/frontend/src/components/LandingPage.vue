<script setup>
import IconFlagGerman from '@/components/icons/IconFlagGerman.vue';
import IconFlagUSA from '@/components/icons/IconFlagUSA.vue';
import IconMoon from '@/components/icons/IconMoon.vue';
import IconEnter from '@/components/icons/IconEnter.vue';
</script>

<template>
	<div class="flex flex-col min-h-[100svh] overflow-hidden touch-none overscroll-none">
		<header class="flex items-center justify-between p-4">
			<div class="flex items-center gap-4">
				<IconFlagGerman />
				<IconFlagUSA />
			</div>
			<div class="flex items-center justify-end">
				<IconMoon />
			</div>
		</header>

		<main class="flex flex-col flex-1 justify-center items-center gap-8 px-8">
			<RouterLink to="/enter-tournament"
				class="flex flex-col items-center justify-center w-full aspect-square rounded-4xl bg-gradient-to-br from-[#5aa49c] to-[#5aa49c] group">
				<IconEnter class="w-50 h-50 text-white mb-2 group-hover:text-black duration-200 ease-in-out" />
				<span class="text-xl font-bold text-white group-hover:text-black duration-200 ease-in-out">Turnier
					beitreten</span>
			</RouterLink>

			<RouterLink to="/create-tournament"
				class="relative overflow-hidden group flex items-center justify-center w-full h-20 rounded-4xl bg-white transition-colors duration-300">
				<span class="text-xl font-bold z-10 transition-colors duration-300 group-hover:text-white">
					Neue Turniere Erstellen
				</span>
				<div
					class="absolute inset-0 bg-gradient-to-br from-[#5aa49c] to-[#5aa49c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-4xl">
				</div>
			</RouterLink>

			<RouterLink to="/old-tournament"
				class="relative overflow-hidden group flex items-center justify-center w-full h-20 rounded-4xl bg-white transition-colors duration-300">
				<span class="text-xl font-bold z-10 transition-colors duration-300 group-hover:text-white">
					Alte Turniere Einsehen
				</span>
				<div
					class="absolute inset-0 bg-gradient-to-br from-[#5aa49c] to-[#5aa49c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-4xl">
				</div>
			</RouterLink>
		</main>
	</div>
</template>