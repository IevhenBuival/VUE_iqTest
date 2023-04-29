<template>
  <div class="main">
    <div class="container">
      <div class="main__wrapper ">
        <div class="main__title_group">
          <div class="main__title">
          <h2 class="white">Пройдите точный и быстрый</h2>
          </div>
          <div class="main__header_group">

            <h1>тест на</h1>
            <h1>определение IQ</h1>

          </div>
        </div>

        <div class="main__brain_group"></div>
        <div class="main__item_group">
          <button_item v-bind:color="true" v-bind:title="'Пройти тест'" v-on:goTest="goTestMenu" />
          <div class="main__text_group">
            <p class="yellow">
              И получите рекомендации по развитию своего интеллекта
            </p>
            <p class="white">
              и улучшению финансового благосостояния и личной жизни
            </p>
          </div>
        </div>
        <div class="main__footer_group">
          <a href="#detail" id="detail" class="main__footer_block">
            <div class="main__footer_block__circle_img">
              <img src="@/pics/arrow.png" alt="" />
            </div>
            <div class="main__footer_block__font">Подробнее</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import button_item from "@/components/button_item/button_item";
export default {
  components: {
    button_item,
  },
  methods: {
    setMenuData() {
      this.$emit("setNewPage", 1);
    },
    goTestMenu() {

      this.$emit("setNewPage", 2);
    },
  },
};
/* 
    <div class="block"></div>
    <div class="block">text</div>
    <div class="block">text</div>
    <div class="block">text</div>
    <div class="block"></div>*/
</script>

<style scoped>
.main {
  position: absolute;

  height: calc(var(--app-height, 100vh) * 640 / 693);
  max-height: calc(var(--app-height, 100vh) * 640 / 693);

  margin-bottom: 30%;
  top: calc(var(--app-height, 100vh) * 46 / 693);
  left: 0;
  right: 0;



  /*min-width: 517px;*/
  /*max-width: 100%;*/


  background: center url("~@/pics/rain_bk.png") no-repeat;
  background-size: 100% 100%;
  /*background-size: 100% 100%;
  /*background-size: 100vh;*/
}

@media (min-width:767px) {
  .main {
    background: url("~@/pics/logo.png") no-repeat center/0%, url("~@/pics/rain_bk2.png") no-repeat center;
    background-size: calc(var(--app-height, 100vh) * 200 / 693) calc(var(--app-height, 100vh) * 200 / 693), 100% 100%;
    background-position: right 50% top 27%, 0% 0%;



    /*-size: 100% 100%, auto;*/
  }

}









p {

  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  font-size: calc((var(--app-height, 100vh) * 15 / 693));
 
  text-align: center;
  letter-spacing: 0.05em;
}

@media (min-width:767px) {
  p {
    font-size: calc((var(--app-height, 100vh) * 17 / 693));
  }
}

@media (min-width:1280px) {
  p {
    font-size: calc((var(--app-height, 100vh) * 20 / 693));
  }
}

.main__wrapper {
  width: 100%;
  height: calc(var(--app-height, 100vh) * 522 / 693);
  margin: calc(var(--app-height, 100vh) * 7 / 693) 0;
  /* min-height: 647px;*/
  display: flex;
  flex-direction: column;



}

.main__title_group {
  flex: 0 1 35%;
 

}

.main__title {

  margin: 0 0 0 0;
 
  min-height: calc(var(--app-height, 100vh) * 52 / 693);

  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: calc((var(--app-height, 100vh) * 18 / 693));
  /*line-height: calc(var(--app-height, 100vh) * 24 / 693);*/
  text-align: center;
  letter-spacing: 0.05em;
  
}

@media (min-width:767px) {
  .main__title {
    font-size: calc((var(--app-height, 100vh) * 18 / 693)) ;
  }
}
@media (min-height:1200px){
  .main__title {
    font-size: calc((var(--app-height, 100vh) * 16 / 693)) ;
  }
}



.main__header_group {
  display:block;
   
  margin: 2px auto 0 auto;
 
}



@media (min-width:380px) {
  .main__header_group {
    max-width: 95%;
    margin: 0 auto;
  }
}


 .main__header_group  h1 {
  font-family: "Yeseva One";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height, 100vh) * 28 / 693);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.03em;

  color: #ffc700;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* определение IQ */


}

@media (min-width:767px) {
   .main__header_group h1 {
    font-size: calc(((var(--app-height, 100vh) * 30 / 693) + (15 *0.7) * ((100vw -640px) / 1280)));
    
  }
}

.main__brain_group {
  flex: 0 1 20%;

}

.main__item_group {
  flex: 0 1 auto;

}

@media (min-width:1280px) {
  .main__item_group {
    flex: 1 1 auto;
  }
}
.main__text_group {
  margin-top: 15px;

}

@media (min-width:1280px) {
  .main__text_group {
    margin-top: 10px;

  }
}
.yellow {
  color: #ffc700;
}

.white {
  color: #ffffff;
}

.main__footer_group {
  display: flex;
  flex: 1 0 10%;
  justify-content: center;
  align-items:center;
 
 
}




.main__footer_block {
  display: flex;
  margin-top: 1px;
  margin-bottom: 1px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 1;
  transform: translate(0,-50%);

}
.main__footer_block:visited{
   color: #ffffff;
}


.main__footer_block__circle_img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(var(--app-height, 100vh) * 16 / 693);
  height: calc(var(--app-height, 100vh) * 16 / 693);
  border-radius: 50%;

  background: #ffffff;
}



.main__footer_block__font {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height, 100vh) * 8 / 693);
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
}
</style>
