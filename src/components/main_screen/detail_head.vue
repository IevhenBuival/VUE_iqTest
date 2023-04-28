<template>
  <div class="detail_head">
    <a id="detail"></a>
    <div class="container">
      <div class="detail_head__container">
        <div class="detail_head_wrapper">
          <div class="detail_head__open_quotes"><img src="@/pics/open.png" alt="" /></div>
          <div class="detail_head__text">
            <p>
              Профессиональный IQ-тест позволяет не только определить коэффициент
              вашего интеллекта, но и выработать список рекомендаций для повышения
              этого показателя.
            </p>
          </div>
          <div class="detail_head__close_quotes"><img src="@/pics/close.png" alt="" /></div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  width: 100%;

  font-family: "Yeseva One";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  font-size: calc(var(--app-height, 100vh) * 18 / 568);
  line-height: calc(var(--app-height, 100vh) * 22 / 568);
  /* or 128% */
  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
}

@media (min-height: 900px) {
  p {
    font-size: calc(var(--app-height, 100vh) * 17 / 568);
    line-height: calc(var(--app-height, 100vh) * 22 / 568);
  }
}

.detail_head {
  /* image */

  position: absolute;
  width: 100%;

  top: calc(var(--app-height, 100vh)*444/568);
  left: 0;
  right: 0;

  z-index: 2;

  height: calc(var(--app-height, 100vh) * 339 / 568);
  min-height: calc(var(--app-height, 100vh) * 339 / 568);
  max-height: calc(var(--app-height, 100vh) * 339 / 568);

  /*require('./assets/media/img.jpg')*/
  background: radial-gradient(84.34% 50.29% at 48.75% 49.71%,
      #2950c2 0%,
      rgba(38, 91, 199, 0.96) 40.62%,
      rgba(39, 98, 187, 0) 85.42%), url("~@/pics/image.png") no-repeat center;

  background-size: 100% 100%, 100% 100%;

}

.detail_head__container {
  /*min-width: 517px;*/
  margin-top: 55px;
  margin-top: calc(var(--app-height, 100vh) * 55 / 568);

  width: 100%;
  overflow-y: hidden;



  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */

  /*background-size: 100vh;*/
}

@media (min-height:1000px) {
  .detail_head__container {
    margin-top: 65px;
    margin-top: calc(var(--app-height, 100vh) * 65 / 568);

  }

}

.detail_head_wrapper {
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  margin: 0;

}

.detail_head__open_quotes {
  flex: 0 0 10%;
}

.detail_head__text {
  display: block;
  margin: 0;
  align-self: flex-start;
  min-width: 80%;
  flex: 1 1 auto;

}


@media (min-width: 767px) {
  .detail_head__text {
    max-width: 50%;
    margin: 0 auto;
  }
}

.detail_head__close_quotes {
  align-self: flex-end;
  flex: 0 0 10%;
}
</style>
