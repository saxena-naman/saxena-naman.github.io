import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import AOS from "aos";
import "aos/dist/aos.css";
import VueScrollTo from "vue-scrollto";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/:pathMatch(.*)*", component: {} }],
});

const app = createApp(App);

app.use(router);
app.use(VueScrollTo);
app.use(FloatingVue);

app.mount("#app");
