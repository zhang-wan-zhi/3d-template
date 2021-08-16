<template>
  <div class="page-divree">
    <load-modules v-if="showModules" @close="close"></load-modules>
    <div class="table-hd">
      <!-- 表头 -->
      <div>序号</div>
      <div>设备代码</div>
      <div>设备名称</div>
      <div>设备类型</div>
      <div>设备型号</div>
      <div>出厂编号</div>
      <div>品牌</div>
      <div>IP地址</div>
      <div>采购时间</div>
      <div>专业设备</div>
      <div>安装时间</div>
      <div>安装人员</div>
    </div>
    <div class="th">
      <div class="mod">
        <div class="floor-bg-wrapper" @click="showModules = true">
          <span class="num">1</span> <span class="num-1">24140022</span>
          <span class="tag">UPS主机</span> <span class="label">通用</span>
          <span class="kva">1KVA</span>
          <span class="tel">100617-26260019</span>
          <span class="word">山特</span> <span class="tag-1">否</span>
          <span class="label-1">2016/12/19 10:00:00</span>
          <img
            class="floor-bg"
            src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/57ce7c50fc2d11eb976b09b058188bbc.png"
          />
        </div>
      </div>
    </div>
    <div class="th">
      <div class="mod">
        <div class="floor-bg-wrapper">
          <span class="num">1</span> <span class="num-1">24140022</span>
          <span class="tag">UPS主机</span> <span class="label">通用</span>
          <span class="kva">1KVA</span>
          <span class="tel">100617-26260019</span>
          <span class="word">山特</span> <span class="tag-1">否</span>
          <span class="label-1">2016/12/19 10:00:00</span>
          <img
            class="floor-bg"
            src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/57ce7c50fc2d11eb976b09b058188bbc.png"
          />
        </div>
      </div>
    </div>
    <div class="th">
      <div class="mod">
        <div class="floor-bg-wrapper">
          <span class="num">1</span> <span class="num-1">24140022</span>
          <span class="tag">UPS主机</span> <span class="label">通用</span>
          <span class="kva">1KVA</span>
          <span class="tel">100617-26260019</span>
          <span class="word">山特</span> <span class="tag-1">否</span>
          <span class="label-1">2016/12/19 10:00:00</span>
          <img
            class="floor-bg"
            src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/57ce7c50fc2d11eb976b09b058188bbc.png"
          />
        </div>
      </div>
    </div>
    <div class="th">
      <div class="mod">
        <div class="floor-bg-wrapper">
          <span class="num">1</span> <span class="num-1">24140022</span>
          <span class="tag">UPS主机</span> <span class="label">通用</span>
          <span class="kva">1KVA</span>
          <span class="tel">100617-26260019</span>
          <span class="word">山特</span> <span class="tag-1">否</span>
          <span class="label-1">2016/12/19 10:00:00</span>
          <img
            class="floor-bg"
            src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/57ce7c50fc2d11eb976b09b058188bbc.png"
          />
        </div>
      </div>
    </div>
    <div class="th">
      <div class="mod">
        <div class="floor-bg-wrapper">
          <span class="num">1</span> <span class="num-1">24140022</span>
          <span class="tag">UPS主机</span> <span class="label">通用</span>
          <span class="kva">1KVA</span>
          <span class="tel">100617-26260019</span>
          <span class="word">山特</span> <span class="tag-1">否</span>
          <span class="label-1">2016/12/19 10:00:00</span>
          <img
            class="floor-bg"
            src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/57ce7c50fc2d11eb976b09b058188bbc.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadModules from '../../../components/LoadModules/index.vue'
export default {
  components: {
    LoadModules
  },
  data() {
    return {
      showModules: false
    }
  },
  methods: {
    close() {
      this.showModules = false
    }
  }
};
</script>

<style lang="scss" scoped>
.page-divree {
  .table-hd {
    display: flex;
    justify-content: space-around;
    width: 1298px;
    height: 24px;
    color: #fff;
    background-color: rgba($color: #ccc, $alpha: 0.5);
  }
  .th {
      margin-top: 16px;
    .mod {
      width: 1298px;
      height: 25px;
      line-height: 19px;
      white-space: nowrap;
    }

    .floor-bg-wrapper {
      display: flex;
      position: relative;
      align-items: flex-end;
      flex-direction: row;
      cursor: pointer;
    }

    .num {
      position: absolute;
      top: 3px;
      left: 19px;
      text-align: center;
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
    }

    .num-1 {
      position: absolute;
      top: 3px;
      left: 45px;
      text-align: center;
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
    }

    .tag {
      position: absolute;
      top: 3px;
      left: 212px;
      text-align: center;
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
    }

    .label {
      position: absolute;
      top: 3px;
      left: 374px;
      text-align: center;
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
    }

    .kva {
      position: absolute;
      top: 3px;
      left: 477px;
      text-align: center;
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
    }

    .tel {
      position: absolute;
      top: 3px;
      left: 578px;
      text-align: center;
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
    }

    .word {
      position: absolute;
      top: 3px;
      right: 512px;
      text-align: center;
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
    }

    .tag-1 {
      position: absolute;
      top: 3px;
      right: 251px;
      text-align: center;
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
    }

    .label-1 {
      position: absolute;
      top: 3px;
      right: 250px;
      text-align: center;
      white-space: pre;
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
    }

    .floor-bg {
      position: relative;
      width: 1298px;
      height: 25px;
      line-height: NaNpx;
      white-space: normal;
    }
  }
}
</style>