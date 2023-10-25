<template>
    <div class="wrapper">
        <div class="details" v-if="post">
            <div class="details__content">
                <div class="details__content__left">
                    <div class="details__content__top__img">
                        <img :src="post.image" alt="">
                    </div>
                    <div class="details__content__bottom">
                        <h1>{{ post.title }}</h1>
                        <p>{{ post.content }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            Aucune données
        </div>
    </div>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';
import {posts} from '@/api/article';
import {onMounted, ref} from 'vue'

const route = useRoute();
const id = route.params.id;
const post = ref()

const art = posts.find((item)=> item.id == Number(id));
    post.value = art
    
</script>

<style scoped>

</style>