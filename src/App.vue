<template>
  <div id="app">
    <main_screen v-if="pages.pagedata[0].active" class="MAIN_DIV" v-bind:menu_list="menu" v-bind:test_data="test"
      v-on:setTestAnswer="changeTestData" v-on:setMenuData="changeMenuData" v-bind:state="false"
      v-bind:showbrain="pages.showbrain" />
    <main_screen v-else-if="pages.pagedata[1].active" class="MAIN_DIV" v-bind:menu_list="menu" v-bind:test_data="test"
      v-on:setMenuData="changeMenuData" v-bind:state="true" v-bind:showbrain="pages.showbrain" />
    <modal_menu v-else-if="pages.pagedata[3].active" v-bind:menu_list="menu" v-bind:lastpage="pages.lastpage"
      v-on:setMenuData="changeMenuData" />

    <test_screen v-else-if="pages.pagedata[2].active" v-bind:menu_list="menu" v-bind:test_data="test"
      v-bind:showbrain="pages.showbrain" v-on:setMenuData="changeMenuData" v-on:setTestDate="changeTestData"
      v-on:setTestNumber="changeCurrentTest" />

    <finish_screen v-else v-bind:menu_list="menu" v-bind:showbrain="pages.showbrain" v-on:setMenuData="changeMenuData" />
  </div>
</template>

<script>
import main_screen from "@/components/main_screen/main_screen";
import modal_menu from "@/components/header_menu/menu_item/modal_menu";
import test_screen from "@/components/test_content/test_screen";
import finish_screen from "@/components/test_content/finish_screen";

const appHeightWidth = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `max(568px,${window.innerHeight}px)`);
  doc.style.setProperty("--app-width", `minmax(${window.innerWidth}px,100vw)`);

};
window.addEventListener("resize", appHeightWidth);
ScreenOrientation.onchange = appHeightWidth;
//appHeightWidth();

const main_menu = [
  { id: 0, title: "Главная", page: 0, active: true, visible: true, header: "тест на определение IQ" },
  { id: 1, title: "Информация о тесте", page: 1, active: false, visible: true, header: "тест на определение IQ" },
  { id: 2, title: "Пройти тест", page: 2, active: false, visible: true, header: "тест на определение IQ" },
  { id: 3, title: "modal menu", page: 3, active: false, visible: false, header: "тест на определение IQ" },
  { id: 4, title: "finish page!", page: 4, active: false, visible: false, header: "готово!" },
];

const page_manager = {
  lastpage: 0,
  showbrain: false,
  pagedata: [
    { id: 0, name: "main", active: true },
    { id: 1, name: "full", active: false },
    { id: 2, name: "test", active: false },
    { id: 3, name: "modal", active: false },
    { id: 4, name: "finish", active: false },
  ],
};

let tests_data = {
  current: 0,
  tests: [
    {
      number: 0,
      view: 1,
      title: "ваш пол:",
      picture: "",
      data: [
        { id: 0, text: "мужчина", checked: false },
        { id: 1, text: "женщина", checked: false },
      ],
    },
    {
      number: 1,
      view: 1,
      title: "Вам привычнее и важнее:",
      picture: "",
      data: [
        {
          id: 0,
          text: "Наслаждаться каждой минутой проведенного времени",
          checked: false,
        },
        { id: 1, text: "Быть устремленными мыслями в будущее", checked: false },
        {
          id: 1,
          text: "Учитывать в ежедневной практике прошлый опыт",
          checked: false,
        },
      ],
    },
    {
      number: 2,
      view: 4,
      title: "Обработка результатов",
      picture: "loader.png",
      data: [
        {
          id: 0,
          text: "Определение стиля мышления............... ...................................................",
          checked: true,
        },
      ],

    },
  ],
};

let result_data = {
  finish: false,
  loading: false,
  error: false,
  response: undefined,
  errortext: undefined
};

//set false all property in array of obgect  and set true just one of them by id
const ValueSelector = (array, id, property) => {
  const initstate = array[id][property];

  for (let i = 0; i < array.length; i++) {
    array[i][property] = false;
  }

  array[id][property] = !initstate;
};

export default {
  name: "App",
  data() {
    return {
      menu: main_menu,
      test: tests_data,
      pages: page_manager,
      result: result_data,
      refresh: 0,


    };
  },
  created() {
    appHeightWidth();
    this.refresh = this.refresh + 1;
  },
  components: {
    main_screen,
    modal_menu,
    test_screen,
    finish_screen,
  },
  methods: {
    changeTestData(number, id) {
      ValueSelector(this.test.tests[number].data, id, "checked");
    },
    changeCurrentTest(number) {
      const checked = this.test.tests[number].data.filter(
        (el) => el.checked === true
      );

      if (checked.length === 1) this.test.current = this.test.current + 1;
      if (this.test.current === (this.test.tests.length - 1)) {

        //  this.result.loading = true;
        //  setTimeout(() => {
        this.changeMenuData(4);
        this.result.finish = true;
        //}, 5000);
        // this.result.loading = false;

      }


    },
    changeMenuData(id) {

      //prevent menu event on loading
      // if (this.test.current === (this.test.tests.length - 1)) return;
      //redirect on finish page from test page
      if ((id === 2) && (this.result.finish)) id = 4;
      ValueSelector(this.menu, id, "active");

      this.pages.showbrain = ((id === 2) || (id === 4)) ? true : false;
      if (this.pages.pagedata[this.menu[id].page].active === false) {
        this.pages.lastpage = this.pages.pagedata.find(
          (el) => el.active === true
        ).id;
        ValueSelector(this.pages.pagedata, this.menu[id].page, "active");
      }

    },
  },
};

</script>

<style>
:root {
  --app-height: 100%;
  --app-width: 100%;
}

#app {
  font-family: "Roboto", sans-serif;
  font-size: 1em+1vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /* width: var(--app-width, 100vw);*/
}

html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: var(--app-width, 100vw);
}

.MAIN_DIV {
  background: #272727;
  /* width: var(--app-width, 100vw);*/
  /* height: 300vh;*/
}

@media screen and (max-width: 400px) {
  .MAIN_DIV {
    background: #272727;
    /*  width: var(--app-width);*/
  }
}
</style>
