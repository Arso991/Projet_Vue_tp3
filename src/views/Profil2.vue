<template>
    <h1>Bonjour {{ userName }}</h1>
</template>

<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {userInfo as users} from '@/api/user'
import {useUserStore} from '@/stores/user'

const {userName} = storeToRefs(useUserStore())
</script>