<template>
  <div class="navbar">
    <div class="burger-brain">
      <burger_item v-on:modalShow="modalShow" />
      <brain_logo v-if="showbrain" />
    </div>
    <div class="menu">
      <div></div>
      <header_title
        v-for="item of menu_list"
        :key="item.id"
        v-bind:itemtext="item"
        v-on:menuSelect="menuSelect"
      />
    </div>
  </div>
</template>

<script>
import header_title from "@/components/header_menu/menu_item/header_title";
import burger_item from "@/components/header_menu/menu_item/burger_item";
import brain_logo from "@/components/header_menu/menu_item/brain_logo";
export default {
  props: ["menu_list", "showbrain"],
  components: {
    header_title,
    burger_item,
    brain_logo,
  },

  methods: {
    menuSelect: function (id) {
      this.$emit("setNewPage", id);
    },
    modalShow: function () {
      this.$emit("setNewPage", 3);
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: row;
  align-items: center;
  max-width: calc(var(--app-width), 100vw);
  width: 100%;

  height: calc(var(--app-height, 100vh) * 46 / 568);
  top: 0;
  right: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: #181818;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.menu {
  display: flex;
  flex-direction: row;
  flex-flow: row;
  justify-content: flex-end;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 30%;
}
.burger-brain {
  display: flex;
  flex-direction: row;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 30%;
}
@media (max-width: 480px) {
  .menu {
    display: none;
  }
}
</style>
