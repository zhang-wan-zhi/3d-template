<template>
  <div class="monitoring">
    <div class="monitoring-head">
      <div class="text">预览</div>
      <div class="line"></div>
      <div class="text">回放</div>
      <div class="line"></div>
      <div class="text">日志</div>
      <div class="line"></div>
      <div class="text">配置</div>
    </div>
    <div class="cascader-monitoring">
      <cascader :data="data" :tier="''"></cascader>
    </div>
    <div class="monitoring-center">
      <img src="../../assets/img/img1.png" alt="">
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
          label: "新安江大门 ",
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
                      label: "IPCamera 02",
                      checked: false,
                      children: [],
                    },
                    {
                      label: "IPCamera 03",
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
          label: "建德市 ",
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
                      label: "IPCamera 04",
                      checked: false,
                      children: [],
                    },
                    {
                      label: "IPCamera 05",
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
.monitoring {
  .monitoring-head {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    width: 262px;
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
  .cascader-monitoring {
    position: absolute;
    left: 72px;
    top: 261px;
    z-index: 999;
  }
  .monitoring-center {
    position: absolute;
    width: 1187px;
    height: 666px;
    left: 380px;
    top: 215px;
    z-index: 999;
    background-color: rgba(0,0,0,0.5);
  }
}
</style>