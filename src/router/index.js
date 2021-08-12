import Vue from "vue";
import Router from "vue-router";

const home = () => import("@/views/home/index.vue");
const page = () => import("@/views/page/index.vue");

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      redirect: '/home/page',
      children: [
        {
          path: "/home/page",
          name: "page",
          meta: { name: "总览" },
          component: page,
        },
      ],
    },
  ],
});
