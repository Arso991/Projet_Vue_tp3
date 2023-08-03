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



const blogTab = ref([
    {
        id : 1,
        title: 'Un jour nouveau',
        summary: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là.',
        content: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là. Mon père a des jambes et des bras maigres, mais il est fort au milieu. Alors j\'espère que je serai ça. Je vais probablement juste rester assis. Mais pas dans une chaise berçante ou quoi que ce soit, juste sur le sol. Peut-être dans un bateau. Je pense que ce serait cool d\'avoir un bateau. Je me moquais toujours des mecs hétéros qui parlaient de pêche. Mais maintenant je pense : peut-être que je devrais pêcher. Apprenez vraiment à survivre de la terre. Comme éviscérer le poisson moi-même et dégoûter les enfants. Pas nécessairement mes enfants, mais peut-être que les enfants de mes frères et sœurs, je serai le meilleur pire des oncles de tous les temps. J\'espère aussi que j\'aurai dessiné beaucoup de choses d\'ici là. ',
        image : image1
    },
    {
        id : 2,
        title: 'Un jour nouveau',
        summary: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là.',
        content: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là. Mon père a des jambes et des bras maigres, mais il est fort au milieu. Alors j\'espère que je serai ça. Je vais probablement juste rester assis. Mais pas dans une chaise berçante ou quoi que ce soit, juste sur le sol. Peut-être dans un bateau. Je pense que ce serait cool d\'avoir un bateau. Je me moquais toujours des mecs hétéros qui parlaient de pêche. Mais maintenant je pense : peut-être que je devrais pêcher. Apprenez vraiment à survivre de la terre. Comme éviscérer le poisson moi-même et dégoûter les enfants. Pas nécessairement mes enfants, mais peut-être que les enfants de mes frères et sœurs, je serai le meilleur pire des oncles de tous les temps. J\'espère aussi que j\'aurai dessiné beaucoup de choses d\'ici là. ',
        image : image1
    },
    {
        id : 3,
        title: 'Un jour nouveau',
        summary: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là.',
        content: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là. Mon père a des jambes et des bras maigres, mais il est fort au milieu. Alors j\'espère que je serai ça. Je vais probablement juste rester assis. Mais pas dans une chaise berçante ou quoi que ce soit, juste sur le sol. Peut-être dans un bateau. Je pense que ce serait cool d\'avoir un bateau. Je me moquais toujours des mecs hétéros qui parlaient de pêche. Mais maintenant je pense : peut-être que je devrais pêcher. Apprenez vraiment à survivre de la terre. Comme éviscérer le poisson moi-même et dégoûter les enfants. Pas nécessairement mes enfants, mais peut-être que les enfants de mes frères et sœurs, je serai le meilleur pire des oncles de tous les temps. J\'espère aussi que j\'aurai dessiné beaucoup de choses d\'ici là. ',
        image : image1
    },
    {
        id : 4,
        title: 'Un jour nouveau',
        summary: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là.',
        content: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là. Mon père a des jambes et des bras maigres, mais il est fort au milieu. Alors j\'espère que je serai ça. Je vais probablement juste rester assis. Mais pas dans une chaise berçante ou quoi que ce soit, juste sur le sol. Peut-être dans un bateau. Je pense que ce serait cool d\'avoir un bateau. Je me moquais toujours des mecs hétéros qui parlaient de pêche. Mais maintenant je pense : peut-être que je devrais pêcher. Apprenez vraiment à survivre de la terre. Comme éviscérer le poisson moi-même et dégoûter les enfants. Pas nécessairement mes enfants, mais peut-être que les enfants de mes frères et sœurs, je serai le meilleur pire des oncles de tous les temps. J\'espère aussi que j\'aurai dessiné beaucoup de choses d\'ici là. ',
        image : image1
    },
    {
        id : 5,
        title: 'Un jour nouveau',
        summary: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là.',
        content: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là. Mon père a des jambes et des bras maigres, mais il est fort au milieu. Alors j\'espère que je serai ça. Je vais probablement juste rester assis. Mais pas dans une chaise berçante ou quoi que ce soit, juste sur le sol. Peut-être dans un bateau. Je pense que ce serait cool d\'avoir un bateau. Je me moquais toujours des mecs hétéros qui parlaient de pêche. Mais maintenant je pense : peut-être que je devrais pêcher. Apprenez vraiment à survivre de la terre. Comme éviscérer le poisson moi-même et dégoûter les enfants. Pas nécessairement mes enfants, mais peut-être que les enfants de mes frères et sœurs, je serai le meilleur pire des oncles de tous les temps. J\'espère aussi que j\'aurai dessiné beaucoup de choses d\'ici là. ',
        image : image1
    },
    {
        id : 6,
        title: 'Un jour nouveau',
        summary: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là.',
        content: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là. Mon père a des jambes et des bras maigres, mais il est fort au milieu. Alors j\'espère que je serai ça. Je vais probablement juste rester assis. Mais pas dans une chaise berçante ou quoi que ce soit, juste sur le sol. Peut-être dans un bateau. Je pense que ce serait cool d\'avoir un bateau. Je me moquais toujours des mecs hétéros qui parlaient de pêche. Mais maintenant je pense : peut-être que je devrais pêcher. Apprenez vraiment à survivre de la terre. Comme éviscérer le poisson moi-même et dégoûter les enfants. Pas nécessairement mes enfants, mais peut-être que les enfants de mes frères et sœurs, je serai le meilleur pire des oncles de tous les temps. J\'espère aussi que j\'aurai dessiné beaucoup de choses d\'ici là. ',
        image : image1
    },
    {
        id : 7,
        title: 'Un jour nouveau',
        summary: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là.',
        content: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là. Mon père a des jambes et des bras maigres, mais il est fort au milieu. Alors j\'espère que je serai ça. Je vais probablement juste rester assis. Mais pas dans une chaise berçante ou quoi que ce soit, juste sur le sol. Peut-être dans un bateau. Je pense que ce serait cool d\'avoir un bateau. Je me moquais toujours des mecs hétéros qui parlaient de pêche. Mais maintenant je pense : peut-être que je devrais pêcher. Apprenez vraiment à survivre de la terre. Comme éviscérer le poisson moi-même et dégoûter les enfants. Pas nécessairement mes enfants, mais peut-être que les enfants de mes frères et sœurs, je serai le meilleur pire des oncles de tous les temps. J\'espère aussi que j\'aurai dessiné beaucoup de choses d\'ici là. ',
        image : image1
    },
    {
        id : 8,
        title: 'Un jour nouveau',
        summary: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là.',
        content: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là. Mon père a des jambes et des bras maigres, mais il est fort au milieu. Alors j\'espère que je serai ça. Je vais probablement juste rester assis. Mais pas dans une chaise berçante ou quoi que ce soit, juste sur le sol. Peut-être dans un bateau. Je pense que ce serait cool d\'avoir un bateau. Je me moquais toujours des mecs hétéros qui parlaient de pêche. Mais maintenant je pense : peut-être que je devrais pêcher. Apprenez vraiment à survivre de la terre. Comme éviscérer le poisson moi-même et dégoûter les enfants. Pas nécessairement mes enfants, mais peut-être que les enfants de mes frères et sœurs, je serai le meilleur pire des oncles de tous les temps. J\'espère aussi que j\'aurai dessiné beaucoup de choses d\'ici là. ',
        image : image1
    },
    {
        id : 9,
        title: 'Un jour nouveau',
        summary: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là.',
        content: 'Je pense que quand je serai vieux, j\'aurai les cheveux gris. Il devient déjà gris, donc j\'aurai certainement les cheveux gris. Peut-être que j\'aurai pris du volume à ce moment-là. Mon père a des jambes et des bras maigres, mais il est fort au milieu. Alors j\'espère que je serai ça. Je vais probablement juste rester assis. Mais pas dans une chaise berçante ou quoi que ce soit, juste sur le sol. Peut-être dans un bateau. Je pense que ce serait cool d\'avoir un bateau. Je me moquais toujours des mecs hétéros qui parlaient de pêche. Mais maintenant je pense : peut-être que je devrais pêcher. Apprenez vraiment à survivre de la terre. Comme éviscérer le poisson moi-même et dégoûter les enfants. Pas nécessairement mes enfants, mais peut-être que les enfants de mes frères et sœurs, je serai le meilleur pire des oncles de tous les temps. J\'espère aussi que j\'aurai dessiné beaucoup de choses d\'ici là. ',
        image : image1
    }
])
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