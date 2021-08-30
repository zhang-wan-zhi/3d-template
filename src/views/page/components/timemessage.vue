<template>
  <div class="timemessage">
    <img src="../../../assets/img/page/timetitle.png" alt="" />
    <div
      class="tm-item animate__animated animate__fadeInUp"
      v-for="item in showLists"
      :key="item.id"
    >
      <div class="tm-item-title">
        <div class="tm-point"></div>
        <div class="tm-text">台站故障</div>
        <div class="tm-time">{{item.id}}</div>
      </div>
      <div class="tm-item-center">
        <span>新安江台站暂时无网络通讯</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoLists: [
        {
          id: 0,
        },
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
      ],
      showLists: [],
      showIndex: 4,
    };
  },
  mounted() {
    for (let index = 0; index < 4; index++) {
      this.showLists.push(this.infoLists[index]);
    }
    console.log("this.showLists", this.showLists);
    setInterval(this.updataList,3000)
  },
  methods: {
    updataList() {
      if (this.showIndex == this.infoLists.length) {
        this.showIndex = 0;
        this.showLists.shift();
        this.showLists.push(this.infoLists[this.showIndex]);
        this.showIndex += 1;
        console.log('this.showIndex',this.showLists[0].id,this.showLists[1].id,this.showLists[2].id);
      } else {
        this.showLists.shift();
        this.showLists.push(this.infoLists[this.showIndex]);
        this.showIndex += 1;
        console.log('this.showIndex',this.showLists[0].id,this.showLists[1].id,this.showLists[2].id);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.timemessage {
  img {
    margin-bottom: 21px;
  }
  .tm-item {
    width: 332px;
    height: 112px;
    padding: 10px;
    border: 2px #585ea8 solid;
    margin-bottom: 66px;
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