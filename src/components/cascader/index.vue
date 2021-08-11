<template>
  <div class="cascader">
    <div class="active-line">
      <dv-decoration-4 style="width: 5px; height: 130px; z-index: 9999" />
      <img src="../../assets/img/icon/cascader/Vector37.png" alt="">
    </div>
    <div class="search">搜索</div>
    <div class="cascader-1">
      <img src="../../assets/img/icon/cascader/Vector28.png" />
      <div class="cascader-1-main"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cascader",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.cascader {
  position: relative;
  width: 268px;
  .search {
    width: 268px;
    height: 24px;
    line-height: 24px;
    background-color: #1f1f1f;
    color: #ccc;
    font-size: 14px;
  }
  .cascader-1 {
    display: flex;
    margin-top: 20px;
    .cascader-1-main {
      width: 215px;
      height: 24px;
      background: #38393e;
      margin-left: 12px;
    }
  }
  .active-line {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: -5px;
    img {
      margin-top: 10px;
    }
  }
}
</style>