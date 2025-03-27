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

    #header, #navbar {
        background-color: gray;
        padding: 5%;
    }

    a {
        display: inline-block;
        background-color: black;
        border: solid 1px black;
        color: white;
        padding: 50px;
        margin: 10px;
        font-size: xx-large;
    }
    a:hover,
    a.router-link-active {
        background-color: rgb(110, 79, 13);
    }
</style>


