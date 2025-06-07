<script setup>
const props = defineProps({
	width: {
		type: String,
		default: "2em" // or something like "55.2px"
	},
	height: {
		type: String,
		default: "2em"
	}
});
</script>

<template>
	<div :width="width" :height="height" className="flex items-center justify-between mb-8 pt-4">
		<div className="w-10 h-7 rounded-md overflow-hidden ">
			<div className="h-1/3 bg-black"></div>
			<div className="h-1/3 bg-red-600"></div>
			<div className="h-1/3 bg-yellow-400"></div>
		</div>
	</div>
</template>


<style scoped>
* {
	margin: 0;
	padding: 0;
}
</style>
