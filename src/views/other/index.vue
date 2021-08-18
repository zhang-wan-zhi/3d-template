<template>
  <div class="other">
    <div class="other-head">
      <div class="text">值班管理</div>
      <div class="line"></div>
      <div class="text">短信管理</div>
      <div class="line"></div>
      <div class="text">记录管理</div>
      <div class="line"></div>
      <div class="text">配置</div>
      <div class="line"></div>
      <div class="text">其他</div>
    </div>
    <div class="other-head2">
      <img src="../../assets/img/img2.png" alt="" />
    </div>
    <div class="other-center">
      <img src="../../assets/img/Frame8.png" alt="" />
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
.other {
  .other-head {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    width: 432px;
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
  .other-head2 {
    position: absolute;
    width: 1249px;
    height: 42px;
    left: 516px;
    top: 157px;
    z-index: 999;
  }
  .other-center {
    position: absolute;
    width: 1092px;
    height: 650px;
    left: 380px;
    top: 215px;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>