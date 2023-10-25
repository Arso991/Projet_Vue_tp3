<template>
    <div class="wrapper">
        <div class="aside">
           <RouterLink></RouterLink>
           <RouterLink></RouterLink>
           <RouterLink></RouterLink>
        </div>
        <div class="main">

        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
.wrapper{
    display: flex;
    justify-content: space-between;
}
.aside{
    width: 2;
}
</style>