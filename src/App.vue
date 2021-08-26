<template>
  <div id="app">
    <mapbg></mapbg>
    <router-view />
  </div>
</template>

<script>
import { refreshScale } from "./assets/js/util";
import mapbg from "./components/mapbg/index.vue";
export default {
  components: {
    mapbg
  },
  name: "app",
  mounted() {
    refreshScale();
    window.onresize = function () {
      refreshScale();
    };
  },
};
</script>

<style lang="scss">
#app {
  width: 1920px;
  height: 1080px;
  background: #000;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  /* left: 50%; */
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
