<template>
  <div class="distribution-main">
    <div class="dtb-head">
      <div class="empy"></div>
      <div class="head-text">台站测项</div>
    </div>
    <div class="dtb-item" @click="changeStatus">
      <img
        src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/3112a4e0fc2f11ebbac6a7555bbe52e0.png"
        alt=""
      />
      <div class="dtb-text">测震</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    /* ...mapActions("map", [
      "seismometry",
    ]), */
    changeStatus() {
      this.$store.commit("map/change_Seismometry");
    },
  },
};
</script>

<style lang="scss" scoped>
.distribution-main {
  width: 260px;
  height: 420px;
  background: rgba(24, 23, 23, 0.6);
  border: 1px dashed #434343;
  padding: 20px;
  .dtb-head {
    display: flex;
    align-items: center;
    width: 220px;
    height: 19px;
    margin-bottom: 19px;
    .empy {
      width: 12px;
      height: 12px;
      background: #393939;
      border-radius: 50%;
    }
    .head-text {
      width: 64px;
      height: 19px;
      margin-left: 8px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      /* identical to box height */
      line-height: 19px;
      color: #c4c4c4;
    }
  }
}
.dtb-item {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  img {
    width: 18px;
    height: 18px;
  }
  .dtb-text {
    width: 28px;
    height: 16px;
    color: #fff;
    font-size: 14px;
    margin-top: 6px;
  }
}
</style>