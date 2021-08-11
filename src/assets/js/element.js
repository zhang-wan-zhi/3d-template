import Vue from "vue";
// element-ui 按需加载
import {
  Loading,
  Icon,
  Carousel,
  CarouselItem,
  Input,
  Button,
  Form,
  FormItem,
  Dialog,
} from "element-ui"; //按需引用Element-ui
import "element-ui/lib/theme-chalk/index.css"; //element-ui组件的样式需要单独引入

Vue.use(Icon);
Vue.use(Loading);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Dialog);
