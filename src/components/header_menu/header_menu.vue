<template>
  <header class="header">

    <div class="header__body ">
      <div class="header__burger">
        <burger_item v-on:modalShow="modalShow" />
      </div>
      <div class="header__braintitle">
        <brain_logo v-if="showbrain" v-bind:title="menuTitle" />
      </div>

      <div class="header__menu">

        <header_title v-for="item of menu_list" :key="item.id" v-bind:itemtext="item" v-on:menuSelect="menuSelect" />
      </div>
    </div>

  </header>
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
  computed: {
    menuTitle() {
      const currentmenu = this.menu_list.filter(el => el.active === true);
      if (currentmenu.lenth !== 0) return currentmenu[0].header;
      return "Error";
    },

  },

  methods: {
    menuSelect: function (id) {
      
      this.$emit("setNewPage", id);
    },
    modalShow: function () {
      this.$emit("setNewPage", 3,0,3);
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;

  top: 0;
  left: 0;
  right: 0;
  background: #181818;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  z-index: 50;

}



.header__body {
  position: relative;
  height: calc(var(--app-height, 100vh) * 46 / 568);
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;

}


.header__burger {
  display: flex;
  min-width: 46px;
  min-height: calc(667/568*46px);
  height: calc(100vh * 46 / 568);
  height: calc(var(--app-height, 100vh) * 46 / 568);
  flex: 0 0 15%;


  justify-content: center;
  align-items: center;

}

@media (min-width: 767px) {
  .header__burger {
    flex-basis: 7.5%;
    min-width: 69px;

  }
}

@media (min-width: 1020px) {
  .header__burger {
    display: none;
    flex-basis: 7.5%;
    min-width: 92px;
  }
}

@media (min-width: 1280px) {
  .header__burger {
    display: none;
    flex-basis: 7.5%;
    min-width: 92px;
  }
}

.header__menu {
  display: none;



}

@media (min-width: 1020px) {

  .header__menu {
    display: flex;
    min-width: 640px;
    flex-direction: row;
    flex-flow: row;
    justify-content: space-between;
    flex: 1 1 auto;


  }
}

@media (min-width: 1280px) {

  .header__menu {
    display: flex;
    min-width: 960px;
    flex-direction: row;
    flex-flow: row;
    justify-content: space-between;
    flex: 1 1 auto;


  }
}

.header__logo {
  flex: 1 1 auto;

  overflow: hidden;
  position: relative;

}

.header__braintitle {
  display: flex;
  flex-direction: row;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
}
</style>
