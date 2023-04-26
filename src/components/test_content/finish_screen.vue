<template>
  <div class="container">

    <header_menu v-bind:menu_list="menu_list" v-bind:showbrain="showbrain" v-on:setNewPage="setMenuData"
      v-on:modalMenuShow="modalMenuShow" />


    <div class="Wrapper">
      <hat_contant />
      <div class="leftLightning">
        <img class="LightnungImg1" src="@/pics/lightning.png" alt="" />
      </div>
      <div class="rightLightning">
        <img class="LightnungImg1" src="@/pics/lightning.png" alt="" />
      </div>



    </div>
  </div>
</template>

<script>
import header_menu from "@/components/header_menu/header_menu"
import hat_contant from "@/components/test_content/finish_item/hat_contant"
export default {
  props: ["menu_list", "showbrain"],
  components: {
    header_menu,
    hat_contant,
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
  display: block;
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

}

.test {
  display: inline-block;
}

.container {


  position: relative;

  bottom: 0px;
  width: 100%;
  /*max-height: calc(var(--app-height, 100vh) * 672 / 568);**/
  height: max(calc(var(--app-height, 100vh) * 672 / 568), 100vh);



  z-index: 0;







  background: url("~@/pics/rain_bk2.png") no-repeat top center;
  background-size: 100% 100%;




}

.fontSize0 {
  font-size: 0;
  width: 300px;
  max-width: 25%;
  border: 5px solid red;

  background: yellow;
  display: inline-block;
  text-align: left;
  vertical-align: top;

}

.fontSize0::after {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;

}

.rightLightning {
  display: inline-block;
  position: absolute;
  line-height: 0;

  font-size: 0;
  right: 0px;

  top: calc(var(--app-height, 100vh) *448 / 568);
  z-index: 2;
  text-align: center;
  vertical-align: top;
  width: calc(var(--app-height, 100vh) * 165 / 568);
  max-width: 100%;
  height: calc(var(--app-height, 100vh) * 165 / 568);
  transform: translate(100%, 0) rotate(53.15deg);

}

.LightnungImg {
  max-width: 100%;
}

.leftLightning {
  display: inline-block;
  line-height: 0;
  position: absolute;
  vertical-align: top;
  left: 0;

  font-size: 0;
  z-index: 2;
  width: calc(var(--app-height, 100vh) * 165 / 568);
  max-width: 25%;
  height: calc(var(--app-height, 100vh) * 165 / 568);
  text-align: center;
  transform: translate(-50%, 0) rotate(-53.15deg);
  top: calc(var(--app-height, 100vh) * 402 / 568);

}

.picture {
  width: 29px;
  height: 29px;
}
</style>
