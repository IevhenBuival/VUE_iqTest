<template>
  <div id="app" class="main_wrapper">
    <div>
      <main_screen v-if="pages.pagedata[0].active" class="MAIN_DIV" v-bind:menu_list="menu" v-bind:test_data="test"
        v-on:setTestAnswer="changeTestData" v-on:setMenuData="changeMenuData" v-bind:state="false"
        v-bind:showbrain="pages.showbrain" v-bind:scroll="pages.pagedata[0].scroll" />
      <main_screen v-else-if="pages.pagedata[1].active" class="MAIN_DIV" v-bind:menu_list="menu" v-bind:test_data="test"
        v-on:setMenuData="changeMenuData" v-bind:state="true" v-bind:showbrain="pages.showbrain" v-bind:scroll="0" />
      <modal_menu v-else-if="pages.pagedata[3].active" v-bind:menu_list="menu" v-bind:lastpage="pages.lastpage"
        v-on:setMenuData="changeMenuData" />

      <test_screen v-else-if="pages.pagedata[2].active" v-bind:menu_list="menu" v-bind:test_data="test"
        v-bind:showbrain="pages.showbrain" v-on:setMenuData="changeMenuData" v-on:setTestDate="changeTestData"
        v-on:setTestNumber="changeCurrentTest" />

      <finish_screen v-else v-bind:menu_list="menu" v-bind:showbrain="pages.showbrain" v-bind:result_data="result"
        v-on:setMenuData="changeMenuData" v-on:finishClick="getFinResult" />
    </div>
  </div>
</template>

<script>
import main_screen from "@/components/main_screen/main_screen";
import modal_menu from "@/components/header_menu/menu_item/modal_menu";
import test_screen from "@/components/test_content/test_screen";
import finish_screen from "@/components/test_content/finish_screen";
import fetchData from "@/hooks/fetchData";
import initial_main_menu from "@/data/main_menu.js";
import initial_page_manager from "@/data/page_manager.js"
import initial_tests_data from "@/data/tests_data.js";
import initial_result_data from "@/data/result_data.js";



const page_manager = initial_page_manager;
const main_menu = initial_main_menu;
const tests_data = initial_tests_data;
const result_data = initial_result_data;



const appHeightWidth = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `max(568px,${window.innerHeight}px)`);
  doc.style.setProperty("--app-width", `minmax(${window.innerWidth}px,100vw)`);


};
window.addEventListener("resize", appHeightWidth);
ScreenOrientation.onchange = appHeightWidth;

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
    changeMenuData(id, scroll, lastpage) {
      if (lastpage !== undefined)
        this.pages.pagedata[lastpage].scroll = scroll;
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
    async getFinResult() {
      this.result.error = false;
      this.result.loading = true;
        fetchData().then(res => {
          if (res.result === "ok") {
            this.result.response = res.data;
            this.result.loading = false;

          } else {
            this.result.errortext = res.error;
            this.result.error = true;
            this.result.loading = false;
          }
        }
        );
      


    },
   
  },
};

</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
  overflow-x: hidden;
}

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
  height: 100%;
  background: grey;
  font-family: Arial, sans-serif;



}




.main_wrapper {
  background: #272727;
  min-width: 280px;
  margin: 0px auto;
  padding: 0px 0px;
  /* width: var(--app-width, 100vw);*/
  /* height: 300vh;*/
}

@media (min-width:280px) {
  .main_wrapper {
    padding: 0px 3px;
    min-width: 320px;

  }

}

@media (min-width: 767px) {
  .main_wrapper {
    min-width: 640px;
    padding: 0px 6px;

  }
}

@media (min-width: 1080px) {
  .main_wrapper {
    min-width: 960px;
    padding: 0px 9px;

  }
}

@media (min-width: 1280px) {
  .main_wrapper {
    min-width: 1280px;
    padding: 0px 12px;

  }
}


.container {
  max-width: 320px;
  margin: 0 auto;
}


@media (min-width: 767px) {
  .container {
    max-width: 640px;

  }
}
</style>
