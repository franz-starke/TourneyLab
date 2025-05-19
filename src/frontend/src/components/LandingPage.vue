<script setup>
</script>

<template>
  <header>
    <div id="lang-chooser">

    </div>
    <div id="dark-light-mode">

    </div>
  </header>

  <main class="landing">
    <div class="button-wrapper">
      <RouterLink class="highlight-button" to="/enter-tournament">
        <svg class="enter-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 ..." />
          <path fill-rule="evenodd" d="M11.854 8.354a.5.5 ..." />
        </svg>
        Turnier beitreten
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

.highlight-button:hover {
  background-color: #2980b9;
}

.default-button {
  background-color: #ecf0f1;
  color: #2c3e50;
}

.default-button:hover {
  background-color: #d0d7de;
}

.enter-icon {
  width: 24px;
  height: 24px;
}
</style>
