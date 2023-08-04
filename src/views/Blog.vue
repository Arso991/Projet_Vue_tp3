<template>
    <div class="wrapper">
        <div class="main">
            <div class="container">
                <div class="banner">

                </div>
                <div class="main__content">
                    <Articles v-for="element in blogTab" :element="element"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import image1 from '@/assets/image1.jpg';
import Articles from '@/components/Articles.vue';




/* import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://qavibiwzbrxrraksoeum.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhdmliaXd6YnJ4cnJha3NvZXVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwNjcwNjUsImV4cCI6MjAwNjY0MzA2NX0.bjjxqvwaAuyTgXRrtdDdLmfgpUS-oL1nhVlrH_JWZcw'
const supabase = createClient(supabaseUrl, supabaseKey)

const {data: articles, error} = await 
supabase
    .from('articles')
    .select('*')

    console.log(articles); */
</script>

<style scoped>
img{
    width: 100%;
    height: auto;
}
.main__content{
    display: grid;
    grid-template-columns: repeat(3, 400px);
    justify-content: center;
}


</style>