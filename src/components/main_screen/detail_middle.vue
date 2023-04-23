<template>
  <div class="container">
    <div class="textblock">
      <p>
        Также по результатам теста <span>вы получите</span> подробные
        <span>советы</span> по определению наиболее перспективной
        <span>для вашего типа</span> <strong>интеллекта</strong>
        <span> сферы деятельности</span>, которая принесет вам скорейший
        финансовый результат.
      </p>
    </div>
    <div class="imgblock">
      <img src="@/pics/325-01.png" alt="" />
    </div>
    <div class="btnblock">
      <button_item v-bind:title="'Пройти тест'" v-bind:color="true" v-on:goTest="goTestMenu" />
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
    goTestMenu() {
      this.$emit("setNewPage", 2);
    },
  },
};
</script>
<style scoped>
span {
  font-weight: bold;
  text-transform: uppercase;
}

.container {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  top: calc(var(--app-height, 100vh) * 907 / 568);
  max-width: calc(var(--app-width, 100vw), 100vw);
  /* min-width: 517px;*/
  width: 100%;
  min-height: 511px;
  max-height: calc(var(--app-height, 100vh) * 511 / 568);

  height: calc(var(--app-height, 100vh) * 511 / 568);
  background: #f3f3f2;
}

.textblock {
  margin: calc(var(--app-height, 100vh) * 16 / 568) 15%;
  /* Также по результатам теста вы получите подробные советы по определению наиболее перспективной для вашего типа интеллекта сферы деятельности, которая принесет вам скорейший финансовый результат. */

  max-height: calc(var(--app-height, 100vh) * 180 / 568);
  max-width: calc(var(--app-width, 100vw) * 250 / 320);
  text-align: left;
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height, 100vh) * 16 / 568);
  line-height: calc(var(--app-height, 100vh) * 24 / 568);
  /* or 150% */
  letter-spacing: 0.05em;

  color: #272727;
  z-index: 2;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}

.imgblock {
  display: flex;

  align-items: end;
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 0%;
  z-index: 1;
  height: calc(var(--app-height, 100vh) * 200 / 568);
}

.btnblock {
  display: flex;
  justify-content: center;
  flex-grow: 0;
  width: 100%;
  margin-bottom: calc(var(--app-height, 100vh) * 16 / 568);
}
</style>
