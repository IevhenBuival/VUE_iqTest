<template>
  <div>
    <header_menu v-bind:menu_list="menu_list" v-bind:showbrain="showbrain" v-on:setNewPage="setMenuData"
      v-on:modalMenuShow="modalMenuShow" />
    <main_page v-on:setNewPage="setMenuData" />
    <detail_head />

    <detail_middle v-on:setNewPage="setMenuData" />
    <detail_end v-on:setNewPage="setMenuData" />

  </div>
</template>

<script>



import header_menu from "@/components/header_menu/header_menu";
import main_page from "@/components/main_screen/main_page";
import detail_head from "@/components/main_screen/detail_head";
import detail_middle from "@/components/main_screen/detail_middle";
import detail_end from "@/components/main_screen/detail_end";


export default {
  props: ["menu_list", "test_data", "state", "showbrain", "scroll"],
  components: {
    header_menu,
    main_page,
    detail_head,
    detail_middle,
    detail_end,


  },
  methods: {
    setTestAnswer(number, id) {
      this.$emit("setTestAnswer", number, id);
    },
    setMenuData(id) {
      if (this.state) this.$emit("setMenuData", id, this.windowTop, 1)
      else
        this.$emit("setMenuData", id, this.windowTop, 0);
    },
    modalMenuShow() {
      this.$emit("setModalActive");
    },
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;//window.top.scrollY

    },
  },
  mounted() {

    window.addEventListener("scroll", this.onScroll);

    const toY = ((568 > window.innerHeight) ? 568 : window.innerHeight) * 444 / 568;

    if (this.state)
      window.scrollTo(0, toY)
    else
      window.scrollTo(0, this.windowTop);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll)
  },
  data() {
    return {
      /* scale: 1.17,*/
      windowTop: this.scroll,
    };
  },
};
</script>
