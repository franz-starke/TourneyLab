<script setup>
import { useThemeStore } from '@/stores/userTheme.js';

import IconMoon from "@/components/icons/IconMoon.vue";
import IconSun from "../icons/IconSun.vue";

const settings = useThemeStore();
</script>

<template>
	<div class="flex items-center justify-end">
		<div id="themeIcon" @click="settings.toggleAppTheme()">
			<IconMoon :class="{'hidden':settings.appTheme == 'dark'}" />
			<IconSun :class="{'hidden':settings.appTheme == 'light'}" />
		</div>
	</div>
</template>
