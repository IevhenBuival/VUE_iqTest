<template>
  <!--<div
    class="li"
    :class="{ selected: variant.checked }"
    @:click="checkedClick(variant.id)"
  >
 </div>-->
  <div class="container">
    <div class="checkbottom">1</div>
    <div class="title">
      <strong>{{ variant.text }}</strong>
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
.container {
  display: flexbox;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: space-around;
  background-color: aqua;
  overflow: hidden;
}
.title {
  display: inline-block;
  flex: 1 1 auto;
  width: 50%;
  background-color: red;
}

.checkbottom {
  /* Ellipse */

  display: inline-block;
  box-sizing: border-box;

  border-radius: 50%;
  font-weight: bold;

  max-width: calc(var(--app-height, 100vh) * 20 / 568);
  max-height: calc(var(--app-height, 100vh) * 20 / 568);
  margin-left: calc(var(--app-width, 100vh) * 35 / 320);
  background-color: red;
  border: 3px solid #fff;

  opacity: 1;
}
.selected {
  background-color: blue;
}
.li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;

  /* Rectangle 4 */

  width: 100%;
  min-height: calc(var(--app-height, 100vh) * 40 / 568);
  z-index: 0;
  background: #f2f3f3;
  opacity: 0.15;
}
</style>
