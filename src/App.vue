<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="wrapper">
    <NavBar/>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
