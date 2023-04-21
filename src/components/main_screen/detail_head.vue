<template>
  <div class="bgconteiner">
    <div class="container">
      <div class="wrapper">
        <div><img src="@/pics/open.png" alt="" /></div>
        <div>
          <p>
            Профессиональный IQ-тест позволяет не только определить коэффициент
            вашего интеллекта, но и выработать список рекомендаций для повышения
            этого показателя.
          </p>
        </div>
        <div class="close"><img src="@/pics/close.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  width: calc(var(--app-width, 100vh) * 248 / 320);

  font-family: "Yeseva One";
  font-style: normal;
  font-weight: 400;
  font-size: calc(var(--app-height, 100vh) * 18 / 568);
  line-height: calc(var(--app-height, 100vh) * 23 / 568);
  /* or 128% */
  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
}
.bgconteiner {
  /* image */

  position: absolute;
  width: 100%;

  top: calc(var(--app-height, 100vh));
  z-index: 2;
  min-height: 339px;
  height: calc(var(--app-height, 100vh) * 339 / 568);

  /*require('./assets/media/img.jpg')*/
  background: url("~@/pics/image.png") no-repeat center;
  background-size: 100% 100%;
}

.container {
  /*min-width: 517px;*/
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  min-height: 339px;
  height: calc(var(--app-height, 100vh) * 339 / 568);

  background: radial-gradient(
    84.34% 50.29% at 48.75% 49.71%,
    #2950c2 0%,
    rgba(38, 91, 199, 0.96) 40.62%,
    rgba(39, 98, 187, 0) 85.42%
  );
  background-size: 100% 100%;
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */

  /*background-size: 100vh;*/
}
.wrapper {
  display: flex;
}
.close {
  align-self: flex-end;
}
</style>
