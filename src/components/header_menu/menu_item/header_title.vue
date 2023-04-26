<template>
  <div v-if="itemtext.visible" class="menu__item" :class="{ active: itemtext.active }" @:click="menuClick(itemtext.id)">
    <p>{{ itemtext.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    itemtext: {
      type: Object,
      required: true,
    },
  },
  methods: {
    menuClick: function (id) {
      if (this.itemtext.active !== true) {
        this.$emit("menuSelect", id);
      }
    },
  },
};
</script>
<style scoped>
p {
  margin: auto;
}

.menu__item {
  display: flex;

  flex-grow: 3;
  flex-shrink: 2;
  flex-basis: 33%;
  /* тест на определение IQ */


  font-family: 'Yeseva One';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.05em;



  color: #fff;
  background: #181818;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.active {
  color: #f4ce0c;
}
</style>
