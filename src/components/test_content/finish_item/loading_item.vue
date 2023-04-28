<template>
    <div class="loading">
        <progress_bar v-bind:tests_count="100" v-bind:current="99" />
        <div class="loading__title">
            <h1>
                Обработка результатов
            </h1>
            <div class="loading__block">
                <div class="Loading__img_wrapper">
                    <img src="@/pics/loader.png" alt="">
                </div>
                <div class="Loading__footer">
                    <div class="loading_text">
                        <p> "Определение стиля мышления............... ..................................................."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import progress_bar from '@/components/test_content/test_item/progress_bar.vue';
export default {
    components: {
        progress_bar,
    }
}
</script>

<style scoped>
.loading__title {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    overflow: hidden;
    min-height: 20%;
    /* margin-bottom: calc(var(--app-height, 100vh) * 40 / 568);*/
    flex: 2 1 auto;
}

.loading__title h1 {
    min-height: calc(var(--app-height, 100vh) * 60 / 568);

    font-family: "PT Serif";
    font-style: normal;
    font-weight: 400;
    font-size: calc(var(--app-height, 100vh) * 23 / 568);
    line-height: calc(var(--app-height, 100vh) * 30 / 568);
    text-align: center;
    letter-spacing: 0.05em;

    color: #ffffff;


}

.loading__block {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    /* image */
    flex-direction: column;

    min-width: calc(var(--app-width, 100vh) * 173 / 320);
    min-height: calc(var(--app-height, 100vh) * 115 / 568);
}

.Loading__img_wrapper {
    /* Group */
    display: block;
    width: 65px;
    height: 68.32px;
    animation: rotating 2s linear infinite;

    /*background: #3bde7c;*/
}

.Loading__footer {
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    width: 90%;
    margin: auto;
    /*19-*/
    overflow: hidden;


}

.loading_text {

    min-width: calc(var(--app-width, 100vh) * 276 / 320);
    height: calc(var(--app-height, 100vh) * 60 / 568);

    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: calc(var(--app-height, 100vh) * 14 / 568);
    line-height: calc(var(--app-height, 100vh) * 19 / 568);
    letter-spacing: 0.05em;

    text-align: left;
    color: #FFFFFF;


}

@media (min-width: 767px) {
    .loading_text {
        text-align: center
    }
}

.wrapper_loading {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    width: 100%;

    flex: 1 1 auto;
    height: 70%;
}


@keyframes rotating {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>