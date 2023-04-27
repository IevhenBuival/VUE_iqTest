<template>
    <div class="hat_contant">
        <div class="hat_contant__title">
            Ваш результат рассчитан:
        </div>
        <div class="hat_contant__description">
            <p><span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем на
                15 пунктов отличается от среднего в большую или меньшую сторону!
            </p>
        </div>
        <div class="hat_contant__advise">
            Скорее получите свой результат!
        </div>
        <div class="hat_contant__warning">
            <p> В целях защиты персональных
                данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по
                звонку с вашего мобильного телефона</p>
        </div>
    </div>
</template>

<style scoped>
.hat_contant {
    margin: 16px 0 0 0;
    margin: calc(var(--app-height, 100vh) * 16 / 568) 0 0 0;
    width: 100%;
    max-width: 275px;


}

@media (min-width:320px) {
    .hat_contant {
        max-width: 100%;
        width: 100%;
        margin: 16px 6px 0 0;
        margin: calc(var(--app-height, 100vh) * 16 / 568) 0 0 0;

    }

}





.hat_contant__title {
    margin: 0 0;
    min-height: 27px;
    min-height: calc(var(--app-height, 100vh) * 27 / 568);
    /* Ваш результат рассчитан: */
    max-width: 271px;




    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    font-size: calc(var(--app-height, 100vh) * 15 / 568);
    line-height: 16px;
    line-height: calc(var(--app-height, 100vh) * 16 / 568);
    /* or 107% */
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    color: #FFFFFF;

}


@media (min-width: 320px) {

    .hat_contant__title {
        margin: 0 auto;
        max-width: 291px;
    }

}

.hat_contant__description {

    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 238px;
    max-width: 238px;
    min-height: 70px;
    min-height: calc(var(--app-height, 100vh) * 70 / 568);
    margin: 13px 16px;

    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    font-size: calc(var(--app-height, 100vh) * 14 / 568);

    line-height: 18px;
    line-height: calc(var(--app-height, 100vh) * 18 / 568);
    /* or 129% */
    text-align: center;

    color: #FFFFFF;


}

@media (min-width: 320px) {

    .hat_contant__description {
        max-width: 100%;
        margin: 13px 26px;

    }

}

.hat_contant__description span {
    text-decoration-line: underline;
}

.hat_contant__advise {
    /* Скорее получите свой результат! */

    min-width: 28px;
    min-height: 46px;
    min-height: calc(var(--app-height, 100vh) * 48 / 568);
    margin: 9px 12px 9px 12px;


    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    font-size: calc(var(--app-height, 100vh) * 18 / 568);
    line-height: 22px;
    line-height: calc(var(--app-height, 100vh) * 22 / 568);
    /* or 122% */
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    color: #3BDE7C;


}

@media (min-width: 320px) {

    .hat_contant__advise {

        margin: 9px 20px 9px 12px;
        margin: calc(var(--app-height, 100vh) * 9 / 568) 20px calc(var(--app-height, 100vh) * 9 / 568) 12px;


    }

}


.hat_contant__warning {




    min-width: 256px;
    min-height: 114px;
    min-height: calc(var(--app-height, 100vh) * 114 / 568);

    margin: 0 6px;

    background: #1C2741;
    border-radius: 6px;
}

@media (min-width: 320px) {

    .hat_contant__warning {

        margin: 0 26px;


    }

}

.hat_contant__warning p {

    /* В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона */

    margin: 15px 12px auto 12px;
    margin: calc(var(--app-height, 100vh) * 15 / 568) 12px auto 12px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    font-size: calc(var(--app-height, 100vh) * 8 / 568);
    line-height: 14px;
    line-height: calc(var(--app-height, 100vh) * 14 / 568);
    /* or 175% */
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;

    color: #FFFFFF;


}
</style>