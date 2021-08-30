<template>
  <div class="operation">
    <div class="title"><img src="../../assets/img/nav/Component4.png" alt=""></div>
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from "./components/header";
import Navigation from "./components/navigation";

export default {
  components: {
    HeaderNav,
    Navigation
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  deactivated() {},
};
</script>

<style lang="scss">
.operation {
  position: relative;
  width: 100%;
  height: 100%;
  .title {
    position: absolute;
    height: 47px;
    left: 50%;
    top: 50px;
    transform: translateX(-50%);
    color: #fff;
    letter-spacing: 2px;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 47px;
    z-index: 999;
  }
}
</style>
