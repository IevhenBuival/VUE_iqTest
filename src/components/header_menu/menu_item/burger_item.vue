<template>
  <div class="burger" @:click="burgerClick">
    <span>

    </span>
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
  display: block;
  position: relative;

  height: calc(var(--app-height, 100vh) * 20 / 568);
  cursor: pointer;


  min-width: 24px;
  width: 50%;
  padding: 0 calc(var(--app-height, 100vh) * 16 / 568);

  position: relative;
  z-index: 5;

}


.burger span {
  position: absolute;
  background-color: #696969;
  left: 0;
  width: 100%;
  min-height: 3px;
  height: calc(var(--app-height, 100vh) * 2.67 / 568);
  top: 50%;
  transform: translate(0, -50%);


}



.burger::before,
.burger::after {
  content: '';
  background-color: #696969;
  position: absolute;
  width: 100%;
  min-height: 3px;
  height: calc(var(--app-height, 100vh) * 2.67 / 568);

  left: 0;

}

.burger::before {
  top: 0;
}

.burger::after {
  bottom: 0;
}
</style>
