<template>
  <div class="pandect">
    <div class="top-row">
      <!-- 设备在线率 -->
      <border-box title="设备在线率" class="equipmentOnline wrap">
        <div class="wrap-content">
          <div class="equipment-total">
            <div>292</div>
            <div>设备总数</div>
          </div>
          <chart-pie :optionData="equipmentOnline" />
        </div>
      </border-box>
      <!-- 人员统计 -->
      <div class="awards">
        <div class="awards-details ">
          <div class="awards-item" v-for="(item,index) in totalNum" :key="index">
            <p class="award-title">{{item.title}}</p>
            <div class="award-content">
              <img class="award-icon" :src="item.img" />
              <span
                class="awards-times"
                v-for="(i,index) in item.num"
                :key="index"
              >{{item.num[index]}}</span>
              <span class="award-unit" v-show="item.title !== '班级数'">人</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 门禁 -->
      <border-box class="access wrap" title="校园门禁">
          <div class="wrap-content">
          <div class="access-statistics">
            <div class="access-statistics-item">
              <div
                v-if="access.series[0].data.length"
              >{{access.series[0].data[0].value + access.series[0].data[1].value}}</div>
              <div>总通过人次</div>
            </div>
            <div class="access-statistics-item">
              <div v-if="access.series[0].data.length">{{access.series[0].data[0].value}}</div>
              <div>正常通过次数</div>
            </div>
            <div class="access-statistics-item">
              <div v-if="access.series[0].data.length">{{access.series[0].data[1].value}}</div>
              <div>异常报警次数</div>
            </div>
          </div>
          <chart-pie class="access-chartPie" :idName="'access'" :optionData="access" />
        </div>
      </border-box> 
    </div>
    <div class="pandect-two">
      <div>
        <!-- 设备类型 -->
        <div class="equipmentType wrap">
          <div class="jiao left-top"></div>
          <div class="wrap-title">设备类型</div>
          <div class="wrap-content">
            <div v-for="(item,index) in equipmentOType" :key="index">
              <img :src="item.img" />
              <div>
                <p>{{item.name}}</p>
                <p v-show="item.num">
                  <span>{{item.num}}</span>
                  <span>台</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 消费 -->
        <div class="consumption wrap">
          <div class="jiao left-top"></div>
          <div class="wrap-title">消费</div>
          <div class="wrap-content">
            <div class="left-content">
              <div>
                <p>月消费金额</p>
                <p>
                  <span>723.98</span>
                  <span class="times">万元</span>
                </p>
              </div>
              <div>
                <p>月消费次数</p>
                <p>
                  <span>1212</span>
                  <span class="times">次</span>
                </p>
              </div>
            </div>
            <div class="right-content">
              <chartPie :idName="'chartPie'" :optionData="consumptionData" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <!-- 平安校园 -->
        <div class="campus wrap">
          <div class="jiao left-top"></div>
          <div class="jiao right-bottom"></div>
          <div class="wrap-title">平安校园</div>
          <div class="wrap-content">
            <el-carousel arrow="never">
              <el-carousel-item class="campus-item" >
                <div v-for="(v, i) in campus" :key="'campus-item'+i">
                  <div class="campus-name">
                    <img src="../../assets/img/pandect/camera-icon1.png" />
                    <span>{{v.name}}</span>
                    <img src="../../assets/img/pandect/camera-icon2.png" />
                  </div>
                  <div class="campus-url">
                    <img class="videoElement" :src="v.poster" alt="">
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="school"></div> -->
  </div>
</template>

<script>
import chartPie from "@/components/common-chart-pie";
import borderBox from '@/components/border-box'

export default {
  name: "pandect",
  components: {
    chartPie, borderBox
  },
  data() {
    return {
      // 设备在线率
      equipmentOnline: {
        legend: {
          show: true,
          orient: "vertical",
          itemGap: Number(this.echartsSize(12)),
          itemWidth: Number(this.echartsSize(12)),
          itemHeight: Number(this.echartsSize(12)),
          textStyle: {
            color: "#fff",
            fontSize: this.echartsSize(12)
          },
          right: '10%',
          top: 'center',
          formatter: name => {
            let sum = 0;
            for (const v of this.equipmentOnline.series[0].data) {
              sum += v.value;
            }
            for (const k of this.equipmentOnline.series[0].data) {
              if (k.name === name) {
                return `${name}    ${k.value}    ${(
                  (k.value / sum) *
                  100
                ).toFixed(0)}%`;
              }
            }
          }
        },
        series: [{
          center: ["20%", "50%"],
          radius: ["70%", "80%"],
          label: {
            show: false,
            normal: {show: false}
          },
          labelLine:{
            show:false,
          },
          data: [
            { name: "设备在线", itemStyle: { color: "#07D68C" }, value: 609 },
            { name: "设备离线", itemStyle: { color: "#6699FF" }, value: 30 },
            { name: "设备故障", itemStyle: { color: "#FD5A93" }, value: 0 }
          ]
        }]
      },
      // 人员统计
      totalNum: [
        {
          title: "学校总人数",
          img: require("@/assets/img/pandect/num-icon1.png"),
          num: [4,0,8,3]
        },
        {
          title: "教师人数",
          img: require("@/assets/img/pandect/num-icon2.png"),
          num: [2,2,8]
        },
        {
          title: "学生人数",
          img: require("@/assets/img/pandect/num-icon3.png"),
          num: [3,3,7,8]
        },
        {
          title: "班级数",
          img: require("@/assets/img/pandect/num-icon4.png"),
          num: [4,9]
        }
      ],
      // 门禁
      access: {
        
        series:[
          {
            center: ["50%", "50%"],
            radius: ["30%", "60%"],
            roseType: "radius",
            label: {
              padding: [0, -100, 20, -100],
              textStyle: {fontSize: this.echartsSize(14)},
              formatter: params => {
                return `${params.name}  ${params.percent}%`;
              }
            },
            data: [
              { name: "正常通过", itemStyle: { color: "#07D68C" }, value: 114941 },
              { name: "异常报警", itemStyle: { color: "#FEBC31" }, value:21007 }
            ]
          }
        ],
      },
      // 平安校园
      campus: [
         {
            name: '周界西北',
            url: `1.mp4`,
            poster: require('../../assets/img/pandect/camera.png'),
            id: 1,
          },{
            name: '周界东南',
            url: `2.mp4`,
            poster: require('../../assets/img/pandect/camera.png'),
            id: 1,
          },{
            name: '南门东北角',
            url: `3.mp4`,
            poster: require('../../assets/img/pandect/camera.png'),
            id: 1,
          },{
            name: '足球场主席台',
            url: `4.mp4`,
            poster: require('../../assets/img/pandect/camera.png'),
            id: 1,
          },{
            name: '西门东南角',
            url: `5.mp4`,
            poster: require('../../assets/img/pandect/camera.png'),
            id: 1,
          },{
            name: '西门周界',
            url: `1.mp4`,
            poster: require('../../assets/img/pandect/camera.png'),
            id: 1,
          }
      ],
      //设备类型
      equipmentOType: [
        {
          name: "一体机",
          img: require("@/assets/img/pandect/type-icon1.png"),
          num: 54
        },
        {
          name: "智慧黑板",
          img:require("@/assets/img/pandect/type-icon4.png"),
          num: 52
        },
        {
          name: "电子班牌",
          img: require("@/assets/img/pandect/type-icon3.png"),
          num: 129
        },
        {
          name: "摄像头",
          img: require("@/assets/img/pandect/type-icon2.png"),
          num: 369
        },
        {
          name: "消费机",
          img: require("@/assets/img/pandect/type-icon5.png"),
          num: 31
        },
        {
          name: "录播教室",
          img: require("@/assets/img/pandect/type-icon6.png"),
          num: 12
        }
      ],
      //消费
      consumptionData: {
        legend:{ show: false},
        series:[
          {
            center: ["50%", "50%"],
            radius: ["40%", "50%"],
            labelLine: {
              normal: {
                length: this.echartsSize(10),
                length2: this.echartsSize(100),
                lineStyle: {
                  width:this.echartsSize(2),
                  color: "#48476A"
                }
              }
            },
            label: {
              normal: {
                formatter: params => {
                  return (
                    `{a|${params.name }} \n {b|${params.value} 次} {c|${params.percent }%}`
                  );
                },
                padding: [0, -this.echartsSize(100), this.echartsSize(30), -this.echartsSize(100)],
                height: this.echartsSize(50),
                fontSize: 14,
                color: "#3494BD",
                rich: {
                  a: {
                    fontSize: this.echartsSize(12),
                    lineHeight: this.echartsSize(20),
                    color: "#FFA366",
                  },
                  b: {
                    fontSize: this.echartsSize(12),
                    lineHeight: this.echartsSize(20),
                    color: "#FFA366"
                  },
                  c: {
                    fontSize: this.echartsSize(12),
                    lineHeight: this.echartsSize(20),
                    color: "#FFA366"
                  }
                }
              }
            },
            data: [
               {
              name: "初一",
              itemStyle: { color: "#FEBC31" },
              value: 521
            },
            {
              name: "初二",
              itemStyle: { color: "#457DFD" },
              value: 622
            },
            {
              name: "初三",
              itemStyle: { color: "#FD5A93" },
              value: 777
            }
            ]
          }
        ],
      },
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./pandect";

</style>
