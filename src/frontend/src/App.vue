<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue';

import { useThemeStore } from '@/stores/userTheme.js';

const settings = useThemeStore();

onMounted(() => {
	settings.applyAccentColor();
	settings.applyAppTheme();
	settings.applyLanguage(settings.language);
});

</script>

<template>
	<RouterView />
</template>