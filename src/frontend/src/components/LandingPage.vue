<script setup>
import IconFlagGerman from '@/components/icons/IconFlagGerman.vue';
import IconFlagUSA from '@/components/icons/IconFlagUSA.vue';
import IconMoon from '@/components/icons/IconMoon.vue';
import IconEnter from '@/components/icons/IconEnter.vue';
</script>

<template>
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-4 ">
      <IconFlagGerman />
      <IconFlagUSA />
    </div>
    <div class="flex items-center  justify-end ">
      <IconMoon />
    </div>
  </header>

  <main class="flex flex-col items-stretch justify-center gap-8 ">
    <RouterLink class="flex flex-col items-center  highlighted-btn" to="/enter-tournament">
      <IconEnter />
      <span>Turnier beitreten</span>
    </RouterLink>

    <RouterLink class="default-btn" to="/create-tournament">
      <span>Neues Turnier</span>
    </RouterLink>

    <RouterLink class="default-btn" to="/old-tournament">
      <span>Alte Turniere</span>
    </RouterLink>
  </main>
</template>

<style scoped></style>
