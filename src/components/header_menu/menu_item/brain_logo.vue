<template>
  <div class="logoContainer" @:click="logoClick">
    <img class="brain" src="@/pics/rain_bk3.png" alt="" />
    <div class="header">
      <p class="text">тест на определение IQ</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logoClick: function () {
      this.$emit("modalShow");
    },
  },
};
</script>

<style scoped>
.logoContainer {
  /* rain_bk3 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: row;
  align-items: center;
  gap: 10px;

  /* max-width: calc(
      var(--app-width, 100vw)- (var(--app-height, 100vh) * 24 / 568)
    );*/
  max-height: calc(var(--app-height) * 46 / 568);

  z-index: 2;
}
.brain {
  flex-grow: 1;
  flex-shrink: 2;
  flex-basis: calc(var(--app-height) * 46 / 568);
  max-height: calc(var(--app-height) * 46 / 568);
}
.header {
  flex-grow: 4;
  flex-shrink: 1;

  max-height: calc(var(--app-height) * 46 / 568);
}
.text {
  font-family: "Yeseva One";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height) * 12 / 568);
  line-height: calc(var(--app-height) * 14 / 568);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: auto;
  color: #ffc700;
}
.header1 {
  display: flex;
  /* тест на определение IQ */
  font-family: "Yeseva One";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height) * 12 / 568);
  line-height: calc(var(--app-height) * 14 / 568);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0 10%;
  color: #ffc700;
  max-width: 50%;
  max-height: 147px;
  width: calc(var(--app-height) * 192 / 568);
  height: calc(var(--app-height) * 46 / 568);
  text-justify: center;
  text-align: center;
}
</style>
