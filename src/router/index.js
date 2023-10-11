import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CityView from "../views/CityView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homeView",
      component: HomeView,
      meta: {
        title: "Home",
      }
    },
    {
      path: "/weather/:province/:city",
      name: "cityView",
      component: CityView,
      meta: {
        title: "Weather",
      }
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${
    to.params.city ?  `${to.params.city}` 
    : to.meta.title
  } | The Local Weahter`;
  next();
})

export default router;