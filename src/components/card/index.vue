<template>
  <div
    class="card"
    id="card-id"
    :style="{
      backgroundImage: `url(${img})`,
    }"
  >
    <div class="title">{{ stationName }}</div>
    <i class="el-icon-close" @click="closeCard"></i>
    <div class="num">33010601</div>
    <div class="line1">无人值守/测震</div>
    <div class="line2">建站：1996-03-01</div>
    <div class="line2">运营商：电信</div>
    <div class="line2">联网方式：SDH</div>
    <div class="line2">UPS电池安装日期：2011-03-01</div>
    <div class="btn-station" @click="interior">
      <i class="el-icon-office-building"></i>
      <span>台站内部</span>
    </div>
    <div class="line3"></div>
    <div class="site">浙大玉泉校区</div>
    <div class="phone-box">
      <div class="box-item">
        <i class="el-icon-phone-outline"></i>
        <div class="box-text">
          <div class="top">陈军辉(台)</div>
          <div class="btm">12345678944</div>
        </div>
      </div>
      <div class="box-item">
        <i class="el-icon-phone-outline"></i>
        <div class="box-text">
          <div class="top">陈军辉(台)</div>
          <div class="btm">12345678944</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    stationName: "",
  },
  data() {
    return {
      img: require("../../assets/img/card/Vector38.png"),
    };
  },
  methods: {
    closeCard() {
      this.$emit("close");
    },
    interior() {
      this.$router.push('stationInterior')
      this.closeCard()
    }
  },
  watch: {
    stationName(newV, oldV) {
      // do something
      console.log(newV, oldV);
      let y = window.innerHeight;
      document.onclick = function (event) {
        console.log(event);
        if (event.clientY < y / 2) {
          let left = event.offsetX + "px";
          let top = event.offsetY + "px";
          let element = document.getElementById("card-id");
          element.style.transform = `translate(${left},${top})`;
        } else {
          let xx = event.offsetX - 327 + "px";
          let yy = event.offsetY - 415 + "px";
          let element = document.getElementById("card-id");
          element.style.transform = `translate(${xx},${yy})`;
        }
        document.onclick = null;
      };
    },
  },
  mounted() {
    console.log("mounted");
    let y = window.innerHeight;
    document.onclick = function (event) {
      console.log(event);
      if (event.clientY < y / 2) {
        let left = event.offsetX + "px";
        let top = event.offsetY + "px";
        let element = document.getElementById("card-id");
        element.style.transform = `translate(${left},${top})`;
      } else {
        let xx = event.offsetX - 327 + "px";
        let yy = event.offsetY - 415 + "px";
        let element = document.getElementById("card-id");
        element.style.transform = `translate(${xx},${yy})`;
      }
      document.onclick = null;
    };
  },
};
</script>

<style scoped lang="scss">
.card {
  position: absolute;
  width: 327.5px;
  height: 415.5px;
  padding: 10px 20px;
  z-index: 999;
  left: 0;
  right: 0;
  .el-icon-close {
    position: absolute;
    font-size: 20px;
    right: 15px;
    top: 15px;
    color: #fff;
    cursor: pointer;
  }
  .title {
    font-size: 18px;
    color: #10f492;
  }
  .num {
    font-size: 14px;
    margin-top: 8px;
    color: #909092;
  }
  .line1 {
    font-size: 16px;
    margin-top: 25px;
    color: #fff;
  }
  .line2 {
    font-size: 16px;
    margin-top: 14px;
    color: #fff;
  }
  .btn-station {
    width: 111px;
    height: 30px;
    line-height: 30px;
    margin-top: 17px;
    background: #00495b;
    color: #fff;
    text-align: center;
    cursor: pointer;
    span {
      margin-left: 8px;
    }
  }
  .line3 {
    width: 283px;
    height: 0px;
    border: 1px solid #9f9f9f;
    margin-top: 16px;
  }
  .site {
    font-size: 14px;
    margin-top: 13px;
    color: #fff;
  }
  .phone-box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 16px;
    .box-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 124px;
      height: 38px;
      color: #fff;
    }
  }
}
</style>