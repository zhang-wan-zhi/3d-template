<template>
  <div  class="chartPie"></div>
</template>

<script>
import {merge} from 'lodash-es'

export default {
  props: {
    optionData: Object
  },
  data() {
    return {
      myChart: "" ,
      option: {
        title: {
          text: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          backgroundColor: 'rgba(0,0,0,0.6)',
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          show: false,
          orient: "horizontal",
          y: "bottom",
          textStyle: {
            color: "#999",
            fontSize: this.echartsSize(14)
          },
          itemWidth: this.echartsSize(14),
          itemHeight: this.echartsSize(14),
          type: "scroll",
          pageIconSize: "10",
          pageTextStyle: {
            color: "#999"
          },
          pageIconColor: "#AAA",
          pageIconInactiveColor: "#2f4554"
        },
        color: ['#0263FF', '#FF7723', '#77387C', '#8E30FF'],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["0%", "50%"],
            center: ['50%', '50%'],
            avoidLabelOverlap: true,
            label: {
              normal: {
                formatter: "{b}",
                fontSize: this.echartsSize(14)
              },
              position: "outer"
            },
            labelLine: {
              length: this.echartsSize(10),
              length2: this.echartsSize(20)
            },
            data: [],
            itemStyle: {
              emphasis: {
                shadowBlur: this.echartsSize(10),
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    renderChart() {
      let option = merge({},this.option, this.optionData)
      this.myChart = this.$echarts.init(this.$el);
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
.chartPie {
  width: 100%;
  height: 100%;
}
</style>
