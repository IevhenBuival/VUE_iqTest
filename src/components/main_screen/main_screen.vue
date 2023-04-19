<template>
  <div class="mainscreen">
    <header_menu
      v-bind:menu_list="menu_list"
      v-bind:showbrain="showbrain"
      v-on:setNewPage="setMenuData"
      v-on:modalMenuShow="modalMenuShow"
    />
    <div class="block1">
      <h1>text</h1>
    </div>

    <div v-if="state" class="block2bg">
      <div class="block2">ttrtrrt</div>
    </div>
    <div v-if="state" class="block3">
      3333
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </div>
    <div v-if="state" class="block4">
      gggggggggggggggggggg gggggggggggggggggggggg gggggggggggggggggggggg
      gggggggggggggggggggg gggggggggggggggggggg gggggggggggggggggggg
      gggggggggggggggggggg gggggggggggggggggggg gggggggggggggggggggg
      gggggggggggggggggggg gggggggggggggggggggg
    </div>
  </div>
</template>

<script>
/*<h1>Test responsive text</h1>
 

    {{ test_data }}
     <test_card
      v-bind:card_data="test_data[0]"
      v-on:selectTestAnswer="setTestAnswer"
    />
    
    */
import header_menu from "@/components/header_menu/header_menu";
//import test_card from "@/components/test_content/test_card";
export default {
  props: ["menu_list", "test_data", "state", "showbrain"],
  components: {
    header_menu,

    /*  test_card,*/
  },
  methods: {
    setTestAnswer(number, id) {
      this.$emit("setTestAnswer", number, id);
    },
    setMenuData(id) {
      this.$emit("setMenuData", id);
    },
    modalMenuShow() {
      this.$emit("setModalActive");
    },
  },
  data() {
    return {
      scale: 1.17,
    };
  },
};
</script>

<style scoped>
.mainscreen {
  background: red;
  overflow-y: scroll;
  max-width: calc(var(--app-width), 100vw);
}

h1 {
  --max-font: 50;
  --min-font: 25;
  width: 100%;
  --a: 4em;
  /*height: calc(var(--a)+7px);*/
  font-family: var(--main-font);
  font-size: 5em;
}

.block1 {
  /* rain_bk */
  position: absolute;
  top: calc(var(--app-height, 100vh) * 46 / 568);
  /*min-width: 517px;*/
  min-width: 100%;

  height: calc(var(--app-height, 100vh) * 647 / 568);
  min-height: 522px;

  background: url("~@/pics/rain_bk.png") no-repeat;
  background-size: 100% 100%;
  /*background-size: 100vh;*/
}
.block2 {
  /*min-width: 517px;*/
  width: 100%;
  min-height: 339px;
  height: calc(var(--app-height) * 339 / 568);

  background: radial-gradient(
    84.34% 50.29% at 48.75% 49.71%,
    #2950c2 0%,
    rgba(38, 91, 199, 0.96) 40.62%,
    rgba(39, 98, 187, 0) 85.42%
  );
  background-size: 100% 100%;
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */

  /*background-size: 100vh;*/
}
.block2bg {
  /* image */

  position: absolute;
  width: 100%;

  top: calc(var(--app-height, 100vh));
  z-index: 2;
  height: calc(var(--app-height) * 339 / 568);
  /* min-width: 517px;
  width: 100%;*/
  min-height: 339px;
  /*require('./assets/media/img.jpg')*/
  background: url("~@/pics/image.png") no-repeat center;
  background-size: 100% 100%;
  /*background-size: 100vh;*/
}
.block3 {
  /* Rectangle 2.3 */
  position: absolute;
  top: calc(var(--app-height) * 907 / 568);
  max-width: calc(var(--app-width), 100vw);
  /* min-width: 517px;*/
  width: 100%;
  min-height: 511px;
  height: calc(var(--app-height) * 511 / 568);
  background: #f3f3f2;
}
.block4 {
  /* rain_bk2 */
  position: absolute;
  /* min-width: 517px;*/
  width: 100%;
  height: calc(var(--app-height) * 531 / 568);
  min-height: 533px;
  top: calc(var(--app-height) * 1418 / 568);
  /*require('./assets/media/img.jpg')*/
  background: url("~@/pics/rain_bk2.png") no-repeat top center;
  background-size: 100% 100%;
  /*background-size: 100vh;*/
}

@media screen and (max-width: 420px) {
  h1 {
    font-size: 4em;
  }
}
</style>
