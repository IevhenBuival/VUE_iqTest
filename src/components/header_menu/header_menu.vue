<template>
  <header_title
    v-for="item of menu_list"
    :key="item.id"
    v-bind:itemtext="item"
  />
</template>

<script>
import header_title from "@/components/header_menu/menu_item/header_title";
export default {
  props: ["menu_list"],
  components: {
    header_title,
  },
};
</script>
