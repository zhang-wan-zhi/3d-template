<template>
  <div class="working">
    <div class="working-head">
      <div class="text">派单</div>
      <div class="line"></div>
      <div class="text">日常任务</div>
      <div class="line"></div>
      <div class="text">仪器交互</div>
      <div class="line"></div>
      <div class="text">观测原理</div>
      <div class="line"></div>
      <div class="text">观测流程</div>
    </div>
    <div class="cascader-working">
      <cascader :data="data" :tier="''"></cascader>
    </div>
    <div class="working-center">
      <img src="../../assets/img/Frame45.png" alt="">
    </div>
  </div>
</template>

<script>
import cascader from "../../components/cascader/index.vue";
export default {
  components: {
    cascader,
  },
  data() {
    return {
      data: [
        {
          label: "派单",
          checked: true,
          children: [
            {
              label: "杭州市",
              checked: true,
              children: [
                {
                  label: "西湖区",
                  checked: true,
                  children: [
                    {
                      label: "我要派单",
                      checked: false,
                      children: [],
                    },
                    {
                      label: "未处理",
                      checked: false,
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              label: "建德市",
              checked: true,
              children: [],
            },
          ],
        },
        {
          label: "日常任务",
          checked: true,
          children: [
            {
              label: "",
              checked: true,
              children: [
                {
                  label: "",
                  checked: true,
                  children: [
                    {
                      label: "日常巡检",
                      checked: false,
                      children: [],
                    },
                    {
                      label: "未处理",
                      checked: false,
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              label: "建德市",
              checked: true,
              children: [],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.working {
  .working-head {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    width: 468px;
    height: 42px;
    padding: 0 20px;
    left: 48px;
    top: 157px;
    border: 1px solid #dedede;
    box-sizing: border-box;
    border-radius: 55px;
    z-index: 999;
    .text {
      font-size: 18px;
      color: #949494;
      cursor: pointer;
    }
    .line {
      width: 0px;
      height: 11px;
      border: 1px solid #b0b0b0;
    }
  }
  .cascader-working {
    position: absolute;
    left: 72px;
    top: 261px;
    z-index: 999;
  }
  .working-center {
    position: absolute;
    width: 1373px;
    height: 694px;
    left: 380px;
    top: 215px;
    z-index: 999;
    background-color: rgba(0,0,0,0.5);
  }
}
</style>