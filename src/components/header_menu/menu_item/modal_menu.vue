<template>
  <div class="modalWrapper" v-on:click="menuClick(lastpage)">
    <div v-on:dblclick="menuClick(lastpage)">
      <img class="icon" src="@/pics/icon.png" alt="" />
    </div>
    <div
      v-for="item of menu_list"
      :key="item.id"
      class="menuBlock"
      v-on:click="menuClick(item.id)"
    >
      <h2
        v-if="item.visible"
        :class="[lastpage === item.id ? 'active' : '', 'text']"
      >
        {{ item.title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["menu_list", "lastpage"],
  methods: {
    menuClick: function (id) {
      this.$emit("setMenuData", id);
    },
  },
};
</script>

<style scoped>
.modalWrapper {
  display: block;
  position: fixed;
  margin: 0;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /*transition: opacity 0.3s ease;*/

  background: #181818;
}
.menuBlock {
  position: relative;
  top: calc(var(--app-height) * 100 / 568);

  padding-left: calc(var(--app-height) * 23 / 568);
  margin-bottom: calc(var(--app-height) * 27 / 568);
  color: #ffffff;
}
.text {
  display: block;
  position: relative;

  height: calc(var(--app-height) * 19 / 568);
  text-align: left;
  font-style: normal;
  font-weight: 300;
  font-size: calc(var(--app-height) * 16 / 568);
  line-height: calc(var(--app-height) * 22 / 568);
  /* or 138% */
  text-transform: uppercase;
}
.active {
  color: #f4ce0c;
}
.icon {
  position: absolute;
  left: 87.19%;
  right: 4.06%;
  top: 3.16%;
  bottom: 91.92%;
}
</style>
