<script setup>
const props = defineProps({
	width: {
		type: String,
		default: "45px"
	},
	height: {
		type: String,
		default: "45px"
	}
});

function starPoints(cx, cy, r) {
	const points = []
	const angle = Math.PI / 5
	for (let i = 0; i < 10; i++) {
		const radius = i % 2 === 0 ? r : r * 0.5
		const x = cx + radius * Math.sin(i * angle)
		const y = cy - radius * Math.cos(i * angle)
		points.push(`${x},${y}`)
	}
	return points.join(" ")
}
</script>

<template>
	<svg :width="width" :height="width" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"
		style="border-radius: calc(0.625rem /* 0.25rem = 4px */ - 2px)">
		<rect width="40" height="40" fill="#B22234" />

		<g fill="#FFFFFF">
			<rect y="5.71" width="40" height="5.71" />
			<rect y="17.14" width="40" height="5.71" />
			<rect y="28.57" width="40" height="5.71" />
		</g>

		<rect x="0" y="0" width="22" height="20" fill="#3C3B6E" rx="2" ry="2" />

		<g fill="#FFFFFF">
			<template v-for="(rowY, rowIndex) in [3.5, 7.5, 11.5, 15.5]" :key="'row-' + rowIndex">
				<template v-for="(colX, colIndex) in [2.5, 6.5, 10.5, 14.5, 18.5]" :key="'star-' + colIndex">
					<polygon :points="starPoints(colX, rowY, 1.1)" />
				</template>
			</template>
		</g>
	</svg>
</template>
