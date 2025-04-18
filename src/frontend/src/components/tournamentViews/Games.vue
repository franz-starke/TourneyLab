<!-- TODO: 
 + fill as per wireframe
 + list games per field via api calls or localstorage (pinia store)
 + maybe create "editable Game"- component for listing Games
    because user should be able to change Game State
    => so when clicking on it, should open a Game-Editor where 
        points can be changed (maybe as router-links to a GameEdit.vue component)

-->

<script setup>
import { useTournamentStore } from "@/stores/tournamentStore";

const store = useTournamentStore();

console.log(store.tournamentData);
console.log(store.tournamentName);
</script>

<template>
  <h1>Tournament Games Not Implemented</h1>
</template>
