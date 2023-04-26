<template>
  <div class="logo__container" @:click="logoClick">
    <img class="logo__img" src="@/pics/logo.png" alt="" />
    <div class="logo__title">
      <p class="logo__title_text">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { title: String },
  methods: {
    logoClick: function () {
      this.$emit("modalShow");
    },
  },
};
</script>

<style scoped>
.logo__container {
  /* rain_bk3 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: row;
  align-items: center;


  max-height: calc(var(--app-height) * 46 / 568);

}

.logo__img {
  flex-grow: 1;
  flex-shrink: 2;
  flex-basis: calc(var(--app-height) * 46 / 568);
  max-height: calc(var(--app-height) * 46 / 568);
}

.logo__title {
  display: flex;
  justify-content: center;
  flex-grow: 4;
  flex-shrink: 1;
  min-height: 46px;
  height: calc(var(--app-height) * 46 / 568);
}

.logo__title_text {
  margin: auto 10px;
  font-family: "Yeseva One";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height) * 12 / 568);
  line-height: calc(var(--app-height) * 14 / 568);
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #ffc700;
}
</style>
