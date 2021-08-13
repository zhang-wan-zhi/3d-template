<template>
  <div class="mod-left">
    <div class="container">
      <div class="body">
        <div class="wrapper">
          <img
            class="icon"
            src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5acf300fc1911eb994a47a1d99ec15c.png"
          />
          <span class="tag">门禁(无)</span>
          <img
            class="picture"
            src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5da1d80fc1911ebbd233f485329b080.png"
          />
          <div class="wrapper-inner">
            <img
              class="bg"
              src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5cd7350fc1911eb9ae1efb951a21ba9.png"
            />
            <div class="group">
              <div class="view-i0">
                <img
                  class="icon-guard"
                  src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5ccfe20fc1911eba5b3513c73cb34d0.png"
                />
                <span class="label">UPS正常</span>
              </div>
              <div class="view-i1">
                <img
                  class="icon-guard-1"
                  src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5d25550fc1911ebac84a1cd4f060291.png"
                />
                <span class="word">PDU正常</span>
              </div>
            </div>
            <div class="group-1">
              <span class="tag-1">监控参数</span>
            </div>
            <div class="group-2">
              <div class="view-1">
                <span class="label-1">电池电流：1.4A</span>
                <span class="word-1">电池温度：36.5°</span>
              </div>
              <div class="view-2">
                <span class="info">交流输入电压：229.3V</span>
                <span class="tag-2">UPS输出电压：221.0V</span>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper-1">
          <span class="label-2">环境温度：0.0°</span>
          <span class="meta">环境百分比温度：0.0%</span>
        </div>
        <div class="wrapper-2">
          <span class="subtitle">网络设备状态</span>
        </div>
      </div>
      <div class="footer">
        <div class="empty" />
        <div class="wrapper-3">
          <div class="wrapper-inner-i0">
            <div class="grid">
              <div class="col">
                <span class="word-2">测震数采</span>
                <span class="tag-3">(10.33.162.2)</span>
              </div>
              <div class="col2">
                <img
                  class="shop-logo"
                  src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5e12260fc1911ebaae2757e273eea4a.png"
                />
                <span class="label-3">门禁</span>
                <span class="word-3">(10.33.162.2)</span>
              </div>
            </div>
            <div class="group-3">
              <img
                class="icon-time"
                src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5d1e020fc1911ebb173190cbbc85cc8.png"
              />
              <span class="info-1">无监控摄像头</span>
            </div>
          </div>
          <div class="wrapper-inner-i1">
            <div class="grid-1">
              <div class="col-i0">
                <span class="tag-4">视频监控</span>
                <span class="label-4">(10.33.162.2)</span>
              </div>
              <div class="col-i1">
                <span class="meta-1">省局路由网关</span>
                <span class="word-4">(10.33.162.2)</span>
              </div>
            </div>
            <div class="group-4">
              <img
                class="icon-time-1"
                src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5d40300fc1911ebbac6a7555bbe52e0.png"
              />
              <span class="subtitle-1">无监控摄像头</span>
            </div>
          </div>
        </div>
      </div>
      <img
        class="icon-circle"
        src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5da4490fc1911eb8e338f913764a563.png"
      />
      <img
        class="icon-circle-1"
        src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5db07e0fc1911eba775d7eb76a1be07.png"
      />
      <img
        class="icon-circle-2"
        src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5dae0d0fc1911ebb97755d81973a958.png"
      />
      <img
        class="icon-circle-3"
        src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5db07e0fc1911eb8d5edf9e9a24b09b.png"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.mod-left {
  width: 532px;
  height: 490px;
}

.container {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}

.body {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  width: 532px;
  height: 253px;
}

.wrapper {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: row;
}

.icon {
  position: absolute;
  top: 74px;
  left: 29px;
  width: 48px;
  height: 48px;
}

.tag {
  position: absolute;
  top: 37px;
  left: 20px;
  text-align: left;
  white-space: nowrap;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
}

.picture {
  position: relative;
  margin-top: -4px;
  margin-right: 23px;
  width: 106px;
  height: 156px;
}

.wrapper-inner {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}

.bg {
  position: relative;
  width: 400px;
  height: 24px;
}

.group {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
  margin-left: 3px;
}

.view-i0 {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 48px;
}

.icon-guard {
  margin-right: 8px;
  width: 16px;
  height: 16px;
}

.label {
  text-align: left;
  line-height: 14px;
  white-space: nowrap;
  color: #10f492;
  font-size: 14px;
  font-weight: 400;
}

.view-i1 {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.icon-guard-1 {
  margin-right: 8px;
  width: 16px;
  height: 16px;
}

.word {
  text-align: left;
  line-height: 14px;
  white-space: nowrap;
  color: #10f492;
  font-size: 14px;
  font-weight: 400;
}

.group-1 {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 400px;
  height: 24px;
}

.tag-1 {
  position: relative;
  margin-top: 4px;
  margin-left: 8px;
  text-align: left;
  white-space: nowrap;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
}

.view {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: row;
  justify-content: center;
}

.circle {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-1 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-2 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-3 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-4 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-5 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-6 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-7 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-8 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-9 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-10 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-11 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-12 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-13 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-14 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-15 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-16 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-17 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-18 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-19 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-20 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-21 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-22 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-23 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-24 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-25 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-26 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-27 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-28 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-29 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-30 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-31 {
  margin-right: 10px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-32 {
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.group-2 {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 12px;
  margin-left: 8px;
  line-height: 16px;
  white-space: nowrap;
}

.view-1 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  height: 19px;
}

.label-1 {
  margin-right: 83px;
  text-align: left;
  color: #feffff;
  font-size: 16px;
  font-weight: 400;
}

.word-1 {
  text-align: left;
  color: #feffff;
  font-size: 16px;
  font-weight: 400;
}

.view-2 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  height: 19px;
}

.info {
  margin-right: 33px;
  text-align: left;
  color: #feffff;
  font-size: 16px;
  font-weight: 400;
}

.tag-2 {
  text-align: left;
  color: #feffff;
  font-size: 16px;
  font-weight: 400;
}

.wrapper-1 {
  display: flex;
  position: relative;
  align-items: center;
  align-self: flex-end;
  flex-direction: row;
  margin-top: 10px;
  margin-right: 33px;
  height: 19px;
  line-height: 16px;
  white-space: nowrap;
}

.label-2 {
  margin-right: 89px;
  text-align: left;
  color: #feffff;
  font-size: 16px;
  font-weight: 400;
}

.meta {
  text-align: left;
  color: #feffff;
  font-size: 16px;
  font-weight: 400;
}

.wrapper-2 {
  display: flex;
  position: relative;
  align-items: flex-start;
  align-self: center;
  flex-direction: row;
  margin-top: 11px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 529px;
  height: 24px;
}

.subtitle {
  position: relative;
  margin-top: 4px;
  margin-left: 10px;
  text-align: left;
  white-space: nowrap;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
}

.wrapper-inner-1 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-left: 8px;
}

.circle-33 {
  margin-right: 14px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-34 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-35 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-36 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-37 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-38 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-39 {
  margin-right: 14px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-40 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-41 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-42 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-43 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-44 {
  margin-right: 14px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-45 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-46 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-47 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-48 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-49 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-50 {
  margin-right: 14px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-51 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-52 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-53 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-54 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-55 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-56 {
  margin-right: 14px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-57 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-58 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-59 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-60 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-61 {
  margin-right: 14px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-62 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-63 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-64 {
  margin-right: 13px;
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.circle-65 {
  background-color: #ffffff;
  width: 2px;
  height: 2px;
}

.footer {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 2px;
}

.empty {
  position: relative;
  margin-top: -2px;
  margin-left: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 483px;
  height: 2px;
}

.wrapper-3 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 13px;
}

.wrapper-inner-i0 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 13px;
}

.grid {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-left: 22px;
  white-space: nowrap;
}

.col {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 15px;
  background-size: contain;
  background-image: url(https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5e20cc0fc1911eb9d16a9152abf5451.png);
  width: 103px;
  height: 53px;
}

.word-2 {
  position: relative;
  margin-top: 5px;
  margin-left: 16px;
  max-width: 71px;
  height: 19px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 19px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
}

.tag-3 {
  position: relative;
  align-self: center;
  margin-top: 6px;
  max-width: 97px;
  height: 19px;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
}

.col2 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  width: 103px;
  height: 53px;
}

.shop-logo {
  position: absolute;
  top: 0;
  align-self: center;
  width: 103px;
  height: 53px;
  white-space: normal;
}

.label-3 {
  position: relative;
  margin-top: 5px;
  max-width: 91px;
  height: 19px;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
}

.word-3 {
  position: relative;
  margin-top: 6px;
  text-align: left;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
}

.group-3 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  margin-top: 33px;
  background-color: #38393e;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 245px;
  height: 136px;
}

.icon-time {
  position: relative;
  margin-top: 30px;
  width: 28px;
  height: 26px;
}

.info-1 {
  position: relative;
  margin-top: 16px;
  max-width: 233px;
  height: 22px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 22px;
  white-space: nowrap;
  color: #737373;
  font-size: 16px;
  font-weight: 400;
}

.wrapper-inner-i1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 251px;
}

.grid-1 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  white-space: nowrap;
}

.col-i0 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 15px;
  background-size: contain;
  background-image: url(https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5e80030fc1911eb876bf94c77aee238.png);
  width: 103px;
  height: 53px;
}

.tag-4 {
  position: relative;
  margin-top: 5px;
  margin-left: 16px;
  max-width: 71px;
  height: 19px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 19px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
}

.label-4 {
  position: relative;
  align-self: center;
  margin-top: 6px;
  max-width: 97px;
  height: 19px;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
}

.col-i1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-size: contain;
  background-image: url(https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/c5e938b0fc1911eb8cf483d82cb1cefa.png);
  width: 103px;
  height: 53px;
}

.meta-1 {
  position: relative;
  margin-top: 5px;
  max-width: 103px;
  height: 19px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 19px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
}

.word-4 {
  position: relative;
  align-self: center;
  margin-top: 6px;
  max-width: 97px;
  height: 19px;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
}

.group-4 {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: column;
  margin-top: 33px;
  background-color: #38393e;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 247px;
  height: 136px;
}

.icon-time-1 {
  position: relative;
  margin-top: 32px;
  width: 27px;
  height: 27px;
}

.subtitle-1 {
  position: relative;
  margin-top: 15px;
  max-width: 235px;
  height: 22px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 22px;
  white-space: nowrap;
  color: #737373;
  font-size: 16px;
  font-weight: 400;
}

.icon-circle {
  position: absolute;
  top: 248px;
  left: 70px;
  width: 8px;
  height: 8px;
}

.icon-circle-1 {
  position: absolute;
  top: 248px;
  left: 188px;
  width: 8px;
  height: 8px;
}

.icon-circle-2 {
  position: absolute;
  top: 248px;
  right: 218px;
  width: 8px;
  height: 8px;
}

.icon-circle-3 {
  position: absolute;
  top: 248px;
  right: 100px;
  width: 8px;
  height: 8px;
}
</style>