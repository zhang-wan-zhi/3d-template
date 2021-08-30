<template>
  <div class="stationsort">
    <div class="ss-item">
      <div class="ss-title">测震</div>
      <div class="ss-nums">
        <div class="ss-num">
          <div class="ss-num-top">53</div>
          <div class="ss-num-btm">正常运行</div>
        </div>
        <div class="ss-num">
          <div class="ss-num-top text-red">20</div>
          <div class="ss-num-btm">故障</div>
        </div>
      </div>
    </div>
    <div class="ss-item">
      <div class="ss-title">强震</div>
      <div class="ss-nums">
        <div class="ss-num">
          <div class="ss-num-top">43</div>
          <div class="ss-num-btm">正常运行</div>
        </div>
        <div class="ss-num">
          <div class="ss-num-top text-red">24</div>
          <div class="ss-num-btm">故障</div>
        </div>
      </div>
    </div>
    <div class="ss-item">
      <div class="ss-title">GNSS</div>
      <div class="ss-nums">
        <div class="ss-num">
          <div class="ss-num-top">23</div>
          <div class="ss-num-btm">正常运行</div>
        </div>
        <div class="ss-num">
          <div class="ss-num-top text-red">10</div>
          <div class="ss-num-btm">故障</div>
        </div>
      </div>
    </div>
    <div class="ss-item">
      <div class="ss-title">前兆</div>
      <div class="ss-nums">
        <div class="ss-num">
          <div class="ss-num-top">51</div>
          <div class="ss-num-btm">正常运行</div>
        </div>
        <div class="ss-num">
          <div class="ss-num-top text-red">12</div>
          <div class="ss-num-btm">故障</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@font-face {
  font-family: "digital-7";
  src: url("../../../assets/fonts/DS-DIGI.TTF") format("truetype");
}
.stationsort {
  .ss-item {
    width: 362px;
    height: 150px;
    padding: 10px 20px;
    background-image: url("../../../assets/img/page/SheBei1.png");
    margin-bottom: 30px;
    .ss-title {
      color: #fff;
      font-size: 30px;
      font-weight: 700;
    }
    .ss-nums {
      display: flex;
      width: 176px;
      height: 72px;
      margin-left: 120px;
      margin-top: 10px;
      .ss-num {
        width: 88px;
        height: 72px;
        .ss-num-top {
          width: 100%;
          height: 40px;
          text-align: center;
          font-family: "digital-7";
          color: #9cff62;
          font-weight: 700;
          font-size: 40px;
        }
        .ss-num-btm {
          text-align: center;
          color: #fff;
          font-size: 18px;
        }
        .text-red {
          color: #e58ca8;
        }
      }
    }
  }
}
</style>