<template>
  <div class="container">
    <progress_bar v-bind:tests_count="tests_count" v-bind:current="1" />
    <div class="test">
      <div class="title">
        <h1>
          {{ test_data.title }}
        </h1>
        <div v-if="false" class="img">
          <img src="@/pics/test01.png" alt="" />
        </div>
      </div>
      <div v-if="test_data.view === 1" class="testItem">
        <test_item
          v-for="variant of test_data.data"
          :key="variant.id + 1000"
          v-bind:variant="variant"
          v-on:selectAnswer="selectTestAnswer"
        />
      </div>
    </div>
    <div v-if="test_data.view !== 4" class="buttonWrapper">
      <button_item
        v-bind:title="'далее'"
        v-bind:color="next"
        v-on:goTest="nextTestClick"
      />
    </div>
  </div>
</template>

<script>
import test_item from "@/components/test_content/test_item/test_item";
import progress_bar from "@/components/test_content/test_item/progress_bar";
import button_item from "@/components/button_item/button_item";

export default {
  props: ["test_data", "tests_count"],
  components: {
    test_item,
    progress_bar,
    button_item,
  },
  computed: {
    next() {
      const active = this.test_data.data.filter((el) => el.checked);
      return active.length === 0 ? false : true;
    },
  },

  methods: {
    selectTestAnswer: function (id) {
      this.$emit("selectTestAnswer", this.test_data.number, id);
    },
    nextTestClick: function () {
      this.$emit("nextTest", this.test_data.number);
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
  width: 100%;

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
  align-items: center;
  text-align: end;
  overflow: hidden;
  min-height: 20%;
  /* margin-bottom: calc(var(--app-height, 100vh) * 40 / 568);*/
  flex: 2 1 auto;
}

.testItem {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
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
  margin-top: calc(var(--app-height, 100vh) * 20 / 568);
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
  margin: 0;
  flex-wrap: 1;
}
</style>
