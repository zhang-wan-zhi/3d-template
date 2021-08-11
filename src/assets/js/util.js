
export const echartsSize = function (size,defalteWidth = 1920) {
  let docEl = document.documentElement,
    clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
  if (!clientWidth) return;
  let fontSize = (clientWidth / defalteWidth);
  return Number((size*fontSize).toFixed(3));
}

// 设置系统缩放比，适配各分辨率
export function refreshScale(){
  let baseWidth = document.documentElement.clientWidth;
  let baseHeight = document.documentElement.clientHeight;
  let appStyle = document.getElementById('app').style;
  let realRatio = baseWidth/baseHeight
  let designRatio = 16/9
  let scaleRate =  baseWidth/1920
  if(realRatio>designRatio){
    scaleRate = baseHeight/1080
  }
  appStyle.transformOrigin = 'left top';
  appStyle.transform=`scale(${scaleRate}) translateX(-50%)`;
  appStyle.width = `${baseWidth/scaleRate}px`
}