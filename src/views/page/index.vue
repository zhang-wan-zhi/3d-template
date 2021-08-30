<template>
  <div>
    <div class="cascader-home">
      <!-- <cascader :data="data"></cascader> -->
      <stationsort></stationsort>
    </div>
    <div class="page">
      <timemessage></timemessage>
      <!-- <div class="btn-page">
        <div
          :class="['btn', checked == 0 ? 'btn-active' : '']"
          @click="check(0)"
        >
          台站总况
        </div>
        <div
          :class="['btn', checked == 1 ? 'btn-active' : '']"
          @click="check(1)"
        >
          台站分布
        </div>
      </div> -->
      <!-- 台站总况 -->
      <!-- <div class="total-case">
        <echart-right></echart-right>
      </div> -->
     <!--  <div class="distribution" v-if="checked == 1">
        <distribution></distribution>
      </div> -->
    </div>
  </div>
</template>

<script>
import EchartRight from "../../components/EchartRight/index.vue";
import distribution from "./components/distribution.vue";
import stationsort from "./components/stationsort.vue";
import timemessage from "./components/timemessage.vue";
import cascader from "../../components/cascader/index.vue";
export default {
  components: {
    EchartRight,
    distribution,
    cascader,
    stationsort,
    timemessage
  },
  data() {
    return {
      checked: 0,
      data: [
        {
          label: "浙江省",
          checked: true,
          children: [
            {
              label: "杭州市",
              checked: false,
              children: [
                {
                  label: "西湖区",
                  checked: false,
                  children: [
                    {
                      label: "杭州老和山地震台",
                      checked: false,
                      children: [],
                    },
                    {
                      label: "杭州植物园地震台",
                      checked: false,
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              label: "建德市",
              checked: false,
              children: [],
            },
          ],
        },
      ],
    };
  },
  methods: {
    check(e) {
      this.checked = e;
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.cascader-home {
  position: absolute;
  left: 72px;
  top: 175px;
  z-index: 999;
}
.page {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 350px;
  right: 72px;
  top: 173px;
  z-index: 999;
  .btn-page {
    display: flex;
    width: 160px;
    height: 28px;
    .btn {
      width: 80px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      font-size: 16px;
      color: #fff;
      background: #797979;
      cursor: pointer;
    }
    .btn-active {
      color: #000;
      background-color: #56ccf2;
    }
  }
  .total-case {
    width: 350px;
    height: 717px;
    margin-top: 12px;
    background: rgba(24, 23, 23, 0.6);
    border: 1px dashed #434343;
  }
  .distribution {
    margin-top: 12px;
  }
}
</style>