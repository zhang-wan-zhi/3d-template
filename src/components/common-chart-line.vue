<template>
  <div :id="idName" class="chartLine"></div>
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
        textStyle: {
          fontSize: 14,
        },
        legend: {
          // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
          orient: 'horizontal',
          // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          x: 'center',
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          y: 0,
          show: true,
          textStyle: {
            color: "#cbcff0"
          },
          itemGap: this.echartsSize(50)
        },
        //  图表距边框的距离,可选值：'百分比'¦ {number}（单位px）
        grid: {
          top: '17%', // 等价于 y: '16%'
          left: '3%',
          right: '8%',
          bottom: '3%',
          containLabel: true
        },
        // 提示框
        tooltip: {
          trigger: 'axis',
          formatter: '{b} : {c}%',
          backgroundColor: 'rgba(0,0,0,0.6)'
        },
        color: ['#00D98A', '#EA9A11', '#2691FF', '#FD3B73'],
        xAxis: [{
          name: '',
          nameTextStyle: {
            fontSize: this.echartsSize(12),
            color: "#999",
          },
          type: 'category',
          axisLine: {
            lineStyle: {
              // 设置x轴颜色
              color: '#4D4D4D'
            }
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: ['#4D4D4D'],
              width: 1,
              type: 'dashed'
            }
          },
          //网格样式
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#4D4D4D'],
              width: 1,
              type: 'dashed'
            }
          },
          axisLabel: {
            margin: this.echartsSize(8),
            textStyle: {
              fontSize: this.echartsSize(12),
              color: "#999",
            },
          },
          // boundaryGap值为false的时候，折线第一个点在y轴上
          boundaryGap: false,
          data: []
        }],
        yAxis: [{
          name: '',
          nameTextStyle: {
            padding: [0, 0, 0, 0], // 四个数字分别为上右下左与原位置距离
            fontSize: this.echartsSize(12),
            color: "#999",
          },
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              fontSize: this.echartsSize(14),
              color: "#999",
            },
          },
          //网格样式
          splitLine: {
            show: false
          }
        }],
        series: [{
          name: '',
          data: [],
          type: 'line',
          symbol: "circle", //折线点设置为实心点
          // 设置折线上圆点大小
          symbolSize: this.echartsSize(6),
          label: {
            normal: {
              show: true,
              color: '#999',
              fontSize: this.echartsSize(14),
              position: 'top'
            }
          }
        }]
      }
    };
  },
  methods: {
    renderChart() {
     const option = merge({},this.option, this.optionData)
      this.myChart = this.$echarts.init(document.getElementById(this.idName));
      this.myChart.setOption(option);
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
.chartLine {
  width: 100%;
  height: 100%;
}
</style>
