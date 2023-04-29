<template>
  <div class="button__wrapper">
    <div class="button" :class="{ color: color, opacity: opacity }" v-on:click="buttonCallback"
      v-on:dblclick="buttonCallback">
      <p class="button__title" v-on:click="buttonCallback">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["color", "title", "opacity"],
  methods: {
    buttonCallback() {
      this.$emit("goTest");
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
  cursor: pointer;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-width: 200px;
  width: calc(189 * (568px + var(--app-height, 100vh))*320 /568 / 568);

  min-height: 44px;
  height: calc(var(--app-height) * 44 / 568);
  pointer-events: none;

  color: #8e8e8e;
  background: #dadada;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border-radius: calc(var(--app-height) * 20 / 568);
  outline: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.button__wrapper {
  max-width: 100%;
}

.color {
  background: radial-gradient(50% 50% at 50% 50%, #ffc700 0%, #ffc700 100%);
  color: #0d0c11;
  pointer-events: all;
}



.button__title {

  font-family: "Merriweather";
  font-style: normal;
  font-weight: 700;
  font-size: calc(var(--app-height) * 14 / 568);

  /* identical to box height */
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;


}

.opacity {
  background-color: inherit;
  pointer-events: all;
  color: #dadada;
  border: #dadada solid calc(var(--app-height) * 1 / 568);
}
</style>
