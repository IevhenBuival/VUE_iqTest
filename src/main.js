import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.config.globalProperties.$filters = {
  firstSymbolToUpperCase(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  },
};

app.mount("#app");
