<template>
  <div class="loading-notice" v-show="isShow">
    <div
      class="snapshot-bg"
      v-loading="isShow"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 1)"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: Boolean
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.loading-notice {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  & > div {
    height: 100%;
    /deep/ .el-loading-mask {
      .el-loading-spinner {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        top:0;
        margin-top:0;
      }
    }
  }
}
</style>
