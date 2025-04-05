<script setup> </script>

<template>
    <div id="header">space for header</div>
    <RouterView></RouterView>
    <div id="navbar">
        <RouterLink class="router-link " to="/tournament-home/dashboard">Dashboard</RouterLink>
        <RouterLink class="router-link " to="/tournament-home/games">Games</RouterLink>
        <RouterLink class="router-link " to="/tournament-home/teams">Teams</RouterLink>
        <RouterLink class="router-link " to="/tournament-home/settings">Settings</RouterLink>
    </div>
</template>


<style scoped>

#header, #navbar {
    background-color: gray;
}





   
</style>


