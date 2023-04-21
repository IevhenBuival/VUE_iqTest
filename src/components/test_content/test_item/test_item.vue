<template>
  <!--<div
    class="li"
    :class="{ selected: variant.checked }"
    @:click="checkedClick(variant.id)"
  >
  <div class="checkbottom">1</div>
    <div class="title">
      <strong>{{ variant.text }}</strong>
    </div>
 </div>-->
  <div class="container">
    <div
      class="bugfix"
      :class="{ selected: variant.checked }"
      @:click="checkedClick(variant.id)"
    >
      <div class="circle" :class="{ checked: variant.checked }"></div>
      <div class="title" :class="{ selected: variant.checked }">
        <p>{{ variant.text }}</p>
      </div>
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
.bugfix {
  display: flex;
  width: 100%;
  /* Rectangle 4.4 */
  align-items: center;

  min-height: calc(var(--app-height, 100vh) * 40 / 568);
  background: rgba(255, 255, 255, 0.15);
}
.container {
  display: inline-block;
  width: 100%;
}

.title {
  display: inline-block;
  flex: 1 1 auto;
  width: 50%;
  color: #fff;
  text-align: left;

  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height, 100vh) * 18 / 568);
  line-height: calc(var(--app-height, 100vh) * 19 / 568);
  letter-spacing: 0.05em;

  color: #ffffff;
}

.circle {
  /* Ellipse */

  display: flex;
  margin: calc(var(--app-height, 100vh) * 10 / 568);
  justify-content: center;
  align-items: center;
  width: calc(var(--app-height, 100vh) * 19 / 568);
  height: calc(var(--app-height, 100vh) * 19 / 568);
  border-radius: 50%;
  border: #f2f3f3 solid calc(var(--app-height, 100vh) * 2 / 568);
}
.selected {
  background: #ffc700;
  color: #272727;
}
.checked {
  background: #2950c2;
  border: calc(var(--app-height, 100vh) * 2 / 568) solid #272727;
}
</style>
