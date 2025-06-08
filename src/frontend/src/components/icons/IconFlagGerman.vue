<script setup>
const props = defineProps({
	width: {
		type: String,
		default: "40px"
	},
	height: {
		type: String,
		default: "40px"
	}
});
</script>

<template>
	<div :width="width" :height="height" class="flex items-center justify-between">
		<div class="rounded-md overflow-hidden" :style="{ width: props.width, height: props.height }">
			<div class="h-1/3 bg-black"></div>
			<div class="h-1/3 bg-red-600"></div>
			<div class="h-1/3 bg-yellow-400"></div>
		</div>
	</div>
</template>