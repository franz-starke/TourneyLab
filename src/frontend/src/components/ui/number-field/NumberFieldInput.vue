<script setup>
import { NumberFieldInput } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps({
	class: { type: null, required: false },
});
</script>

<template>
	<NumberFieldInput
		data-slot="input"
		:class="cn('flex h-9 w-full rounded-md bg-transparent py-1 text-xl text-center',
		props.class,)"
	/>
</template>