<template>
  <div class="operation">
    <div class="title">数字孪生智慧台站</div>
    <HeaderNav></HeaderNav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from "./components/header";

export default {
  components: {
    HeaderNav,
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
    top: 72px;
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
