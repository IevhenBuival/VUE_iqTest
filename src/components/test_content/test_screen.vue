<template>
  <div class="testScreen">
    <header_menu
      v-bind:menu_list="menu_list"
      v-bind:showbrain="showbrain"
      v-on:setNewPage="setMenuData"
      v-on:modalMenuShow="modalMenuShow"
    />

    <test_card v-bind:card_data="test_data" />
  </div>
</template>

<script>
import test_card from "@/components/test_content/test_item/test_card";
import header_menu from "@/components/header_menu/header_menu";
export default {
  props: ["test_data", "menu_list", "showbrain"],
  components: {
    test_card,
    header_menu,
  },
  methods: {
    setMenuData: function (id) {
      this.$emit("setMenuData", id);
    },
    modalMenuShow: function () {
      this.$emit("setMenuData", 3);
    },
  },
};
</script>

<style scoped>
.testScreen {
  position: absolute;
  /* Rectangle 3 */

  width: 320px;
  height: 568px;
  left: 0px;
  top: 0px;

  /* min-width: 517px;*/
  width: 100%;
  height: calc(var(--app-height) * 522 / 568);
  min-height: 533px;
  top: calc(var(--app-height) * 46 / 568);
  background: rgba(13, 12, 17, 0.728);
  background: url("~@/pics/rain_bk2.png") no-repeat top center;
  background-size: 100% 100%;
}
</style>
