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

    <div class="secondary-buttons">
      <RouterLink class="default-button" to="/create-tournament">New Tournament</RouterLink>
      <RouterLink class="default-button" to="/old-tournament">Old Tournament</RouterLink>
    </div>
  </div>
</main>

</template>




<style scoped>
.page-header {
  
  text-align: center;
 
 

}
.buttonwrapper {
position: relative;
}

.secondary-buttons{
  display:flex;
  gap:2rem;                    /* space between the two small buttons */
  justify-content:center;      /* keep them centered */
  margin-top:40rem;            /* pushes them below the 320 px circle */
 justify-content: center;
 align-items: center;
}

.highlight-button {
  
  border-radius: 50px;
  padding: 75px;
  flex-direction: column;
  font-family:Arial, Helvetica ;
  text-decoration: none;
  font-style: extra-bold;
  font-size: 25px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top:  50%;
  width: 320px;
  height: 320px;
  transform: translate(-50%, -50%);
}
.default-button {
  background: #ffffff;
  border: 2px solid #509F96;
  display: inline-flex;
  margin-right: 50px;
  border-radius: 30px;
  padding-right: 100px;
  
  padding-left: 100px;
  font-family:Arial, Helvetica;
  text-decoration: none;
 
  font-size: 25px;
  color: #000000;

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
    background-color:#509F96;
    color: #ffffff;
    border: 2px solid #509F96;
  }


@media (min-width: 1000px) {
  * {
    background-color: blue;
  }
}
</style>
<!-- linear-gradient(to right, #0DEEB9, #24EC3C) -->