<template>
  <div class="test_screen">
    <header_menu v-bind:menu_list="menu_list" v-bind:showbrain="showbrain" v-on:setNewPage="setMenuData"
      v-on:modalMenuShow="modalMenuShow" />
    <test_card v-bind:test_data="test_data.tests[test_data.current]" v-bind:tests_count="test_data.tests.length"
      v-on:selectTestAnswer="setTestState" v-on:nextTest="setNewNumber" />
  </div>
</template>

<script>
import test_card from "@/components/test_content/test_item/test_card";
import header_menu from "@/components/header_menu/header_menu";

export default {
  props: ["test_data", "menu_list", "showbrain", "loading"],
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
    setTestState: function (number, id) {
      this.$emit("setTestDate", number, id);
    },
    setNewNumber: function (number) {
      this.$emit("setTestNumber", number);
    },
  },
};
</script>

<style scoped>
.test_screen {
  position: absolute;

  width: 320px;
  height: 568px;
  left: 0px;
  top: 0px;

  width: 100%;
  height: calc(var(--app-height) * 522 / 568);

  min-height: calc(var(--app-height) * 522 / 568);
  max-height: calc(var(--app-height) * 522 / 568);
  top: calc(var(--app-height) * 46 / 568);
  background: url("~@/pics/rain_bk2.png") no-repeat top center;
  background-size: 100% 100%;
}
</style>
