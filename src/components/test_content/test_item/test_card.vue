<template>
  <div class="test_card">
    <progress_bar v-bind:tests_count="tests_count" v-bind:current="test_data.number" />
    <div class="test_card__wrapper">
      <div :class="[test_data.view === 1 ? 'text_card__title' : 'text_card__title_v2', '']">
        <h1 class="text_card__title_font">
          {{ $filters.firstSymbolToUpperCase(test_data.title) }}
        </h1>
        <div v-if="picture" class="test_card__img">
 
         <img v-if="test_data.picture==='test.png'" src="@/pics/test.png" alt="">
         <img v-if="test_data.picture==='star.png'" src="@/pics/star.png" alt="">
         <img v-if="test_data.picture==='people.png'" src="@/pics/people.png" alt="">
      
        </div>

      </div>
      <div v-if="test_data.view === 1" class="test_card__rows">
        <test_item v-for="variant of test_data.data" :key="variant.id" v-bind:variant="variant"
          v-on:selectAnswer="selectTestAnswer" />
      </div>
      <div v-else-if="test_data.view === 2" class="test_card__grid">
        <test_recangle v-for="variant of test_data.data" :key="variant.id" v-bind:variant="variant"
          v-on:selectAnswer="selectTestAnswer" />
      </div>
      <div v-else class="test_card__columns">
        <rectangle_item v-for="variant of test_data.data" :key="variant.id" v-bind:variant="variant"
          v-on:selectAnswer="selectTestAnswer" />
      </div>
    </div>
    <div class="test_card_button">
      <button_item v-bind:title="'далее'" v-bind:color="next" v-on:goTest="nextTestClick" />
    </div>


  </div>
</template>

<script>
import test_item from "@/components/test_content/test_item/test_item";
import progress_bar from "@/components/test_content/test_item/progress_bar";
import button_item from "@/components/button_item/button_item";
import test_recangle from "@/components/test_content/test_item/test_rectangle";
import rectangle_item from "@/components/test_content/test_item/rectangle_item";



export default {
  props: ["test_data", "tests_count"],
  components: {
    test_item,
    progress_bar,
    button_item,
    test_recangle,
    rectangle_item,

  },


  computed: {
    next() {
      const active = this.test_data.data.filter((el) => el.checked);
      return active.length === 0 ? false : true;
    },
    loader() {
      return (this.test_data.view === 4) ? true : false;
    },
    picture() {
      if (this.test_data.picture === "") return false;
      return true;
    },
   
    fintest() {
      return this.test_data.number === (this.tests_count - 1) ? true : false;
    }
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
.test_card {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 100%;
  margin: 0;


  overflow: hidden;

}

.test_card__wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  min-width: 100%;

  flex: 1 1 auto;
  height: 70%;
}

.test_card__img {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: stretch;
  align-self: stretch;
  flex: 2 1 auto;
  /* image */
  flex-direction: column;




  min-width: calc(var(--app-width, 100vh) * 173 / 320);
  min-height: calc(var(--app-height, 100vh) * 115 / 568);
}

.test_card__img img {
  margin-top: 5%;
  margin-bottom: 5%;

  object-fit: cover;
  flex: 1 1 95%;

}



.text_card__title {
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

.text_card__title_v2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: end;
  overflow: hidden;
  min-height: 20%;
  /* margin-bottom: calc(var(--app-height, 100vh) * 40 / 568);*/
  flex: 2 1 auto;
}


.text_card__title_font {
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



.test_card__rows {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  gap: calc(var(--app-height, 100vh) * 10 / 568);
  /*19-*/
  overflow: hidden;

  flex: 3 1 auto;
}

.test_card__columns {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  gap: calc(var(--app-height, 100vh) * 10 / 568);
  /*19-*/
  overflow: hidden;

  flex: 1 1 auto;
}

@media (min-width:767px) {
  .test_card__columns {
    max-width: 50%;
    margin: 0 auto;
    flex: 1 1 auto;

  }

}

@media (min-width:1020px) {
  .test_card__columns {
    max-width: 30%;
    margin: 0 auto;
    flex: 1 1 auto;

  }

}

.test_card__grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-self: center;
  gap: 10px;
  gap: calc(var(--app-height, 100vh) * 10 / 568);


}

.test_card_button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  margin-bottom: calc(var(--app-height, 100vh) * 25 / 568);
  margin-top: calc(var(--app-height, 100vh) * 20 / 568);
}
</style>
