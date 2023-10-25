<template>
    <div class="wrapper">
        <div class="main">
            <div class="container">
                <div class="banner">

                </div>
                <div class="main__content">
                        <div class="main__content__item" v-for="element in posts">
                            <div class="main__content__item__img">
                                <img :src="element.image" alt="">
                            </div>
                            <h1>{{ element.title }}</h1>
                            <p>{{ element.summary }}</p>
                            <div class="main__content__item__button">
                                <button>
                                    <RouterLink :to="`/article/${element.id}`">Voir plus</RouterLink>
                                </button>
                            </div>
                            <!-- <p>{{ element.content }}</p> -->
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {posts} from '@/api/article'

</script>

<style scoped>
.main__content {
    display: grid;
    grid-template-columns: repeat(3, 400px);
    justify-content: center;
}
img{
    height: 100%;
    width: 100%;
}
button a{
    text-decoration: none;
    padding: .5rem;
    cursor: pointer;
    font-size: 1.2rem;
    color: black;
}
.main__content__item{
    width: 20rem;
    height: 25rem;
    padding: 1rem;
    margin-top: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 10px rgb(220, 219, 219);
}

.main__content__item h1{
    text-align: center;
}

.main__content__item__img{
    width: 100%;
    height: 15rem;
    overflow: hidden;
    display: flex;
    justify-content: center;

}

.main__content__item__img img{
    object-fit: cover;
    height: 100%;
}

.main__content__item__button{
    display: flex;
    justify-content: center;
}

button{
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: rgb(43, 43, 246);
}
</style>