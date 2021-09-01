<template>
  <div class="timemessage">
    <img src="../../../assets/img/page/timetitle.png" alt="" />
    <!-- <div
      class="tm-item"
      v-for="item in showLists"
      :key="item.id"
    >
      <div class="tm-item-title">
        <div class="tm-point"></div>
        <div class="tm-text">台站故障</div>
        <div class="tm-time">{{ item.id }}</div>
      </div>
      <div class="tm-item-center">
        <span>新安江台站暂时无网络通讯</span>
      </div>
    </div> -->
    <sroll-rank
      :config="config"
      style="width: 500px; height: 700px"
    ></sroll-rank>
  </div>
</template>

<script>
import srollRank from "../../../components/srollRank/index.vue";
export default {
  components: {
    srollRank,
  },
  data() {
    return {
      infoLists: [
        {
          id: 0,
          firstDom: false,
        },
        {
          id: 1,
          firstDom: false,
        },
        {
          id: 2,
          firstDom: false,
        },
        {
          id: 3,
          firstDom: false,
        },
        {
          id: 4,
          firstDom: false,
        },
        {
          id: 5,
          firstDom: false,
        },
        {
          id: 6,
          firstDom: false,
        },
      ],
      showLists: [],
      showIndex: 4,
      interval: null,
      config: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 78,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
          {
            name: "信阳",
            value: 45,
          },
          {
            name: "漯河",
            value: 29,
          },
        ],
        rowNum: 4,
      },
    };
  },
  mounted() {
    for (let index = 0; index < 4; index++) {
      this.showLists.push(this.infoLists[index]);
    }
    console.log("this.showLists", this.showLists);
    this.interval = setInterval(this.updataList, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
    this.interval = null;
  },
  methods: {
    updataList() {
      if (this.showIndex == this.infoLists.length) {
        this.showIndex = 0;
        this.showLists.shift();
        this.showLists.push(this.infoLists[this.showIndex]);
        this.showIndex += 1;
      } else {
        this.showLists.shift();
        this.showLists.push(this.infoLists[this.showIndex]);
        this.showIndex += 1;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.timemessage {
  width: 332px;
  height: 726px;
  overflow: hidden;
  img {
    margin-bottom: 21px;
  }
  .tm-item {
    width: 332px;
    height: 112px;
    padding: 10px;
    border: 2px #585ea8 solid;
    margin-bottom: 66px;
    transition: all 0.3;
    .tm-item-title {
      display: flex;
      align-items: center;
      width: 100%;
      height: 30px;
      padding: 10px;
      background: #262954; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #262954,
        #040408
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #262954, #040408);
      .tm-point {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #f29b76;
      }
      .tm-text {
        color: #fff;
        font-size: 18px;
        margin-left: 15px;
      }
      .tm-time {
        color: #848484;
        font-size: 14px;
        margin-left: 120px;
      }
    }
    .tm-item-center {
      width: 100%;
      height: 62px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 20px;
    }
  }
}
</style>