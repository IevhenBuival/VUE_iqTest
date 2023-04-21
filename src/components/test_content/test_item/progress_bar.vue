<template>
  <div class="bar_wrapper">
    <div class="empty_bar">
      <div
        class="progress_bar"
        :style="{
          width: '' + ((current / tests_count) * 95 + 5) + '%',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tests_count", "current"],
};
</script>
<style scoped>
.progress_bar {
  height: calc(var(--app-height, 100vh) * 11 / 568);

  background: #3bde7c;
  border-radius: calc(var(--app-height, 100vh) * 10.5 / 568);
}
.bar_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: calc(var(--app-height, 100vh) * 45 / 568);
}

.empty_bar {
  margin: 0 auto;

  width: calc(var(--app-width, 100vw) * 260 / 320);
  height: calc(var(--app-height, 100vh) * 11 / 568);

  background: #f2f3f3;
  mix-blend-mode: normal;
  opacity: 0.59;
  border-radius: calc(var(--app-height, 100vh) * 10.5 / 568);
}
</style>
