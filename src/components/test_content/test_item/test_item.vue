<template>
  <li :class="{ selected: variant.checked }" @:click="checkedClick(variant.id)">
    <span>
      <button class="checkbottom"></button>
      <strong>{{ variant.text }}</strong>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    variant: { type: Object, required: true },
  },
  methods: {
    checkedClick(id) {
      this.$emit("selectAnswer", id);
    },
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
.checkbottom {
  background-color: inherit;
  width: 1rem;
  height: 1rem;
  color: inherit;
  border: 1px solid white;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 1rem;
}
.selected {
  background-color: blue;
}
</style>
