import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import checkin from "../components/CheckIn.vue";
import cartPage from "../components/CartPage.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Checkin",
    path: "/checkin",
    component: checkin,
  },
  {
    name: "CartPage",
    path: "/Cart",
    component: cartPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
