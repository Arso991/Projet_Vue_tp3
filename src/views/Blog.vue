<template>
    <div class="container">
        jvnsdnkdsfklvdnklvdklnk
    </div>
</template>

<script setup lang="ts">
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://qavibiwzbrxrraksoeum.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhdmliaXd6YnJ4cnJha3NvZXVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwNjcwNjUsImV4cCI6MjAwNjY0MzA2NX0.bjjxqvwaAuyTgXRrtdDdLmfgpUS-oL1nhVlrH_JWZcw'
const supabase = createClient(supabaseUrl, supabaseKey)

const {data: articles, error} = await 
supabase
    .from('articles')
    .select('*')

    console.log(articles);
</script>