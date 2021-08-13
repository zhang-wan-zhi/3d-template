<template>
  <div class="page2">
    <div class="left">
      <div class="title-page2">近一年的高频故障统计</div>
      <div class="left-emain" id="left-emain"></div>
    </div>
    <div class="right">
      <div class="title-page2">近一年的高频故障统计</div>
      <div class="ul-gz">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :color="activity.color"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import { GridComponent, TitleComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([GridComponent, LineChart, CanvasRenderer, TitleComponent]);

export default {
  data() {
    return {
      activities: [
        {
          content: "20-10-04 00:45:29 台站交流停电报警",
          timestamp: "2018-04-12 20:46",
          color: "#FB494B",
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
          color: "#FB494B",
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          color: "#FB494B",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
          color: "#FB494B",
        },
      ],
    };
  },
  methods: {
    into() {
      var chartDom = document.getElementById("left-emain");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "供电数据",
          bottom: "0",
          left: "50%",
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [606, 932, 901, 600, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.into();
  },
};
</script>

<style lang="scss" scoped>
.page2 {
  display: flex;
  .left {
    width: 532px;
    height: 490px;
    .left-emain {
      width: 523px;
      height: 386px;
    }
  }
  .right {
    width: 532px;
    height: 490px;
    margin-left: 118px;
    .ul-gz {
      margin-top: 26px;
    }
  }
  .title-page2 {
    width: 529px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    letter-spacing: 2px;
    background-color: rgba($color: #ccc, $alpha: 0.5);
  }
}
</style>