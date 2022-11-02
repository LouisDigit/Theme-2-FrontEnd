import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";
import VueChartkick from "vue-chartkick";
import store from "./store";

import "chartkick/chart.js";

import "./assets/main.css";

const app = createApp(App).use(store);

app.use(router);
app.use(VueChartkick);

app.mount("#app");
