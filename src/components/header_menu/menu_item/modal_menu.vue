<template>
  <div class="menu" v-on:click="menuClick(lastpage)">
    <div v-on:dblclick="menuClick(lastpage)">
      <img class="exit_icon" src="@/pics/icon.png" alt="" />
    </div>
    <div class="container menu__wrapper">
      <div v-for="item of menu_list" :key="item.id" class="menu__block" v-on:click="menuClick(item.id)">
        <h2 v-if="item.visible" :class="[lastpage === item.id ? 'active' : '', 'menu__block_text']">
          {{ item.title }}
        </h2>
      </div>
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
.menu {
  display: block;
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /*transition: opacity 0.3s ease;*/

  background: #181818;
}

.menu__block {
  text-align: left;

  padding-left: calc(var(--app-height) * 23 / 568);
  margin-bottom: calc(var(--app-height) * 27 / 568);
  color: #ffffff;
}

.menu__wrapper {
  margin-top: calc(var(--app-height) * 100 / 568);
}

.menu__block_text {
  display: block;


  width: 60%;
  min-height: 19px;
  height: calc(var(--app-height) * 44 / 568);
  margin: 27px 23px 0 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: calc(var(--app-height) * 16 / 568);
  line-height: calc(var(--app-height) * 22 / 568);
  text-transform: uppercase;





}

.active {
  color: #f4ce0c;
}

.exit_icon {
  position: absolute;
  right: 4.06%;
  top: 3.16%;
}
</style>
