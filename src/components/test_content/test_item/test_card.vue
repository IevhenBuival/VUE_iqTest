<template>
  <div class="container">
    <progress_bar v-bind:tests_count="tests_count" v-bind:current="1" />
    <div>{{ test_data }}</div>
    <div class="buttonWrapper">
      <button_item v-bind:title="'далее'" v-bind:color="false" />
    </div>
  </div>
  <!-- <div class="container">
    <progress_bar
      v-bind:tests_count="tests_count"
      v-bind:current="test_data.number"
    />
    <div class="test">
      <div class="title">
        <h1>
          Какое определение, по-Вашему, больше подходит к этому геометрическому
          изображению:
        </h1>
      </div>
      <div class="img"><img src="@/pics/test01.png" alt="" /></div>
       <div class="test_item">
        <test_item
          v-for="variant of test_data.data"
          :key="variant.id"
          v-bind:variant="variant"
          v-on:selectAnswer="selectTestAnswer"
        />
      </div>
    </div>
    
  </div>
--></template>

<script>
//import test_item from "@/components/test_content/test_item/test_item";
import progress_bar from "@/components/test_content/test_item/progress_bar";
import button_item from "@/components/button_item/button_item";

export default {
  props: ["test_data", "tests_count"],
  components: {
    // test_item,
    progress_bar,
    button_item,
  },
  mounted() {
    console.log(this.test_data);
  },
  methods: {
    selectTestAnswer: function (id) {
      console.log(this.test_data);
      this.$emit("selectTestAnswer", 1, id);
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
.img {
  flex: 2 1 auto;
  /* image */

  min-width: calc(var(--app-width, 100vh) * 173 / 320);
  min-height: calc(var(--app-height, 100vh) * 115 / 568);
}
h1 {
  min-height: calc(var(--app-height, 100vh) * 40 / 568);

  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height, 100vh) * 19 / 568);
  line-height: calc(var(--app-height, 100vh) * 25 / 568);
  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: end;
  overflow: hidden;
  min-height: 20%;
  /* margin-bottom: calc(var(--app-height, 100vh) * 40 / 568);*/
  flex: 2 1 auto;
}

.test_item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: calc(var(--app-height, 100vh) * 10 / 568); /*19-*/
  overflow: hidden;

  flex: 3 1 auto;
}
.buttonWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  margin-bottom: calc(var(--app-height, 100vh) * 25 / 568);
  margin-top: calc(var(--app-height, 100vh) * 25 / 568);
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
