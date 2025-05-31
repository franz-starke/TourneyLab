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

  <main class="landing">
    <div class="button-wrapper">
      <RouterLink class="highlight-button" to="/enter-tournament">
        <div class="flex items-center gap-2 flex-col">
          <IconEnter />
          <span>Turnier beitreten</span>
        </div>
      </RouterLink>

      <RouterLink class="default-button" to="/create-tournament">Neues Turnier</RouterLink>
      <RouterLink class="default-button" to="/old-tournament">Altes Turnier</RouterLink>
    </div>
  </main>
</template>




<style scoped>
.page-header {
  text-align: center;
  padding: 20px;
  background-color: #2c3e50;
  color: white;
}

.landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.landing h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.landing p {
  margin-bottom: 30px;
  color: #555;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 200px;
}

.highlight-button,
.default-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.highlight-button {
  background-color: #3498db;
  color: white;
}

.highlight-button:hover,
.highlight-button:active {
  background-color: #2980b9;
}

.default-button {
  background-color: #ecf0f1;
  color: #2c3e50;
}

.default-button:hover,
.default-button:active {
  background-color: #d0d7de;
}
</style>
