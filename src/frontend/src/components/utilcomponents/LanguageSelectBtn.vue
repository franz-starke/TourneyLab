<script setup>
import IconFlagGerman from '@/components/icons/IconFlagGerman.vue';
import IconFlagUSA from '@/components/icons/IconFlagUSA.vue';
</script>

<template>
    <div class="flex items-center gap-4">
        <IconFlagGerman class="duration-200" :class="{ 'ring-4 rounded-lg ring-[var(--color-text)]': settings.language === 'de' }" @click="settings.setLanguage('de')"/>
        <IconFlagUSA class="duration-200" :class="{ 'ring-4 rounded-lg ring-[var(--color-text)]': settings.language === 'en' }" @click="settings.setLanguage('en')"/>
    </div>
</template>
