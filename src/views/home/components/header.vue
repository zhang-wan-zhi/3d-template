<template>
  <div class="header-btm">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <i class="el-icon-arrow-right"></i>
    <div class="header-nav">
      <div
        :class="['nav-btn', navIndex == 0 ? 'active-nav' : '']"
        @mouseover="hoverHandle(0)"
        @mouseleave="leaveHandle"
        @click="toGis"
      >
        <!-- <img src="../../../assets/img/icon/header/fi_map.png" /> -->
        <i class="el-icon-aim icon"></i>
        <div>GIS</div>
      </div>
      <div
        :class="['nav-btn', navIndex == 1 ? 'active-nav' : '']"
        @mouseover="hoverHandle(1)"
        @mouseleave="leaveHandle"
        @click="toWaring"
      >
        <!-- <img src="../../../assets/img/icon/header/fi_alert-circle.png" /> -->
        <i class="el-icon-warning-outline icon"></i>
        <div>告警</div>
      </div>
      <div
        :class="['nav-btn', navIndex == 2 ? 'active-nav' : '']"
        @mouseover="hoverHandle(2)"
        @mouseleave="leaveHandle"
        @click="toWorking"
      >
        <!-- <img src="../../../assets/img/icon/header/fi_monitor.png" /> -->
        <i class="el-icon-monitor icon"></i>
        <div>工作流</div>
      </div>
      <div
        :class="['nav-btn', navIndex == 3 ? 'active-nav' : '']"
        @mouseover="hoverHandle(3)"
        @mouseleave="leaveHandle"
      >
        <!-- <img src="../../../assets/img/icon/header/fi_bar-chart-2.png" /> -->
        <i class="el-icon-s-data icon"></i>
        <div>统计</div>
      </div>
      <div
        :class="['nav-btn', navIndex == 4 ? 'active-nav' : '']"
        @mouseover="hoverHandle(4)"
        @mouseleave="leaveHandle"
        @click="toMonitoring"
      >
        <!-- <img src="../../../assets/img/icon/header/fi_video.png" /> -->
        <i class="el-icon-video-camera icon"></i>
        <div>视频监控</div>
      </div>
      <div
        :class="['nav-btn', navIndex == 5 ? 'active-nav' : '']"
        @mouseover="hoverHandle(5)"
        @mouseleave="leaveHandle"
        @click="toOther"
      >
        <i class="el-icon-s-operation icon"></i>
        <!-- <img src="../../../assets/img/icon/header/fi_menu.png" /> -->
        <div :class="navIndex == 5 ? 'active-nav' : ''">其他</div>
      </div>
      <div id="underline"></div>
    </div>
    <i class="el-icon-arrow-left"></i>
    <div class="loading2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "HeaderNav",
  data() {
    return {
      navIndex: 0,
    };
  },
  watch: {
    $route(to, from) {
      console.log(from.name); //从哪来
      console.log(to.name); //到哪去
    },
  },
  methods: {
    hoverHandle(index) {
      let underline = document.getElementById("underline");
      underline.style.transform = "translateX(" + 123 * index + "px)";
    },
    leaveHandle() {
      let underline = document.getElementById("underline");
      underline.style.transform = "translateX(" + 123 * this.navIndex + "px)";
    },
    toGis() {
      this.$router.push("page");
      this.navIndex = 0;
    },
    toWaring() {
      this.navIndex = 1;
      this.$router.push("warning");
    },
    toWorking() {
      this.navIndex = 2;
      this.$router.push("working");
    },
    toMonitoring() {
      this.navIndex = 4;
      this.$router.push("monitoring");
    },
    toOther() {
      this.navIndex = 5;
      this.$router.push("other");
    },
    changeIndex() {
      
    }
  },
  mounted() {
    
  },
  deactivated() {},
};
</script>

<style scoped lang="scss">
/* @import "../../../assets/css/mixins"; */
.header-btm {
  width: 100%;
  height: 77px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 949px;
  z-index: 999;
  .el-icon-arrow-right {
    color: #fb494b;
    margin: 0 20px;
  }
  .el-icon-arrow-left {
    color: #fb494b;
    margin: 0 20px;
  }
}
.header-nav {
  width: 905px;
  height: 77px;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 40px;
  background: rgba(11, 11, 11, 0.4);
  /* border: #10f492 1px solid; */
  /* background-color: red; */
  padding: 8px 0;
  border-radius: 70px;
  z-index: 999;
  .nav-btn {
    width: 123px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    color: #fff;
    .icon {
      width: 24px;
      height: 24px;
      font-size: 24px;
      /* -webkit-filter: drop-shadow(red 20px 0);
      filter: drop-shadow(red 20px 0); */
    }
  }
  .active-nav {
    color: #10f492;
  }
  .nav-btn:hover {
    color: #10f492;
  }
  #underline {
    position: absolute;
    left: 82px;
    bottom: 0;
    height: 4px;
    background-color: #10f492;
    transition: all 0.3s ease;
    height: 2px;
    width: 123px;
  }
}
.loading span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background: #10f492;
  animation: load 1.04s ease infinite;
}
.loading2 span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background: #10f492;
  animation: load 1.04s ease infinite;
}
.loading span:last-child {
  margin-right: 0px;
}
@keyframes load {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.loading span:nth-child(1) {
  animation-delay: 0.13s;
}
.loading span:nth-child(2) {
  animation-delay: 0.26s;
}
.loading span:nth-child(3) {
  animation-delay: 0.39s;
}
.loading span:nth-child(4) {
  animation-delay: 0.52s;
}
.loading span:nth-child(5) {
  animation-delay: 0.65s;
}

.loading2 span:nth-child(5) {
  animation-delay: 0.13s;
}
.loading2 span:nth-child(4) {
  animation-delay: 0.26s;
}
.loading2 span:nth-child(3) {
  animation-delay: 0.39s;
}
.loading2 span:nth-child(2) {
  animation-delay: 0.52s;
}
.loading2 span:nth-child(1) {
  animation-delay: 0.65s;
}
</style>
