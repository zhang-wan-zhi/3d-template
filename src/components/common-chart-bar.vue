<template>
  <div :id="idName" class="chartBar"></div>
</template>

<script>
import {merge} from 'lodash-es'

export default {
  props: {
    idName: String,
    optionData: Object
  },
  data() {
    return {
      myChart: "",
      option: {
        grid: {
          top: this.echartsSize(30),
          right: this.echartsSize(40),
          left: this.echartsSize(50),
          bottom: this.echartsSize(40)
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: 'rgba(0,0,0,0.6)',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          textStyle: {
            color: "#d7e3ff",
            fontSize:12,
          },
          itemWidth: 16,
          itemHeight: 16,
          bottom:"bottom"
        },
        color: ['#387BFF'],
        xAxis: [
          {
            name: "",
            type: "category",
            nameTextStyle:{
              fontSize: 12,
              color: "#999",
            },
            data: [],
            axisLabel: {
              interval: 0,
              rotate:0,
              formatter: "{value}",
              margin: this.echartsSize(8),
              textStyle: {
                fontSize: this.echartsSize(12),
                color: "#999",
              } //设置x轴线字体的设置
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#4D4D4D'
              }
            },
            axisTick: {
              show:false
            }
          }
        ],
        yAxis: [
          {
            name: "",
            type: "value",
            nameTextStyle:{
              fontSize: this.echartsSize(12),
              color: "#999",
            },
            axisLabel: {
              margin: this.echartsSize(8),
              textStyle: {
                fontSize: this.echartsSize(12),
                color: "#999",
              },
            },
            //设置轴线的属性
            axisLine: {
              show:false,
            },
            axisTick: {
              show:false
            },
            // 控制背景网格线是否显示
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                color: ['#4D4D4D'],
                width: 1,
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            data: [],
            type: "bar",
            barMinWidth: "8",
            barMaxWidth: "20",
            itemStyle: {
              barBorderRadius: [5, 5, 0, 0]
            },
            label: {
              show: true,
              color: "#999",
              fontSize: this.echartsSize(12),
              position: "top"
            }
          }
        ]
      }
    };
  },
  methods: {
    renderChart() {
      let option = merge({},this.option,this.optionData)
      this.myChart = this.$echarts.init(document.getElementById(this.idName));
      this.myChart.setOption(option);
      this.myChart.off("click"); //阻止叠加触发
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    }
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    optionData: {
      handler: function() {
        this.renderChart();
      },
      deep: true
    }
  }
};
</script>
<style scoped>
.chartBar {
  width: 100%;
  height: 100%;
}
</style>
