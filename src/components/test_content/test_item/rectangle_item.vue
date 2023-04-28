<template>
    <div class="item" :class="{ selected: variant.checked }" @:click="checkedClick(variant.id)">
        <h1>{{ variant.text }}</h1>

    </div>
</template>
<script>
export default {
    props: {
        variant: { type: Object, required: true },
    },

    methods: {
        checkedClick(id) {
            this.$emit("selectAnswer", id);
        },
    },
};

</script>
<style scoped>
.item {
    display: flex;
    margin: 5px 5px;
    width: calc(var(--app-height, 100vh) * 44 / 568);
    height: calc(var(--app-height, 100vh) * 44 / 568);
    background: #fff;
    justify-content: center;
    align-items: center;
}


.item h1 {



    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-size: calc(var(--app-height, 100vh) * 24 / 568);
    line-height: calc(var(--app-height, 100vh) * 30 / 568);
    /* or 245% */
    text-align: center;
    text-transform: capitalize;


    color: #0D0C11;
}


.selected {

    border: 5px solid #FFC700;
}
</style>