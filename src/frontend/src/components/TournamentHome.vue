<script setup> </script>

<template>

    <div id="header">space for header</div>

    <RouterView></RouterView>

    <div id="navbar">
        <RouterLink to="/tournament-home/dashboard">Dashboard</RouterLink>
        <RouterLink to="/tournament-home/games">Games</RouterLink>
        <RouterLink to="/tournament-home/teams">Teams</RouterLink>
        <RouterLink to="/tournament-home/settings">Settings</RouterLink>
    </div>

</template>


<style scoped>
   
</style>


