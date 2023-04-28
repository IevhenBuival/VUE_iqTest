<template>
    <div class="wrapper">
        <div class="item" :style="{
            background: '' + variant.text + '',
        }" :class="{ selected: variant.checked }" @:click="checkedClick(variant.id)">

        </div>
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
.wrapper {
    display: flex;
    margin: 5px 5px;
    width: calc(var(--app-height, 100vh) * 75 / 568);
    height: calc(var(--app-height, 100vh) * 75 / 568);

}

.item {
    width: 90%;
    height: 90%;
}

.selected {
    width: 100%;
    height: 100%;
    border: 5px solid #FFC700;
}
</style>
