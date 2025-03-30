<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<RouterView />
</template>

<style >

* {
  text-align: center;
}
a {
    display: block;
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
