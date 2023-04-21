<template>
  <div
    class="button"
    :class="{ color: color, opacity: opacity }"
    v-on:click="buttonCallback"
    v-on:dblclick="buttonCallback"
  >
    <p class="title" v-on:click="buttonCallback">{{ title }}</p>
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

  width: calc(var(--app-width) * 189 / 320);
  max-width: 250px;
  height: calc(var(--app-height) * 41 / 568);
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

.color {
  background: radial-gradient(50% 50% at 50% 50%, #ffc700 0%, #ffc700 100%);
  color: #0d0c11;
  pointer-events: all;
}

/* далее */
.title {
  height: calc(var(--app-height) * 17 / 568);

  font-family: "Merriweather";
  font-style: normal;
  font-weight: 700;
  font-size: calc(var(--app-height) * 14 / 568) 14px;
  line-height: calc(var(--app-height) * 18 / 568);
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  border-radius: calc(var(--app-height) * 20 / 568);
}

.opacity {
  background-color: inherit;
  pointer-events: all;
  color: #dadada;
  border: #dadada solid calc(var(--app-height) * 1 / 568);
}
</style>
