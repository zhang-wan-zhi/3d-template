<template>
  <div class="zwz">
    <div class="mod-1">
      <div class="block">
        <div class="header">PDU设备监控</div>
        <div class="body">
          <div class="container-inner-i0">
            <div class="wrapper-i0">
              <div class="wrapper-inner">
                <img
                  class="picture"
                  src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f82b6750fc1c11ebaae2757e273eea4a.png"
                />
                <img
                  class="image"
                  src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f838adc0fc1c11ebbd233f485329b080.png"
                />
              </div>
              <span class="pdu">PDU</span>
              <div class="grid">
                <div class="col"><span class="tag-1">重启</span></div>
                <div class="col2">
                  <div class="tag-wrapper"><span class="tag-2">开</span></div>
                  
                </div>
              </div>
            </div>
            <div class="wrapper-i1">
              <div class="wrapper-inner-1">
                <img
                  class="logo"
                  src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f84a8810fc1c11eb9ae1efb951a21ba9.png"
                />
              </div>
              <span class="label">视频监控</span>
              <div class="grid-1">
                <div class="col-1"><span class="tag-3">重启</span></div>
                <div class="col2-1">
                  <div class="tag-wrapper-1"><span class="tag-4">开</span></div>
                  
                </div>
              </div>
            </div>
            <div class="wrapper-i2">
              <div class="wrapper-inner-2">
                <img
                  class="figure"
                  src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f837c360fc1c11eba775d7eb76a1be07.png"
                />
                <img
                  class="bitmap"
                  src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f838adc0fc1c11eb8e338f913764a563.png"
                />
              </div>
              <span class="word">光猫</span>
              <div class="grid-2">
                <div class="col-2"><span class="tag-5">重启</span></div>
                <div class="col2-2">
                  <div class="tag-wrapper-2"><span class="tag-6">开</span></div>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="container-inner-i1">
            <div class="wrapper-i0-1">
              <div class="wrapper-inner-3">
                <img
                  class="picture-1"
                  src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f8385fa0fc1c11ebb97755d81973a958.png"
                />
                <img
                  class="image-1"
                  src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f862cb00fc1c11ebac84a1cd4f060291.png"
                />
              </div>
              <span class="tag-7">门禁</span>
              <div class="grid-3">
                <div class="col-3"><span class="tag-8">重启</span></div>
                <div class="col2-3">
                  <div class="tag-wrapper-3"><span class="tag-9">关</span></div>
                  <img
                    class="icon-circle-3"
                    src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f85b29e0fc1c11eb8d5edf9e9a24b09b.png"
                  />
                </div>
              </div>
            </div>
            <div class="wrapper-i1-1">
              <div class="wrapper-inner-4">
                <img
                  class="logo-1"
                  src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f867fb20fc1c11ebb173190cbbc85cc8.png"
                />
              </div>
              <span class="label-1">测震</span>
              <div class="grid-4">
                <div class="col-4"><span class="tag-10">重启</span></div>
                <div class="col2-4">
                  <div class="tag-wrapper-4">
                    <span class="tag-11">开</span>
                  </div>
                  <img
                    class="icon-circle-4"
                    src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f8627ce0fc1c11eb8cf483d82cb1cefa.png"
                  />
                </div>
              </div>
            </div>
            <div class="wrapper-i2-1">
              <div class="wrapper-inner-5">
                <img
                  class="logo-2"
                  src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f867ad00fc1c11ebbac6a7555bbe52e0.png"
                />
              </div>
              <span class="word-1">交换机</span>
              <div class="grid-5">
                <div class="col-5"><span class="tag-12">重启</span></div>
                <div class="col2-5">
                  <div class="tag-wrapper-5">
                    <span class="tag-13">开</span>
                  </div>
                  <img
                    class="icon-circle-5"
                    src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f861e0a0fc1c11eb876bf94c77aee238.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      constants: {},
    };
  },
  methods: {},
};
</script>
<style scope lang="scss">
.zwz {
  .mod-1 {
    width: 529px;
    height: 473px;
  }

  .block {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .header {
    display: flex;
    position: relative;
    align-items: flex-start;
    flex-direction: column;
    background-color: #ffffff;
    width: 529px;
    height: 24px;
  }

  .tag {
    position: relative;
    margin-top: 4px;
    margin-left: 8px;
    max-width: 513px;
    height: 16px;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
  }

  .container-inner {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-left: 7px;
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

  .body {
    display: flex;
    position: relative;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 28px;
  }

  .container-inner-i0 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
  }

  .wrapper-i0 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 59px;
  }

  .wrapper-inner {
    display: flex;
    position: relative;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
  }

  .picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 126px;
    height: 126px;
  }

  .image {
    position: relative;
    width: 126px;
    height: 126px;
  }

  .pdu {
    position: relative;
    margin-top: 11px;
    margin-left: 51px;
    max-width: 42px;
    height: 19px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    line-height: 19px;
    white-space: nowrap;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }

  .grid {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    margin-top: 12px;
  }

  .col {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-right: 14px;
    border-radius: 12px;
    background-color: #435f75;
    width: 56px;
    height: 24px;
    line-height: 16px;
    white-space: nowrap;
  }

  .tag-1 {
    margin-top: 1px;
    max-width: 44px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    color: #feffff;
    font-size: 16px;
    font-weight: 400;
  }

  .col2 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    width: 56px;
    height: 24px;
  }

  .tag-wrapper {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    flex-direction: row;
    border-width: 1px;
    border-style: solid;
    border-radius: 12px;
    border-color: rgba(255, 255, 255, 1);
    background-color: #ffffff;
    width: 56px;
    height: 24px;
    line-height: 16px;
    white-space: nowrap;
  }

  .tag-2 {
    margin-top: 0;
    margin-left: 27px;
    max-width: 32px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    color: #10f492;
    font-size: 16px;
    font-weight: 400;
  }

  .icon-circle {
    position: relative;
    margin-left: 2px;
    width: 20px;
    height: 20px;
  }

  .wrapper-i1 {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 59px;
  }

  .wrapper-inner-1 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-size: contain;
    background-image: url(https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f838adc0fc1c11eb815ad5c4ba28cde0.png);
    height: 126px;
  }

  .logo {
    margin-top: -1px;
    width: 126px;
    height: 85px;
  }

  .label {
    position: relative;
    margin-top: 11px;
    max-width: 114px;
    height: 19px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    line-height: 19px;
    white-space: nowrap;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }

  .grid-1 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    margin-top: 12px;
  }

  .col-1 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-right: 14px;
    border-radius: 12px;
    background-color: #435f75;
    width: 56px;
    height: 24px;
    line-height: 16px;
    white-space: nowrap;
  }

  .tag-3 {
    margin-top: 1px;
    max-width: 44px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    color: #feffff;
    font-size: 16px;
    font-weight: 400;
  }

  .col2-1 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    width: 56px;
    height: 24px;
  }

  .tag-wrapper-1 {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    flex-direction: row;
    border-width: 1px;
    border-style: solid;
    border-radius: 12px;
    border-color: rgba(255, 255, 255, 1);
    background-color: #ffffff;
    width: 56px;
    height: 24px;
    line-height: 16px;
    white-space: nowrap;
  }

  .tag-4 {
    margin-top: 0;
    margin-left: 27px;
    max-width: 32px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    color: #10f492;
    font-size: 16px;
    font-weight: 400;
  }

  .icon-circle-1 {
    position: relative;
    margin-left: 2px;
    width: 20px;
    height: 20px;
  }

  .wrapper-i2 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .wrapper-inner-2 {
    display: flex;
    position: relative;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
  }

  .figure {
    position: absolute;
    top: 0;
    left: 0;
    width: 126px;
    height: 126px;
  }

  .bitmap {
    position: relative;
    width: 126px;
    height: 126px;
  }

  .word {
    position: relative;
    margin-top: 11px;
    max-width: 114px;
    height: 19px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    line-height: 19px;
    white-space: nowrap;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }

  .grid-2 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    margin-top: 12px;
  }

  .col-2 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-right: 14px;
    border-radius: 12px;
    background-color: #435f75;
    width: 56px;
    height: 24px;
    line-height: 16px;
    white-space: nowrap;
  }

  .tag-5 {
    margin-top: 1px;
    max-width: 44px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    color: #feffff;
    font-size: 16px;
    font-weight: 400;
  }

  .col2-2 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    width: 56px;
    height: 24px;
  }

  .tag-wrapper-2 {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    flex-direction: row;
    border-width: 1px;
    border-style: solid;
    border-radius: 12px;
    border-color: rgba(255, 255, 255, 1);
    background-color: #ffffff;
    width: 56px;
    height: 24px;
    line-height: 16px;
    white-space: nowrap;
  }

  .tag-6 {
    margin-top: 0;
    margin-left: 27px;
    max-width: 32px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    color: #10f492;
    font-size: 16px;
    font-weight: 400;
  }

  .icon-circle-2 {
    position: relative;
    margin-left: 2px;
    width: 20px;
    height: 20px;
  }

  .container-inner-i1 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    margin-top: 37px;
  }

  .wrapper-i0-1 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 59px;
  }

  .wrapper-inner-3 {
    display: flex;
    position: relative;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
  }

  .picture-1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 126px;
    height: 126px;
  }

  .image-1 {
    position: relative;
    width: 126px;
    height: 126px;
  }

  .tag-7 {
    position: relative;
    margin-top: 11px;
    margin-left: 50px;
    max-width: 38px;
    height: 19px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    line-height: 19px;
    white-space: nowrap;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }

  .grid-3 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    margin-top: 12px;
  }

  .col-3 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-right: 14px;
    border-radius: 12px;
    background-color: #435f75;
    width: 56px;
    height: 24px;
    line-height: 16px;
    white-space: nowrap;
  }

  .tag-8 {
    margin-top: 1px;
    max-width: 44px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    color: #feffff;
    font-size: 16px;
    font-weight: 400;
  }

  .col2-3 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    width: 56px;
    height: 24px;
  }

  .tag-wrapper-3 {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    flex-direction: row;
    border-radius: 12px;
    background-color: #858588;
    width: 56px;
    height: 24px;
    line-height: 16px;
    white-space: nowrap;
  }

  .tag-9 {
    margin-top: 1px;
    margin-left: 12px;
    max-width: 32px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }

  .icon-circle-3 {
    position: relative;
    margin-left: 34px;
    width: 20px;
    height: 20px;
  }

  .wrapper-i1-1 {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 59px;
  }

  .wrapper-inner-4 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-size: contain;
    background-image: url(https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f83886b0fc1c11eb976b09b058188bbc.png);
    height: 126px;
  }

  .logo-1 {
    width: 126px;
    height: 82px;
  }

  .label-1 {
    position: relative;
    margin-top: 11px;
    max-width: 114px;
    height: 19px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    line-height: 19px;
    white-space: nowrap;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }

  .grid-4 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    margin-top: 12px;
  }

  .col-4 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-right: 14px;
    border-radius: 12px;
    background-color: #435f75;
    width: 56px;
    height: 24px;
    line-height: 16px;
    white-space: nowrap;
  }

  .tag-10 {
    margin-top: 1px;
    max-width: 44px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    color: #feffff;
    font-size: 16px;
    font-weight: 400;
  }

  .col2-4 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    width: 56px;
    height: 24px;
  }

  .tag-wrapper-4 {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    flex-direction: row;
    border-width: 1px;
    border-style: solid;
    border-radius: 12px;
    border-color: rgba(255, 255, 255, 1);
    background-color: #ffffff;
    width: 56px;
    height: 24px;
    line-height: 16px;
    white-space: nowrap;
  }

  .tag-11 {
    margin-top: 0;
    margin-left: 27px;
    max-width: 32px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    color: #10f492;
    font-size: 16px;
    font-weight: 400;
  }

  .icon-circle-4 {
    position: relative;
    margin-left: 2px;
    width: 20px;
    height: 20px;
  }

  .wrapper-i2-1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .wrapper-inner-5 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-size: contain;
    background-image: url(https://ai-sample.oss-cn-hangzhou.aliyuncs.com/figma-plugin/f83e04f0fc1c11eba5b3513c73cb34d0.png);
    height: 126px;
  }

  .logo-2 {
    margin-top: -2px;
    width: 126px;
    height: 84px;
  }

  .word-1 {
    position: relative;
    margin-top: 11px;
    max-width: 114px;
    height: 19px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    line-height: 19px;
    white-space: nowrap;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }

  .grid-5 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    margin-top: 12px;
  }

  .col-5 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-right: 14px;
    border-radius: 12px;
    background-color: #435f75;
    width: 56px;
    height: 24px;
    line-height: 16px;
    white-space: nowrap;
  }

  .tag-12 {
    margin-top: 1px;
    max-width: 44px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    color: #feffff;
    font-size: 16px;
    font-weight: 400;
  }

  .col2-5 {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    width: 56px;
    height: 24px;
  }

  .tag-wrapper-5 {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    flex-direction: row;
    border-width: 1px;
    border-style: solid;
    border-radius: 12px;
    border-color: rgba(255, 255, 255, 1);
    background-color: #ffffff;
    width: 56px;
    height: 24px;
    line-height: 16px;
    white-space: nowrap;
  }

  .tag-13 {
    margin-top: 0;
    margin-left: 27px;
    max-width: 32px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    color: #10f492;
    font-size: 16px;
    font-weight: 400;
  }

  .icon-circle-5 {
    position: relative;
    margin-left: 2px;
    width: 20px;
    height: 20px;
  }
}
</style>

