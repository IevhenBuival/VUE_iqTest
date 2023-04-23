<template>
  <div>
    <header_menu v-bind:menu_list="menu_list" v-bind:showbrain="showbrain" v-on:setNewPage="setMenuData"
      v-on:modalMenuShow="modalMenuShow" />
    <finish_page />

  </div>
</template>

<script>
import header_menu from "@/components/header_menu/header_menu"
import finish_page from "@/components/test_content/finish_item/finish_page"
export default {
  props: ["menu_list", "showbrain"],
  components: {
    header_menu,
    finish_page,
  }, methods: {
    setMenuData: function (id) {
      this.$emit("setMenuData", id);
    },
    modalMenuShow: function () {
      this.$emit("setMenuData", 3);
    },
    fetchResult() {
      if (this.fintest) {
        this.loading = true;
        fetch('https://swapi.dev/api/films/1/')
          .then(response => response.json())
          .then(json => {
            this.finishtext = json;
          })
          .catch(error => console.log(error));
      }
    },
  },
}
</script>

<style scoped>
.full {
  background-color: aqua;
}

.wrapper {
  display: flex;
}

.container {
  display: flex;
  flex-direction: column;
  position: absolute;

  flex: 1 1 auto;
  width: 100%;
  max-height: calc(var(--app-height, 100vh) * 672 / 568);
  height: calc(var(--app-height, 100vh) * 672 / 568);
  min-height: 672px;

  top: 0px;
  left: 0px;
  right: 0px;
  bottom: -150px;

  z-index: 0;







  background: url("~@/pics/rain_bk2.png") no-repeat top center;
  background-size: 100% 100%;




}

.rightLightning {
  position: absolute;



  width: calc(var(--app-height, 100vh) * 174 / 568);
  height: calc(var(--app-height, 100vh) * 174 / 568);
  right: -75px;
  bottom: 100px;
  z-index: 1;


  background: url(~@/pics/lightning.png) no-repeat;
  background-size: 100% 100%;
  /* lightning_PNG9 */





  transform: rotate(53.15deg);

}

.leftLightning {
  position: absolute;

  transform: translate(-50%, 0) rotate(-53.15deg);

  top: calc(var(--app-height, 100vh) * 402 / 568);
  left: 0;

  width: calc(var(--app-height, 100vh) * 165 / 568);
  height: calc(var(--app-height, 100vh) * 165 / 568);

  z-index: 1;



  background: url(~@/pics/lightning.png) no-repeat;

  background-size: 100% 100%;
}

.picture {
  width: 29px;
  height: 29px;
}
</style>
