<template>
  <div class="container columnBlock">
    <div class="headBlock columnBlock">
      <h3 class="white">Пройдите точный и быстрый</h3>

      <div class="columnBlock">
        <div class="subBlock">
          <h1>тест на</h1>
        </div>
        <div class="subBlock"><h1>определение IQ</h1></div>
      </div>
    </div>
    <div class="footerBlock columnBlock">
      <div>
        <button_item
          v-bind:color="true"
          v-bind:title="'Пройти тест'"
          v-on:goTest="goTestMenu"
        />
      </div>
      <div class="textblock columnBlock">
        <p class="yellow">
          И получите рекомендации по развитию своего интеллекта
        </p>
        <p class="white">
          и улучшению финансового благосостояния и личной жизни
        </p>
      </div>
      <div class="clickArea" @:click="setMenuData">
        <div class="circle">
          <img class="brain" src="@/pics/arrow.png" alt="" />
        </div>
        <div class="detail">Подробнее</div>
      </div>
    </div>
  </div>
</template>

<script>
import button_item from "@/components/button_item/button_item";
export default {
  components: {
    button_item,
  },
  methods: {
    setMenuData() {
      this.$emit("setNewPage", 1);
    },
    goTestMenu() {
      this.$emit("setNewPage", 2);
    },
  },
};
/* 
    <div class="block"></div>
    <div class="block">text</div>
    <div class="block">text</div>
    <div class="block">text</div>
    <div class="block"></div>*/
</script>

<style scoped>
.headBlock {
  display: flex;
  height: 50%;

  flex-grow: 0;
  flex-shrink: 1;
  justify-content: space-around;
  align-items: center;
}

.footerBlock {
  display: flex;
  margin: 3%;
  height: 33%;
  justify-content: flex-start;

  flex-grow: 1;
  flex-shrink: 1;
}
.textblock {
  display: flex;
  margin: 5%;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: content;
}
.yellow {
  color: #ffc700;
}
.white {
  color: #ffffff;
}
h1 {
  font-family: "Yeseva One";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height, 100vh) * 29 / 568);
  line-height: calc(var(--app-height, 100vh) * 35 / 568);
  text-align: center;
  text-transform: uppercase;

  color: #ffc700;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.subBlock {
  display: flex;
  flex-wrap: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  height: calc(var(--app-height, 100vh) * 35 / 568);
  transform: translate(0, -25%);
}
.columnBlock {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.container {
  /* rain_bk */
  position: absolute;

  min-height: 647px;
  height: calc(var(--app-height, 100vh) * 647 / 568);
  margin-bottom: 30%;
  top: calc(var(--app-height, 100vh) * 46 / 568);
  left: 0;
  right: 0;
  width: 100%;
  max-width: calc(var(--app-width), 100vw);
  /*min-width: 517px;*/
  /*max-width: 100%;*/

  background: url("~@/pics/rain_bk.png") no-repeat;
  background-size: 100% 100%;
  /*background-size: 100vh;*/
}
.block {
  display: flex;
  flex-basis: 15%;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
}
p {
  margin: 0;

  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
}

h3 {
  margin: 0;
  transform: translate(0, 25%);

  height: calc(var(--app-height, 100vh) * 52 / 568);

  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height, 100vh) * 18 / 568);
  line-height: calc(var(--app-height, 100vh) * 24 / 568);
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* подробнее */

.detail {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height, 100vh) * 8 / 568);
  line-height: calc(var(--app-height, 100vh) * 11 / 568);
  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
}
.circle {
  /* Ellipse */

  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(var(--app-height, 100vh) * 16 / 568);
  height: calc(var(--app-height, 100vh) * 16 / 568);
  border-radius: 50%;

  background: #ffffff;
}
.clickArea {
  display: flex;
  margin-bottom: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
}
</style>
