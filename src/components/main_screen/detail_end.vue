<template>
  <div class="detail_end">

    <div class="detail_end_container">
      <div class="detail_end__content">
        <div class="datail_end__head">
          <p>
            Прохождение теста займет у вас не более <span>12</span> минут, а
            его результаты вы сможете <span>использовать всю жизнь</span>.
          </p>
        </div>
        <div class="datail_end__main">
          <p>
            Профессиональная интерпретация и детально
            <strong>проработанные рекомендации</strong> позволят вам
            качественно изменить
            <strong>все аспекты своей жизни:</strong> от финансового до
            любовного.
          </p>

        </div>

        <div class="detail_end__button">
          <button_item v-bind:title="'Пройти тест'" v-bind:opacity="true" v-on:goTest="goTestClick" />
        </div>
        <div class="detail_end__footer">
          <div class="image"><img src="@/pics/copyright.png" alt="" /></div>
        </div>

      </div>

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
/*

*/
import button_item from "@/components/button_item/button_item";

export default {
  components: {
    button_item,
  },
  methods: {
    goTestClick() {
      this.$emit("setNewPage", 2);
    },
  },
};
</script>

<style scoped>
span {
  color: #ffc700;
}

.detail_end {
  /* rain_bk2 */
  position: absolute;
  display: flex;
  /* min-width: 517px;*/

  left: 0;
  right: 0;
  width: 100%;
  /*overflow: hidden;*/

  height: calc(var(--app-height, 100vh) * 533 / 568);
  top: calc(var(--app-height, 100vh) * 1294 / 568);
  /*require('./assets/media/img.jpg')*/
  background: url("~@/pics/rain_bk2.png") no-repeat top center;
  background-size: 100% 100%;
  /*background-size: 100vh;*/
}

.detail_end_container{
  max-width:100%;
  margin:0 auto;
}
@media (min-width:767){
.detail_end_container{
   width: 70%;
 
}

}



.detail_end__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:stretch;
  height: calc(var(--app-height, 100vh) * 533 / 568);




}


.datail_end__head {
  display: block;
  margin:  calc(var(--app-height, 100vh) * 53 / 568) 3.75% 0 3.75%;
  
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis:  auto;

  overflow: hidden;

  min-width: 262px;
  text-align: left;
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height, 100vh) * 14 / 568);
  letter-spacing: 0.05em;
  overflow:hidden;
  z-index: 5;

  /*min-height: calc(var(--app-height, 100vh) * 87 / 568);*/

 

  color: #ffffff;


}

@media (min-width: 280px) {
  .datail_end__head {
    max-width: auto;
  }
}

@media (min-width: 767px) {
  .datail_end__head {
    align-items: stretch;
    margin-right: 20%;
    margin-left: 6%;
    letter-spacing: 0.10em;
    max-width: 100%;
  }

}



.datail_end__main {
  display: flex;
  flex: 1 0 calc(var(--app-height, 100vh) * 250 / 568);
  margin: 2.6% 3.75%;
  padding-left: 2px;
  text-align: left;
  min-height: 30%;
  max-width: 90%;


  background: rgba(243, 243, 242, 0.8);
  border-radius: calc(var(--app-height, 100vh) * 20 / 568);
  z-index: 3;

}

.datail_end__main p {
  margin: auto 0 auto 0;
  font-family: "Merriweather";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height, 100vh) * 16 / 568);
  /* or 144% */
  letter-spacing: 0.05em;

  color: #181818;


}
@media (min-width: 600px) {
  .datail_end__main p {
    line-height: 2em;

  }
}

@media (min-width: 767px) {
  .datail_end__main p {
    line-height: calc(19px + var(--app-height, 100vh) * 16 / 568);

  }
}

@media (min-width: 1024px) {
  .datail_end__main p {
    font-size: calc(var(--app-height, 100vh) * 24 / 568);
    line-height: 2em;
   
  }
}

.detail_end__button {
  flex: 1 0 auto;
  margin-top: 6%;
}

.detail_end__footer {
  display: flex;
  flex: 1 0 auto;
  margin-bottom: calc(var(--app-height, 100vh) * 11 / 568);
  align-items: flex-end;
  justify-content: center;
  


}

.lightning {
  display: inline-block;
  position: absolute;
  font-size: 0;
  z-index: 1;
  text-align: center;


}

.lightning img {
  object-fit: cover;
  width: calc(var(--app-height, 100vh) * 165 / 568);
  height: calc(var(--app-height, 100vh) * 165 / 568);

}

@media (min-width: 767px) {
  .lightning img {
    width: calc(var(--app-height, 100vh) * 2 * 165 / 568);
    height: calc(var(--app-height, 100vh) * 2 * 165 / 568);
  }

}


.right {

  right: 0;

  bottom: calc(var(--app-height, 100vh) * 279 / 568);
  transform: translate(50%, 0) rotate(38.33deg);

}

@media (min-width: 767px) {
  .right {
    transform: translate(25%, 0) rotate(38.33deg);

  }
}



.left {
  left: 0;

  bottom: calc(var(--app-height, 100vh) * 61 / 568);
  transform: translate(-50%, 0) rotate(-19.42deg);
  /* top: calc(var(--app-height, 100vh) * 1552 / 568);*/

}

@media (min-width: 767px) {
  .left {
    transform: translate(-35%, 0) rotate(-19.42deg);
  }

}
</style>
