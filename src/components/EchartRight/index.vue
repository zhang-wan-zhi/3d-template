<template>
  <div class="echart-right">
    <div class="echart__main" id="echart__main"></div>
    <div class="echart__main2" id="echart__main2"></div>
    <div class="echart__main3" id="echart__main3"></div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import {
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent,
} from "echarts/components";
import { PieChart, LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  TitleComponent,
  GridComponent,
  LineChart,
]);
export default {
  name: "EchartRight",
  methods: {
    intoChart() {
      var chartDom = document.getElementById("echart__main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "台站情况",
          left: "0",
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          bottom: "5%",
          right: "2%",
          textStyle: {
            //图例文字的样式
            color: "#fff",
          },
        },
        series: [
          {
            name: "台站情况",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "正常" },
              { value: 735, name: "异常" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    intoChart2() {
      var chartDom = document.getElementById("echart__main2");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "站台类型",
          left: "0",
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          bottom: "5%",
          right: "2%",
          textStyle: {
            //图例文字的样式
            color: "#fff",
          },
        },
        series: [
          {
            name: "台站情况",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "测震" },
              { value: 735, name: "强震" },
              { value: 735, name: "前兆" },
              { value: 735, name: "GNSS" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    intoChart3() {
      var chartDom = document.getElementById("echart__main3");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "故障统计",
          left: "0",
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: {
          type: "category",
          data: [
            "2020-6",
            "2020-7",
            "2020-8",
            "2020-9",
            "2020-10",
            "2020-11",
            "2020-12",
            "2020-8",
            "2020-9",
            "2020-10",
            "2020-11",
            "2020-12",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [10, 15, 20, 14, 8, 16, 14, 20, 14, 8, 16, 14],
            type: "line",
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.intoChart();
    this.intoChart2();
    this.intoChart3();
  },
};
</script>

<style scoped lang="scss">
.echart-right {
  width: 100%;
  height: 100%;
  .echart__main {
    width: 350px;
    height: 239px;
  }
  .echart__main2 {
    width: 350px;
    height: 239px;
  }
  .echart__main3 {
    width: 350px;
    height: 239px;
  }
}
</style>