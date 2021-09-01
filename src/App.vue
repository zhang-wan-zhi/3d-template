<template>
  <div id="app">
    <mapbg v-if="showMap"></mapbg>
    <router-view />
  </div>
</template>

<script>
import { refreshScale } from "./assets/js/util";
import mapbg from "./components/mapbg/index.vue";
export default {
  components: {
    mapbg,
  },
  name: "app",
  data() {
    return {
      showMap: true,
    };
  },
  mounted() {
    refreshScale();
    window.onresize = function () {
      refreshScale();
    };
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log("router", val);
        if (val.name !== "page") {
          this.showMap = false;
        } else {
          this.showMap = true;
        }
      },
    },
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
