<template>
  <div id="app">
    <main_screen
      v-if="pages.pagedata[0].active"
      class="MAIN_DIV"
      v-bind:menu_list="menu"
      v-bind:test_data="test"
      v-on:setTestAnswer="changeTestData"
      v-on:setMenuData="changeMenuData"
      v-bind:state="false"
      v-bind:showbrain="pages.showbrain"
    />
    <main_screen
      v-else-if="pages.pagedata[1].active"
      class="MAIN_DIV"
      v-bind:menu_list="menu"
      v-bind:test_data="test"
      v-on:setTestAnswer="changeTestData"
      v-on:setMenuData="changeMenuData"
      v-bind:state="true"
      v-bind:showbrain="pages.showbrain"
    />
    <modal_menu
      v-else-if="pages.pagedata[3].active"
      v-bind:menu_list="menu"
      v-bind:lastpage="pages.lastpage"
      v-on:setMenuData="changeMenuData"
    />
    <test_screen
      v-else
      v-bind:menu_list="menu"
      v-bind:test_data="test"
      v-bind:showbrain="pages.showbrain"
      v-on:setMenuData="changeMenuData"
    />
  </div>
</template>

<script>
import main_screen from "@/components/main_screen/main_screen";
import modal_menu from "@/components/header_menu/menu_item/modal_menu";
import test_screen from "@/components/test_content/test_screen";

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  doc.style.setProperty("--app-width", `${window.innerWidth}px`);
};
window.addEventListener("resize", appHeight);
appHeight();

const main_menu = [
  { id: 0, title: "Главная", page: 0, active: true, visible: true },
  { id: 1, title: "Информация о тесте", page: 1, active: false, visible: true },
  { id: 2, title: "Пройти тест", page: 2, active: false, visible: true },
  { id: 3, title: "modal menu", page: 3, active: false, visible: false },
];
const page_manager = {
  lastpage: 0,
  showbrain: false,
  pagedata: [
    { id: 0, name: "main", menuid: 0, active: true },
    { id: 1, name: "full", menuid: 1, active: false },
    { id: 2, name: "test", menuid: 2, active: false },
    { id: 3, name: "modal", menuid: 3, active: false },
  ],
};
let tests_data = [
  {
    number: 0,
    view: 1,
    data: [
      { id: 0, text: "test1", checked: false },
      { id: 1, text: "test2", checked: true },
      { id: 2, text: "test3", checked: false },
    ],
  },
];

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
    };
  },
  components: {
    main_screen,
    modal_menu,
    test_screen,
  },
  methods: {
    changeTestData(number, id) {
      /*  const initstate = this.test[number].data[id].checked;

      for (let i = 0; i < this.test[number].data.length; i++) {
        this.test[number].data[i].checked = false;
      }

      this.test[number].data[id].checked = !initstate;*/
      ValueSelector(this.test[number].data, id, "checked");
    },
    changeMenuData(id) {
      ValueSelector(this.menu, id, "active");
      this.pages.showbrain = id === 2 ? true : false;
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
  /* height: var(--app-height, 100vh);*/
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
