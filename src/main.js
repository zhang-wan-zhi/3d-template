import Vue from "vue";
import App from "./App";
import router from "./router";
import moment from './assets/js/moment.config'
import "./assets/js/element";
//清除浏览器默认样式
import echarts from "echarts";
import "./assets/css/index.scss";
import vueSeamlessScroll from "vue-seamless-scroll";
import axios from 'axios';
import {echartsSize} from './assets/js/util.js'
import dataV from '@jiaminghi/data-view'
import store from './store'
import Progress from 'vue-multiple-progress'

Vue.use(Progress)

Vue.use(dataV)
Vue.prototype.$echarts = echarts;
Vue.prototype.$moment = moment;
Vue.prototype.$axios = axios;
Vue.use(vueSeamlessScroll);

Vue.config.productionTip = false;
Vue.prototype.echartsSize = echartsSize;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
