import Vue from "vue";
import Router from "vue-router";

const home = () => import("@/views/home/index.vue");
const page = () => import("@/views/page/index.vue");
const stationInterior = () => import("@/views/stationInterior/index.vue");
const warning = () => import("@/views/warning/index.vue");
const working = () => import("@/views/working/index.vue");
const monitoring = () => import("@/views/monitoring/index.vue");
const other = () => import("@/views/other/index.vue");
const house = () => import("@/views/house/index.vue");
const map = () => import("@/views/map/index.vue");
const modules = () => import("@/views/modules/index.vue");

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
        {
          path: "/home/stationInterior",
          name: "stationInterior",
          meta: { name: "台站内部" },
          component: stationInterior,
        },
        {
          path: "/home/warning",
          name: "warning",
          meta: { name: "告警" },
          component: warning,
        },
        {
          path: "/home/working",
          name: "working",
          meta: { name: "工作流" },
          component: working,
        },
        {
          path: "/home/monitoring",
          name: "monitoring",
          meta: { name: "视频监控" },
          component: monitoring,
        },
        {
          path: "/home/other",
          name: "other",
          meta: { name: "其他" },
          component: other,
        },
        {
          path: "/home/house",
          name: "house",
          meta: { name: "总览" },
          component: house,
        },
        {
          path: "/home/map",
          name: "map",
          meta: { name: "总览" },
          component: map,
        },
        {
          path: "/home/modules",
          name: "modules",
          meta: { name: "总览" },
          component: modules,
        },
      ],
    },
    
  ],
});
