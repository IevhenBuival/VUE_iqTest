<template>
    <div>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <div class="headBlock">
                        <p>
                            Прохождение теста займет у вас не более <span>12</span> минут, а
                            его результаты вы сможете <span>использовать всю жизнь</span>.
                        </p>
                    </div>

                    <div class="footBlock">
                        <div class="middleText">
                            <p>
                                Профессиональная интерпретация и детально
                                <strong>проработанные рекомендации</strong> позволят вам
                                качественно изменить
                                <strong>все аспекты своей жизни:</strong> от финансового до
                                любовного.
                            </p>
                        </div>
                    </div>
                    <div class="btnWrapper">
                        <button_item v-bind:title="'Пройти тест'" v-bind:opacity="true" v-on:goTest="goTestClick" />
                    </div>
                </div>

                <div class="footer">
                    <div class="image"><img src="@/pics/copyright.png" alt="" /></div>
                </div>
            </div>
            <div class="rightLightning">
                <img src="~@/pics/lightning.png" alt="" />
            </div>
            <div class="leftLightning1 uno">
                <img src="~@/pics/lightning.png" alt="" />
            </div>
        </div>

    </div>
</template>
  
<script>
/*
 
*/
import button_item from "@/components/button_item/button_item";

export default {
    components: {
        button_item,
    },
    methods: {
        goTestClick() {
            this.$emit("setNewPage", 2);
        },
    },
};
</script>
  
<style scoped>
.btnWrapper {
    z-index: 7;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: max(5%, 10px);
    ;
}

span {
    color: #ffc700;
}

.uno2 {
    position: absolute;

    top: 150px;
    right: 0px;
    margin: 0 5px;
    height: 165px;
    width: 165px;
    display: inline-block;
    text-align: center;
    vertical-align: center;
    z-index: 10;

}

.uno {
    position: absolute;

    top: 100px;
    left: 0px;
    margin: 0 5px;
    width: 165px;
    height: 165px;
    display: inline-block;
    text-align: center;
    vertical-align: center;
    font-size: 0;
    z-index: 10;
    /* background: url("~@/pics/rain_bk2.png") no-repeat top center;
    background-size: 100% 100%;*/

}



.container {
    /* rain_bk2 */
    /* min-width: 517px;*/


    height: calc(var(--app-height, 100vh) * 672 / 568);
    height: calc(var(--app-height, 100vh) * 672 / 568);
    min-height: max(100vh, 672px);
    top: calc(var(--app-height, 100vh) * 46 / 568);
    /*require('./assets/media/img.jpg')*/
    background: url("~@/pics/rain_bk2.png") no-repeat top center;
    background-size: 100% 100%;
    /*background-size: 100vh;*/
}


.rightLightning {
    display: inline-block;
    position: absolute;
    font-size: 0;
    right: 0;
    top: 448px;
    z-index: 1;
    text-align: center;
    vertical-align: right;
    transform: translate(50%, 0) rotate(53.15deg);
}

img {
    width: calc(var(--app-height, 100vh) * 165 / 568);
    height: calc(var(--app-height, 100vh) * 165 / 568);

}

.leftLightning {
    display: absolute;
    width: calc(var(--app-height, 100vh) * 165 / 568);
    height: calc(var(--app-height, 100vh) * 165 / 568);
    left: 0;

    line-height: 0;
    display: inline-block;
    text-align: center;
    vertical-align: center;

    z-index: 1;
    transform: translate(-50%, 0) rotate(-53.15deg);
    background: url(~@/pics/lightning.png) no-repeat;
    background-size: 100% 100%;
}

.wrapper {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-left: max(5%, 10px);
    justify-content: space-around;
    flex-wrap: 1;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    height: 90%;


}

.footBlock {
    display: flex;

    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 30%;

    flex-direction: column;
    justify-content: end;
    align-items: left;
    justify-content: left;


}

.middleText {
    display: flex;
    flex-grow: 0;
    text-align: left;
    min-height: 30%;
    max-width: 90%;


    background: rgba(243, 243, 242, 0.8);
    border-radius: calc(var(--app-height, 100vh) * 20 / 568);
    z-index: 3;
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 400;
    font-size: calc(var(--app-height, 100vh) * 16 / 568);
    line-height: calc(var(--app-height, 100vh) * 23 / 568);
    /* or 144% */
    letter-spacing: 0.05em;

    color: #181818;

}

.headBlock {
    display: flex;


    max-width: 90%;
    text-align: left;
    font-family: "Merriweather";
    font-style: normal;
    font-weight: 400;
    font-size: calc(var(--app-height, 100vh) * 15 / 568);
    line-height: calc(var(--app-height, 100vh) * 20 / 568);
    letter-spacing: 0.05em;
    z-index: 5;

    min-height: calc(var(--app-height, 100vh) * 87 / 568);

    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 30%;
    color: #ffffff;

}

.footer {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 10%;
}
</style>
  