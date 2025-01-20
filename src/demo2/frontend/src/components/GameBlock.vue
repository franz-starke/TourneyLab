<script setup>
    import Game from './Game.vue';

    const props = defineProps({
    time: {
        type: String,
        required: true
    },
    games: {
        type: Array,
        required: true
    }
    });
</script>

<template>
    {{ time }}
    <Game v-for="game in games"/>
</template>

<style scoped>

</style>