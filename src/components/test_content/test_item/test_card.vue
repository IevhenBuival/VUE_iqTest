<template>
  <div>
    <ul>
      <test_item
        v-for="variant of card_data.data"
        :key="variant.id"
        v-bind:variant="variant"
        v-on:selectAnswer="selectTestAnswer"
      />
    </ul>
    <div class="progress_bar" :style="{ width: card_data.view * 10 + 'px' }">
      55
    </div>
  </div>
</template>

<script>
import test_item from "@/components/test_content/test_wraper/test_item";
export default {
  props: ["card_data"],
  components: {
    test_item,
  },
  methods: {
    selectTestAnswer: function (id) {
      this.$emit("selectTestAnswer", this.card_data.number, id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.progress_bar {
  background-color: green;
}
</style>
