<template>
  <div class="finish" :class="{ isresponse: response }">
    <div>

      <header_menu v-bind:menu_list="menu_list" v-bind:showbrain="showbrain" v-on:setNewPage="setMenuData"
        v-on:modalMenuShow="modalMenuShow" />


      <div class="finish__contant_wrapper">
        <div v-if="result_data.loading">
          <loading_item />

        </div>
        <div v-else-if="result_data.error">
          <p>"Ошибка"</p>
          <p>{{ result_data.errortext }}</p>
          <p>"Повторите попытку"</p>
        </div>


        <hat_contant v-else />
      </div>

      <div class="finish__action_block">
        <div class="finish__action_title">
          <p>Звоните скорее, запись доступна всего</p>
          <p><span>{{time}}</span> МИНУТ</p>
        </div>
        <div class="finish__action_area" v-on:click="finishClick">
          <div class="finish__action_picture">
            <img src="@/pics/call.png" alt="" />
          </div>
          <div class="finish__action_text"><span>позвонить</span> и прослушать
            результат </div>
        </div>
        <div v-if="result_data.response !== undefined" class="fimnish__result">
          <div  v-for="item of convertJson" :key="item.index" class="finish__result_item">
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
      <footer class="finish__footer" :class="{ response: response }">
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI
        IMPLINITI,
      </footer>
    </div>
    <div class="right lightning">
      <img src="@/pics/lightning.png" alt="" />
    </div>

    <div class="left lightning">
      <img src="@/pics/lightning.png" alt="" />
    </div>

  </div>
</template>

<script>
import header_menu from "@/components/header_menu/header_menu"
import hat_contant from "@/components/test_content/finish_item/hat_contant"
import loading_item from "@/components/test_content/finish_item/loading_item"

const Timer = (finishtime) =>{
 if (finishtime-Date.now()>0)
     return `${Math.floor((finishtime-Date.now())/1000/60)}:${`${Math.floor((finishtime-Date.now())/1000)-60*Math.floor((finishtime-Date.now())/1000/60)}`.padStart(2,'0')}`;
         else
        return"00:00";
}
      


export default {
  props: ["menu_list", "showbrain", "result_data"],
  components: {
    header_menu,
    hat_contant,
    loading_item,
  },

  mounted() {
   
     this.setNewTime(600);
     console.log();

   
   
  },
 
 data() {
    return {time: Timer(this.result_data.finishtime)}
 },

  computed: {

    response() {
      if (this.result_data.response !== undefined)
        return true
      return false;
    },
    convertJson() {
      const text = [];
      const keys = Object.keys(this.result_data.response);
      keys.forEach((key) => {
        text.push(`${key}: ${this.result_data.response[key]} `)
      });
      return text;
    },
  },
  methods: {
    setNewTime: function (col) {
        if (col >=0)
        setTimeout(() => {
         col=col-1;
         this.time=Timer(this.result_data.finishtime);
         
         this.setNewTime(col)
          

      }, 1000);
    },
    setMenuData: function (id) {
    
      this.$emit("setMenuData", id,undefined,4);
    },
    modalMenuShow: function () {
      this.$emit("setMenuData", 3,undefined,undefined);
    },
    finishClick() {
      this.$emit("finishClick", 3);
    },

  },
}
</script>


<style scoped>
.finish {


  position: absolute;


  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  /*max-height: calc(var(--app-height, 100vh) * 672 / 568);**/
  height: max(calc(var(--app-height, 100vh) * 672 / 568), 100vh);

  overflow: hidden;

  z-index: 0;

  background: url("~@/pics/rain_bk2.png") no-repeat top center;

  background-size: 100% 100%;
}

.isresponse {
 
  height: 100%;

}

.finish__contant_wrapper {
  display: flex;
  margin-top: calc(var(--app-height, 100vh) * 46 / 568);
  flex-direction: column;
  justify-content: left;
  min-height: 100%;

}


.finish__action_block {
  margin-left: 0;

}

@media (min-width:280px) {
  .finish__action_block {
    margin-left: 6px;

  }

}

/* Звоните скорее, запись доступна всего */
.finish__action_title {
  width: 240px;
  min-height: 30px;
  min-height: calc(var(--app-height, 100vh) * 30 / 568);
  margin: 8px 10px;

  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 23px;
  line-height: calc(var(--app-height, 100vh) * 23 / 568);
  /* identical to box height, or 273% */
  text-align: center;
  letter-spacing: 0.1em;

  color: #3BDE7C;
}

@media (min-width: 320px) {
  .finish__action_title {
    width: auto;
    min-width: 240px;
    margin: 8px 34px;
  }
}

.finish__action_title span {



  font-family: 'PT Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  font-size: calc(var(--app-height, 100vh) * 20 / 568);
  letter-spacing: 0.15em;


}

.finish__action_area {
  display: flex;
  position: relative;
  z-index: 5;

  align-items: baseline;
  justify-content: space-between;
  margin: 0 0;

  min-width: 260px;
  width: 260px;
  max-width: 260px;
  min-height: 92px;
  height: calc(var(--app-height, 100vh) * 92 / 568);



  background: #EB1B00;
  border-radius: 5px;
  border-radius: calc(var(--app-height, 100vh) * 5 / 568);
}

@media (min-width: 320px) {
  .finish__action_area {
    min-width: 270px;
    width: calc(270 * (568px + var(--app-height, 100vh))*320 /568 / 568);
    max-width: 100%;

    margin: 0 auto;

  }
}

@media (min-width: 767px) {
  .finish__action_area {
    min-width: calc(270 * (568px + var(--app-height, 100vh))*320 /568 / 568);
    max-width: 100%;
    margin: 0 auto;
  }
}

.finish__action_picture {
  flex: 1 0 65px;
  padding: 11px;
  align-self: center;
  object-fit: contain;
  min-width: 29px;
  min-width: calc(var(--app-height, 100vh) * 29 / 568);

  min-height: 29px;
  min-height: calc(var(--app-height, 100vh) * 29 / 568);
  width: 100%;
}

.finish__action_picture img {

  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 0;
}

.finish__action_text {
  /* позвонить и прослушать результат */
  flex: 1 1 auto;

  min-width: 206px;
  min-height: 47px;
  text-align: left;


  margin-right: 22px;
  margin-top: calc(var(--app-height, 100vh) * 31 / 568);


  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  font-size: calc(var(--app-height, 100vh) * 15 / 568);
  line-height: 18px;
  line-height: calc(var(--app-height, 100vh) * 18 / 568);
  letter-spacing: 0.05em;

  color: #FFFFFF;
}

.finish__action_text span {
  text-transform: capitalize;

}

.fimnish__result{
  max-height:600px;
  margin: 15px;
  padding:10px;
  overflow-y:auto;
  background-color:grey;
  border-radius: 20px;
}
.finish__result_item{
  display:flex;
 align-items:left;
 text-align:left;
 
  }

.finish__footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  max-width: 270px;
  min-height: 27px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 7px;
  line-height: 9px;
  /* or 129% */
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.5);

}


.response {
  position: relative;

}

@media (min-width: 280px) {
  .finish__footer {
    margin: 5px auto;
    max-width: auto;
  }
}


.lightning {
  display: inline-block;
  position: absolute;
  z-index: 2;
  text-align: center;
  vertical-align: top;
  max-width: 100%;

}

.right {
  right: 0px;
  /*  top: calc(var(--app-height, 100vh) *448 / 568);*/
  bottom: calc(var(--app-height, 100vh) * 49 / 568);
  transform: translate(50%, 0) rotate(53.15deg);

}

.lightning img {
  width: calc(var(--app-height, 100vh) * 165 / 568);
  height: calc(var(--app-height, 100vh) * 165 / 568);

}

.left {
  left: 0;
  transform: translate(-50%, 0) rotate(-53.15deg);
  bottom: calc(var(--app-height, 100vh) * 91 / 568);

}
</style>
