<template>
    <header class="header">
        <div class="container">
            <div class="header__body">
                <div class="header__logo">
                    <img src="@/pics/logo.png" alt="" />
                </div>
                <div class="header__burger" :class="{ active: active }" v-on:click="menuClick">
                    <span>

                    </span>
                </div>
                <nav class="header__menu" :class="{ active: active }" v-on:click="menuClick">
                    <ul class="header__list">
                        <li>
                            <a href="" class="header__link">main</a>
                        </li>
                        <li>
                            <a href="" class="header__link">info</a>
                        </li>
                        <li>
                            <a href="" class="header__link">test</a>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>

    </header>
    <div class="content">
        <div class="container">
            <div class="container__header">
                <p>hello</p>
            </div>
            <div class="container__text">
                <p>text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text text text
                    text text text text text text text text text text text text text text text text text text text </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return { active: false }
    },
    methods: {
        menuClick() {
            this.active = !this.active;
        }
    }
}
</script>
<style scoped>
.active {}

.header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;

    z-index: 50;

}

.header::before {
    content: '';
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: grey;
}

.header__body {
    position: relative;
    height: 46px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
}

@media (min-width: 767px) {
    .header__body {
        height: 76px;
    }
}

.header__logo {
    flex: 1 1 40px;
    height: 40px;
    overflow: hidden;
    position: relative;
    z-index: 3;
}

@media (min-width: 767px) {
    .header__logo {
        flex: 1 1 50px;
    }
}


.header__logo img {
    max-width: 46px;
    max-height: 46px;

    display: block;

}

@media (min-width: 767px) {
    .header__logo {

        position: relative;
        z-index: 2;
    }
}

.header__list {
    display: block;



}

@media (min-width: 767px) {
    .header__list {
        display: flex;
    }
}


.header__list li {
    list-style: none;
    margin: 0 0 20px 0;
}

@media (min-width: 767px) {
    .header__list li {
        margin: 0 0 0 20px;
    }
}


.header__link {
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    text-decoration: none;
}

.header__burger {
    display: block;
    position: relative;
    width: 24px;
    height: 20px;


    min-width: 24px;
    width: 4.2%;
    margin: 3% 2%;
    padding: 0 16px;
    position: relative;
    z-index: 5;

}



.header__burger.active::before {
    transform: rotate(45deg);


}

.header__burger.active::after {
    transform: rotate(-45deg);

}

.header__burger span {
    position: absolute;
    background-color: #fff;
    left: 0;
    width: 100%;
    height: 2px;
    top: 9px;

}

.header__burger.active span {
    transform: scale(0);

}

.header__burger::before,
.header__burger::after {
    content: '';
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;

}

.header__burger::before {
    top: 0;
}

.header__burger::after {
    bottom: 0;
}

@media (min-width: 767px) {
    .header__burger {
        display: none;
    }
}

.header__menu {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: aqua;
    padding: 70px 10px 20px 10px;

    z-index: 5;

}

.header__menu.active {
    left: 0;
    overflow: auto;
    transition: all 0.3s ease 0s;
}

@media (min-width: 767px) {

    .header__menu {
        display: inline-block;
        overflow: hidden;
        top: auto;
        left: auto;
        width: auto;
        height: auto;
        position: relative;


        padding: 0 0 0 0;

        z-index: 5;

    }
}

.container {
    max-width: 320px;
    margin: 0 auto;
    padding: 0px 3px;
}

.content {
    padding-top: 66px;
}

@media (min-width: 767px) {
    .content {
        padding-top: 86px;
    }

}

.content__text {
    font-size: 18px;
    line-height: 20px;

}

.content__text p {
    margin-bottom: 20px;
}




.background {
    height: 600px;
    max-width: 100vw;
    background-color: chartreuse;
}

.block {
    position: absolute;
    right: 0;
    height: 100px;
    width: 100px;
    transform: translate(50%, -50%);
    background-color: blue;
}

.menu {
    display: inline-block;
    font-size: max(16px, 2.8%);
    color: azure;
}
</style>
