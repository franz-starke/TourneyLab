<script>
    export default {
    data() {
        return { imprint: ""};
    },
    mounted() {
        fetch("/imprint.txt")
            .then(response => response.text())
            .then(text => {
                this.imprint = text;
            });
        }
    };
</script>

<template>
    <div class="flex flex-1 overflow-y-auto p-4 whitespace-pre-wrap scrollbar-hidden text-[var(--color-text)]" v-if="imprint">{{ imprint }}</div>
</template>