
export const echartsSize = function (size,defalteWidth = 1920) {
  let docEl = document.documentElement,
    clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
  if (!clientWidth) return;
  let fontSize = (clientWidth / defalteWidth);
  return Number((size*fontSize).toFixed(3));
}

// 设置系统缩放比，适配各分辨率
export function refreshScale(){
  // clientWidth是对象可见的宽度，不包滚动条等边线，会随窗口的显示大小改变。
  let baseWidth = document.documentElement.clientWidth;
  let baseHeight = document.documentElement.clientHeight;
  console.log('111',baseWidth,baseHeight);
  let appStyle = document.getElementById('app').style;
  
  // 当前比例
  let realRatio = baseWidth/baseHeight
  // 设计比例
  let designRatio = 16/9
  // 缩放比例
  let scaleRate =  baseWidth/1920
  let resRate = 1920/baseWidth
  // 当前宽大于设计比例
  if(realRatio>designRatio){
    scaleRate = baseHeight/1080
    console.log('11111');
  }
  appStyle.transformOrigin = 'left top';
  appStyle.transform=`scale(${scaleRate})`;
  appStyle.width = `${baseWidth/scaleRate}px`
  /* bgStyle.transformOrigin = 'left top'; */
  
}