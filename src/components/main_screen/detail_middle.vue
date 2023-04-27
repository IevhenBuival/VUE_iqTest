<template>
  <div class="datail_middle">
    <div class="datail_midle__container">

      <div class="datail_middle__text_block">
        <div class="datail_middle__text">
          <p>
            Также по результатам теста <span>вы получите</span> подробные
            <span>советы</span> по определению наиболее перспективной
            <span>для вашего типа</span> <strong>интеллекта</strong>
            <span> сферы деятельности</span>, которая принесет вам скорейший
            финансовый результат.
          </p>
        </div>
        <div class="datail_middle__img_block">
          <img src="@/pics/325-01.png" alt="" />
        </div>
      </div>


      <div class="datail_midle__button">
        <button_item v-bind:title="'Пройти тест'" v-bind:color="true" v-on:goTest="goTestMenu" />
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

.datail_middle__text {
  flex: 1 1 50%;
  margin: calc(var(--app-height, 100vh) * 38 / 568) 11px;
  /* Также по результатам теста вы получите подробные советы по определению наиболее перспективной для вашего типа интеллекта сферы деятельности, которая принесет вам скорейший финансовый результат. */

  max-height: calc(var(--app-height, 100vh) * 298 / 568);
  max-width: calc(var(--app-width, 100vw) * 180 / 320);
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

.datail_middle {
  position: absolute;

  align-items: center;
  justify-content: flex-start;

  top: calc(var(--app-height, 100vh) * 783 / 568);
  left: 0;
  right: 0;
  max-width: calc(var(--app-width, 100vw), 100vw);
  /* min-width: 517px;*/
  width: 100%;
  min-height: 511px;
  max-height: calc(var(--app-height, 100vh) * 511 / 568);

  height: calc(var(--app-height, 100vh) * 511 / 568);
  background: #f3f3f2;

}

.datail_midle__container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: calc(var(--app-height, 100vh) * 471 / 568);

}

.datail_middle__text_block {
  display: flex;
  flex: 1 0 auto;
  margin: 0 0;
  max-width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-end;
}



.datail_middle__img_block {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  justify-self: center;
  align-self: flex-end;
  z-index: 1;
  max-height: calc(var(--app-height, 100vh) * 264 / 568);
  min-height: calc(var(--app-height, 100vh) * 132 / 568);
  max-width: 56%;

}

@media (min-width: 767px) {
  .datail_middle__img_block {
    min-width: 75%;
  }
}

img {
  object-fit: contain;
}

.datail_midle__button {
  display: flex;
  justify-content: center;
  flex-grow: 0;
  width: 100%;
  margin-bottom: calc(var(--app-height, 100vh) * 16 / 568);
}
</style>
