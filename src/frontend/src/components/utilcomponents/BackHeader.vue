<script setup>
import { useRouter } from "vue-router";
import ThemeChangeBtn from "./ThemeChangeBtn.vue";

const router = useRouter();
</script>

<template>
  <div id="wrapper">
    <button id="back" @click="router.back()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
        />
      </svg>
    </button>
    <ThemeChangeBtn />
  </div>
</template>

<style scoped>
#wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#back {
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.2em;
}
</style>
