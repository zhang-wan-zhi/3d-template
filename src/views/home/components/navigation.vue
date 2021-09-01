<template>
  <div class="navigation animate__animated animate__bounceInUp">
    <!--  <h1 class="animate__animated animate__fadeInUp">
Animate.css //class内不管是用哪个动画效果，animate__animated都一定要放，不然可能不会有想要的效果，后面那个便是要使用的动画类名，若要无限使用效果就加个infinite类名
</h1> -->
    <div class="btn" @click="hidenText">
      <img src="../../../assets/img/nav/Button_nos.png" alt="" />
      <div class="text">台站总览</div>
    </div>
    <div class="btn" @click="showText">
      <img src="../../../assets/img/nav/Button_nos.png" alt="" />
      <div class="text">台站统计</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showText() {
      this.$router.push({ name: "page" });
      this.$store.commit("map/change_Seismometry", true);
    },
    hidenText() {
      this.$router.push({ name: "page" });
      this.$store.commit("map/change_Seismometry", false);
    },
  },
};
</script>

<style scoped lang="scss">
.navigation {
  width: 100%;
  height: 69px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 949px;
  z-index: 999;
  .btn {
    position: relative;
    width: 185px;
    height: 69px;
    margin: 0 25px;
    cursor: pointer;
    .text {
      position: absolute;
      width: 163px;
      height: 52px;
      color: #fff;
      text-align: center;
      line-height: 42px;
      border-radius: 2px;
      padding: 4px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .text:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>