<template>
  <div class="burger" @:click="burgerClick">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  methods: {
    burgerClick: function () {
      this.$emit("modalShow");
    },
  },
};
</script>

<style scoped>
.burger {
  display: none;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(var(--app-height, 100vh) * 24 / 568);
  height: 16px;
  height: calc(var(--app-height, 100vh) * 16 / 568);
  margin: 0 calc(var(--app-height, 100vh) * 17 / 568)
    calc(var(--app-height, 100vh) * 16 / 568);
  background: #181818;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.burger:hover {
  cursor: pointer;
}
.line {
  width: 100%;
  height: 20%;
  margin: 20% 0;
  /* Path */

  /* position: absolute;
  left: 4.69%;
  right: 87.81%;
  top: 0.87%;
  bottom: 98.99%;*/

  background: #dadada;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media (max-width: 480px) {
  .burger {
    display: block;
  }
}
</style>
