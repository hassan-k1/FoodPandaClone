import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
//Quaser Add
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
//Bootstrap Add
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createPinia } from "pinia";
import router from "../src/router/routes";
const pinia = createPinia();

const app = createApp(App);
app.use(BootstrapVue3);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

app.use(router);
app.use(pinia);
app.mount("#app");
