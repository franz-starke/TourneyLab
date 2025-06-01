<script setup>
</script>

<template>
  <header class="page-header">
    <h1>HTW Turnier App</h1>
  </header>

  <main class="landing">
  <div class="button-wrapper">
    <RouterLink class="highlight-button" to="/enter-tournament">
      <img class="enter-icon" src="@/assets/icons/entericon.svg" alt="EnterIcon"/>
      Join Tournament
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
  text-align: center;
 
 
  }

  .default-button:hover {
    background-color:#509F96;
    color: #ffffff;
    border: 2px solid #509F96;
  }

</style>
<!-- linear-gradient(to right, #0DEEB9, #24EC3C) -->