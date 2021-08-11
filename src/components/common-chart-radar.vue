<template>
  <div :id="idName"></div>
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
        normal: {
          top: this.echartsSize(200),
          left: this.echartsSize(300),
          width: this.echartsSize(500),
          height: this.echartsSize(400),
          zIndex: 6,
          backgroundColor: ""
        },
        color: ["rgba(19, 173, 255, 1)"],
        tooltip: {
          show: true,
          trigger: "item",
          backgroundColor: "rgba(40, 83, 175, 1)", //背景颜色（此时为默认色）
          borderRadius: this.echartsSize(5), //边框圆角
          padding: this.echartsSize(10) //[5, 10, 15, 20] 内边距
        },
        legend: {
          show: true,
          icon: "rect",
          top: "bottom",
          orient: "horizontal",
          itemWidth: this.echartsSize(15), // 图例标记的图形宽度。[ default: 14 ]
          itemHeight: this.echartsSize(5), // 图例标记的图形高度。[ default: 14 ]
          textStyle: {
            fontSize: this.echartsSize(10),
            color: "rgba(188, 204, 239, 1)"
          },
          data: []
        },
        radar: {
          center: ["50%", "50%"],
          radius: "70%",
          startAngle: 90,
          splitNumber: 4,
          shape: "circle",
          splitArea: {
            areaStyle: {
              color: ["RGBA(6, 41, 90, 1)"] // transparent为透明
            }
          },
          axisLabel: {
            show: false,
            fontSize: this.echartsSize(18),
            color: "#fff",
            fontStyle: "normal",
            fontWeight: "normal"
          },
          axisLine: {
            show: false, //刻度对标线
            lineStyle: {
              color: "white"
            }
          },
          name: {
            formatter: '{value}',
            textStyle: {
              fontSize: this.echartsSize(12), //外圈标签字体大小
              color: 'rgba(71, 156, 242, 1)' //外圈标签字体颜色
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "RGBA(73, 91, 117, 1)" //圈圈颜色
            }
          },
          indicator: []
        },
        series: [
          {
            name: "",
            type: "radar",
            symbol: "circle",
            symbolSize: this.echartsSize(5),
            areaStyle: {
              normal: {
                color: "RGBA(38, 56, 156, 0.8)" //区域颜色
              }
            },
            itemStyle: {
              color: "RGBA(179, 179, 255, 1)",
              borderColor: "RGBA(74, 98, 139, 0.5)",
              borderWidth: this.echartsSize(7) //连接点
            },
            lineStyle: {
              normal: {
                type: "solid",
                color: "rgba(119, 119, 255, 1)",
                width: this.echartsSize(2) //连接线
              }
            },
            data: []
          }
        ]
      }

    };
  },
  methods: {
    renderChart() {

      const option = merge({},this.option,this.optionData)
      this.myChart = this.$echarts.init(document.getElementById(this.idName));
      this.myChart.setOption(option);

      this.myChart.on("mouseover", function(params) {
        var isSelectedDot = params.event.target.__dimIdx;
        _this.$emit("openAbsenteeismDot", isSelectedDot);
        if (isSelectedDot == undefined) return;
        //做鼠标滑过拐点的操作
      });

      window.addEventListener("resize", function() {
        _this.myChart.resize();
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
.echarts {
  width: 100%;
  height: 100%;
}
.title {
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
}
</style>
