<template>
  <div v-if="userName">
    <h1>Bienvenue {{ userName }}</h1> <br>
    <h1>Vous etes né en {{ userStore.userAge }}</h1>
    <button @click="gotoProfil2">Aller sur profil2</button>
  </div>
  <div v-else>
    <form action="" @submit.prevent="login">
      <input type="text" v-model="userData.name" placeholder="Name">
      <input type="email" v-model="userData.email" placeholder="Email">
      <input type="number" v-model="userData.age" placeholder="Age">
      <button type="submit" @click="">Se connecter</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from '@/stores/user'
import {userInfo as users} from '@/api/user'
import { useRouter } from 'vue-router';
import {ref} from 'vue'
import type { User } from '@/types/user';
import { storeToRefs } from 'pinia';

const userData = ref<Partial<User>>({})
function login(){
  initialise(userData.value)
}

const {modifyEmail, initialise} = useUserStore()
const {userName,user, userAge} = storeToRefs(useUserStore())

const userStore = useUserStore()
const router = useRouter()
function gotoProfil2 (){
  modifyEmail('brice@gmail.com')
    router.push('/profil2')
}

</script>