<script setup></script>

<template>
  <!-- German flag -->
  <header>
    <div className="flex items-center justify-between mb-8 pt-4">
        <div className="w-10 h-7 rounded-md overflow-hidden shadow-sm">
          <div className="h-1/3 bg-black"></div>
          <div className="h-1/3 bg-red-600"></div>
          <div className="h-1/3 bg-yellow-400"></div>
        </div>
    </div>
  </header>

  <main class="landing">
    <div class="button-wrapper">
      <RouterLink class="highlight-button" to="/enter-tournament">
        <svg
          class="enter-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 ..." />
          <path fill-rule="evenodd" d="M11.854 8.354a.5.5 ..." />
        </svg>
        <span>Turnier beitreten</span>
      </RouterLink>

      <RouterLink class="default-button" to="/create-tournament"
        >Neues Turnier</RouterLink
      >
      <RouterLink class="default-button" to="/old-tournament"
        >Altes Turnier</RouterLink
      >
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
