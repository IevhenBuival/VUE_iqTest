<template>
  <div>
    <header_menu v-bind:menu_list="menu_list" v-bind:showbrain="showbrain" v-on:setNewPage="setMenuData"
      v-on:modalMenuShow="modalMenuShow" />
    <main_page v-on:setNewPage="setMenuData" />
    <template v-if="state">
      <detail_head />
      <detail_middle v-on:setNewPage="setMenuData" />
      <detail_end v-on:setNewPage="setMenuData" />
    </template>
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
import main_page from "@/components/main_screen/main_page";
import detail_head from "@/components/main_screen/detail_head";
import detail_middle from "@/components/main_screen/detail_middle";
import detail_end from "@/components/main_screen/detail_end";

//import test_card from "@/components/test_content/test_card";
export default {
  props: ["menu_list", "test_data", "state", "showbrain"],
  components: {
    header_menu,
    main_page,
    detail_head,
    detail_middle,
    detail_end,
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
