<template>
  <div class="station-interior" id="interior">
    <dv-border-box-8 :dur="6">
      <div class="box-content">
        <div class="box-head">
          <div class="station-msg">
            <div>[33018201]</div>
            <div>浙江省新安江地震台</div>
            <div>33018201</div>
            <div>(杭州地震监测中心站)</div>
          </div>
          <div class="station-address">
            <div class="item">
              <img src="../../assets/img/icon/stationInterior/fi_clock.png" />
              <span>1972-03-01</span>
            </div>
            <div class="item">
              <img src="../../assets/img/icon/stationInterior/liantong.png" />
              <span>联通</span>
            </div>
            <div class="item">
              <img src="../../assets/img/icon/stationInterior/fi_map-pin.png" />
              <span>杭州市建德市白沙镇水礁巷39号</span>
            </div>
            <div class="item">
              <img src="../../assets/img/icon/stationInterior/fi_target.png" />
              <span>砂岩</span>
            </div>
            <div class="item">
              <img src="../../assets/img/icon/stationInterior/shandian.png" />
              <span>1KUPS+市电</span>
            </div>
            <div class="item">
              <img src="../../assets/img/icon/stationInterior/fi_zap.png" />
              <span>一类台站</span>
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="box-nav">
          <div
            :class="['nav-btn', page == 1 ? 'nav-btn-active' : '']"
            @click="page = 1"
          >
            运行状态
          </div>
          <div class="icon-shu"></div>
          <div
            :class="['nav-btn', page == 2 ? 'nav-btn-active' : '']"
            @click="page = 2"
          >
            故障统计
          </div>
          <div class="icon-shu"></div>
          <div
            :class="['nav-btn', page == 3 ? 'nav-btn-active' : '']"
            @click="page = 3"
          >
            设备列表
          </div>
          <div class="icon-shu"></div>
          <div
            :class="['nav-btn', page == 4 ? 'nav-btn-active' : '']"
            @click="page = 4"
          >
            台站图片
          </div>
        </div>
        
        <!-- center -->
        <div class="box-center" v-if="page === 1">
          <div class="left">
            <left></left>
          </div>
          <div class="right">
            <right></right>
          </div>
        </div>
        <div class="box-center" v-if="page === 2">
            <page-two></page-two>
        </div>
         <div class="box-center" v-if="page === 3">
            <page-three></page-three>
        </div>
      </div>
    </dv-border-box-8>
  </div>
</template>

<script>
import right from "./components/right.vue";
import left from "./components/left.vue";
import pageTwo from "./components/pageTwo.vue";
import pageThree from "./components/pageThree.vue";
export default {
  components: {
    right,
    left,
    pageTwo,
    pageThree
  },
  data() {
    return {
      page: 1,
      
    };
  },
  methods: {
    changePath() {
      this.$router.push('house')
    }
  }
};
</script>

<style scoped lang="scss">
/* @import "left.css"; */
.station-interior {
  position: absolute;
  width: 1373px;
  height: 685px;
  top: 214px;
  left: 280px;
  z-index: 99;
  background: rgba(11, 11, 11, 0.4);
}
.box-content {
  padding: 26px 37px;
  
}
.station-msg {
  display: flex;
  div {
    color: #fff;
    font-size: 16px;
    margin-right: 10px;
  }
}
.station-address {
  display: flex;
  margin-top: 16px;
  margin-right: 10px;
  .item {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 16px;
    margin-right: 24px;
    img {
      width: 16px;
      height: 16px;
    }
    span {
      margin-left: 6px;
    }
  }
}
.line {
  width: 802px;
  height: 0px;
  margin-top: 15px;
  opacity: 0.4;
  border: 1px solid #ffffff;
}
.box-nav {
  display: flex;
  color: #949494;
  font-size: 18px;
  align-items: center;
  margin-top: 16px;
  .nav-btn {
    margin-right: 13px;
    cursor: pointer;
  }
  .icon-shu {
    width: 2px;
    height: 15px;
    background-color: #949494;
    margin-right: 13px;
  }
  .nav-btn-active {
    color: #10f492;
  }
}
.box-center {
  display: flex;
  margin-top: 20px;
  margin-left: 13px;
  .right {
    margin-left: 118px;
  }
  
}
</style>