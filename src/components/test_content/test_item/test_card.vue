<template>
  <div class="container">
    <progress_bar
      v-bind:tests_count="card_data.tests.length"
      v-bind:current="card_data.tests[card_data.current].number"
    />
    <div class="test">
      <div class="title">
        <h1>
          Какое определение, по-Вашему, больше подходит к этому геометрическому
          изображению:
        </h1>
      </div>
      <div><img src="@/pics/test01.png" alt="" /></div>
      <div class="test_item">
        <test_item
          v-for="variant of card_data.tests[card_data.current].data"
          :key="variant.id"
          v-bind:variant="variant"
          v-on:selectAnswer="selectTestAnswer"
        />
      </div>
    </div>
    <div class="buttonWrapper">
      <button_item v-bind:title="'далее'" v-bind:color="false" />
    </div>
  </div>
</template>

<script>
import test_item from "@/components/test_content/test_item/test_item";
import progress_bar from "@/components/test_content/test_item/progress_bar";
import button_item from "@/components/button_item/button_item";

export default {
  props: ["card_data"],
  components: {
    test_item,
    progress_bar,
    button_item,
  },

  methods: {
    selectTestAnswer: function (id) {
      this.$emit("selectTestAnswer", this.card_data.number, id);
    },
  },
};
</script>

<style scoped>
.test {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin: auto auto;

  flex: 1 1 auto;
  height: 70%;
}
h1 {
  /* Выберите лишнее: */
  flex: 1 1 auto;
  min-height: calc(var(--app-height, 100vh) * 40 / 568);

  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height, 100vh) * 20 / 568);
  line-height: calc(var(--app-height, 100vh) * 26 / 568);
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #ffffff;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  height: 50%;
  /* margin-bottom: calc(var(--app-height, 100vh) * 40 / 568);*/
  flex: 2 1 auto;
  background-color: aquamarine;
}

.test_item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  overflow: hidden;

  flex: 3 1 auto;
}
.buttonWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  margin-bottom: calc(var(--app-height, 100vh) * 25 / 568);
  margin-top: calc(var(--app-height, 100vh) * 30 / 568);
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
  margin: 0 auto;
  flex-wrap: 1;
}
</style>
