<template>
    <div class="wrapper">
        <form action="" @submit.prevent="showWritting">
            <label for="">Title</label>
            <input v-model="title" type="text">
            <label for="">Content</label>
            <textarea v-model="content" name="" id="" cols="30" rows="10"></textarea>
            <button type="submit">Envoyer</button>
        </form>
        <p>{{ obj.title }}</p>
        <p>{{ obj.content }}</p>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const title = ref()
const content = ref()

const obj = ref({
    title : '',
    content : ''
}) 

function showWritting (){
    obj.value = {
        title : title.value,
        content : content.value
    }
}
</script>