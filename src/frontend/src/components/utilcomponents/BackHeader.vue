<script setup>
import { useRouter } from "vue-router";
import ThemeChangeBtn from "./ThemeChangeBtn.vue";

const router = useRouter();
</script>

<template>
	<header class="flex items-center justify-between p-4">
		<div class="flex items-center justify-center">
			<div class="bg-white rounded-full hover:bg-gray-300 duration-200">
				<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
					class="bi bi-arrow-left-short" viewBox="0 0 16 16">
					<path fill-rule="evenodd"
						d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
				</svg>
			</div>
		</div>
		<ThemeChangeBtn />
	</header>
</template>