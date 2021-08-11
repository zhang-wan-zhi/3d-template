import Vue from "vue";
import Router from "vue-router";

const home = () => import("@/views/home/index.vue");
const pandect = () => import("@/views/pandect/index.vue");

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      redirect: '/home/pandect',
      children: [
        {
          path: "/home/pandect",
          name: "pandect",
          meta: { name: "总览" },
          component: pandect,
        },
      ],
    },
  ],
});
