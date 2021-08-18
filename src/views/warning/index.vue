<template>
  <div class="warning-report">
    <div class="warning-head">
      <div class="head-nav1">
        <div class="text">拟合告警</div>
        <div class="line"></div>
        <div class="text">原始告警</div>
        <div class="line"></div>
        <div class="text">历史记录</div>
      </div>
      <div class="head-nav2">
        <div class="item1">
          <span>分中心</span>
          <div class="selet">
            <span>杭州地震监测中心站</span>
            <i class="el-icon-arrow-down"></i>
          </div>
        </div>
        <div class="item1 mgl">
          <span>台站</span>
          <div class="selet">
            <span>台站名称/简拼/代码</span>
          </div>
        </div>
        <div class="item1 mgl">
          <span>单状态</span>
          <div class="selet">
            <span>台站名称、代码、简拼</span>
          </div>
        </div>
        <div class="btn">搜索</div>
        <div class="btn reset">重置</div>
        <div class="btn put">导出</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.warning-report {
  .warning-head {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 42px;
    left: 48px;
    top: 157px;
    z-index: 999;
    .head-nav1 {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 308px;
      height: 42px;
      padding: 0 20px;
      border: 1px solid #dedede;
      box-sizing: border-box;
      border-radius: 55px;
      .text {
        font-size: 18px;
        color: #949494;
      }
      .line {
        width: 0px;
        height: 11px;
        border: 1px solid #b0b0b0;
      }
    }
    .head-nav2 {
      display: flex;
      align-items: center;
      width: 1192px;
      height: 42px;
      margin-left: 38px;
      background: rgba(11, 11, 11, 0.4);
      border-radius: 4px;
      .item1 {
        display: flex;
        align-items: center;
        color: #fff;
        .selet {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 232px;
          height: 32px;
          line-height: 32px;
          margin-left: 16px;
          padding: 0 16px;
          border: 1px solid #b3b3b3;
          box-sizing: border-box;
          border-radius: 4px;
          font-size: 16px;
          color: #ffffff;
        }
      }
      .mgl {
        margin-left: 16px;
      }
      .btn {
        width: 64px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        color: #000;
        background: #b2b2b2;
        border-radius: 4px;
        margin-left: 16px;
      }
      .reset {
        color: #fff;
        background-color: #435f75;
      }
      .put {
        color: #fff;
        background-color: #38393e;
      }
    }
  }
}
</style>