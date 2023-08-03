<template>
    <div class="wrapper">
        <div class="header">
            <div class="container">
                <div class="header__content">
                    <div class="header__content__logo">
                       <a href="">BLOG</a>
                    </div>
                    <div class="header__content__menu">
                        <input type="text" placeholder="Rechercher">
                        <ul class="header__content__menu__item">
                            <li><a href="">Acceuil</a></li>
                            <li><a href="">A propos</a></li>
                            <li><a href="">Articles</a></li>
                            <li><a href="">Contacts</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
input{
    outline: none;
    border: 1px solid black;
}
a{
    text-decoration: none;
}
ul li{
    list-style: none;
}
.container{
    padding: 0 2rem;
}

.header{
    width: 100%;
    box-shadow: 0px 10px 12px 0px rgba(0,0,0,0.1);
}
.header__content{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header__content__logo a{
    font-size: 1.5rem;
    font-weight: 600;
}
.header__content__menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header__content__menu input{
    border-radius: 5px;
    padding: .3rem 1rem;
}
.header__content__menu__item{
    display: flex;
    gap: 1rem;
}
.header__content__menu__item li a{
    padding: .5rem;
    font-size: 1.2rem;
    font-weight: 600;
}
</style>