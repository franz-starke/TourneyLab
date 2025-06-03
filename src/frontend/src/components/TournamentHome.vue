<script setup>
import { useTournamentStore } from "@/stores/tournamentStore";
import IconHome from "@/components/icons/IconHome.vue";
import IconTournTree from "@/components/icons/IconTournTree.vue";
import IconSettings from "./icons/IconSettings.vue";
import IconTeam from "./icons/IconTeam.vue";
import { ref, onMounted } from "vue";

// TODO: first fetch from api for newest tournamentData and write it into the store
// if offline just use store

const store = useTournamentStore();


// FIXME: this is an ugly auto scroll
// const tournamentName = ref(null);
// onMounted(() => {
//   let scrollDirection = 1;

//   setInterval(() => {
//     // Scroll 1px every 100ms
//     tournamentName.value.scrollLeft += scrollDirection;

//     // Reverse direction when reaching left or right end
//     if (
//       tournamentName.value.scrollLeft + tournamentName.value.clientWidth >= tournamentName.value.scrollWidth ||
//       tournamentName.value.scrollLeft <= 0
//     ) {
//       scrollDirection *= -1;
//     }
//   }, 10);
// });



</script>

<template>
  
  <header id="header" class="w-full">
    <h1
      id="tournament-name"
      class="text-center overflow-x-auto whitespace-nowrap max-w-full inline-block"
      
      ref="tournamentName"
      @mounted="() => { tournamentName.scrollLeft = tournamentName.scrollWidth; }"
    >
      {{ store.tournament.name }}
    </h1>
  </header>
  <div id="tournament-views">
    <RouterView></RouterView>
  </div>
  <div id="navbar" class="flex flex-row justify-between items-center gap-2">

    <RouterLink class="default-btn w-full h-full"  to="/tournament-home/dashboard">
      <div class="flex basis-1/5 p-0 items-center justify-center"> 
        <IconHome />
      </div>
    </RouterLink>
    
    <RouterLink class="default-btn w-full h-full" to="/tournament-home/games">
      <div class="flex basis-1/5 p-0 items-center justify-center"> 
        <IconTournTree/>
      </div>
    </RouterLink>

    <RouterLink class="default-btn w-full h-full" to="/tournament-home/teams">
      <div class="flex basis-1/5 p-0 items-center justify-center"> 
        <IconTeam />
      </div>
    </RouterLink>
    <RouterLink class="default-btn w-full h-full" to="/tournament-home/settings">
      <div class="flex basis-1/5 p-0 items-center justify-center"> 
        <IconSettings />
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>

#header,
#navbar {
  background-color: white;
  /* border: 1px solid black; */
  border-radius: 20px;
  padding: 5px;
}

#header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  font-size: 2em;
  font-weight: bold;
  color: #333;
  padding: 0.7em;

}

#tournament-views {
  width: 100%;
  height: 80vh;
  overflow: scroll;
}

.default.btn {
    transition: background-color 0s;
 
}
#tournament-name {
  scroll-behavior: smooth;
}



</style>
