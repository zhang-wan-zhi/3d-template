<template>
  <div id="app1">
    <div class="title">{{ modelName }}</div>
    <div class="btn-dilog">
      <div class="btn-d" @click="play">分解</div>
      <div class="btn-d" @click="pause">合并</div>
    </div>
    <i class="el-icon-close" @click="closeCard"></i>
    <!-- <i class="el-icon-loading" v-if="loading"></i> -->
    <div class="progress" v-if="percentage !== 100">
      <div class="progress-item">
        <vm-progress
        :percentage="percentage"
        :text-inside="true"
        :stroke-width="40"
      ></vm-progress>
      </div>
    </div>
  </div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { DDSLoader } from "three/examples/jsm/loaders/DDSLoader.js";
import * as Nodes from "three/examples/jsm/nodes/Nodes.js";
export default {
  data() {
    return {
      mixers: [],
      stats: null,
      modelPath: "/moudles/josn1/tileset.json",
      modelPath2: "/models/3.fbx",
      modelPath3: "/models/fkd8.fbx",
      mixer: null,
      clock: null,
      object: null,
      loading: true,
      renderEnabled: false,
      timeOut: null,
      animateFrame: null,
      animateFrame2: null,
      animation: null,
      showCanvs: false,
      modelName: "",
      height: 1000,
      width: 1000,
      percentage: 0
    };
  },
  methods: {
    init() {
      let self = this;
      self.clock = new THREE.Clock();
      let container = document.getElementById("app1");

      // 构造器
      self.renderer = new THREE.WebGLRenderer({
        antialias: true, // 是否执行抗锯齿
        alpha: true, // canvas是否包含alpha (透明度)
        precision: "highp", // 着色器精度
      });
      // 将输出canvas的大小调整为(width, height)并考虑设备像素比，且将视口从(0, 0)开始调整到适合大小
      self.renderer.setSize(container.clientWidth, container.clientHeight);
      // 将canvas加入
      container.appendChild(self.renderer.domElement);

      self.camera = new THREE.PerspectiveCamera(
        40,
        container.clientWidth / container.clientHeight,
        1,
        1000
      );
      /* self.camera.position.set(5, 2, 8); */
      self.camera.position.set(0, 0, 100);

      const pmremGenerator = new THREE.PMREMGenerator(this.renderer);

      // 场景允许你在什么地方、摆放什么东西来交给three.js来渲染，这是你放置物体、灯光和摄像机的地方。
      self.scene = new THREE.Scene();
      self.scene.background = new THREE.Color(0x262626);
      self.scene.environment = pmremGenerator.fromScene(
        new RoomEnvironment(),
        0.04
      ).texture;

      // 光线
      /* const ambientlight = new THREE.AmbientLight(0x464646);
      this.scene.add(ambientlight); */
      // 光源直接放置于场景之上，光照颜色从天空光线颜色颜色渐变到地面光线颜色。
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
      hemiLight.position.set(0, 1, 0);
      self.scene.add(hemiLight);
      // 平行光
      const directionalLight = new THREE.DirectionalLight(0xffddcc, 1);
      directionalLight.position.set(0, 0, 2);
      self.scene.add(directionalLight);
      // （轨道控制器）可以使得相机围绕目标进行轨道运动。
      self.controls = new OrbitControls(self.camera, self.renderer.domElement);
      // 控制器的焦点，.object的轨道围绕它运行。 它可以在任何时候被手动更新，以更改控制器的焦点。
      self.controls.target.set(0, 0.5, 0);
      // 更新控制器。必须在摄像机的变换发生任何手动改变后调用
      self.controls.update();
      self.controls.enablePan = false;
      self.controls.enableDamping = true;
      // 加载模型
      let fbxLoader = new FBXLoader();
      const normal = new THREE.TextureLoader().load("/models/hight.jpg");

      // MATERIAL 金属材质
      let mtl = new Nodes.PhongNodeMaterial();
      let defaultSide = THREE.FrontSide;
      // 高光强度
      var intensity = 1.5;
      var power = new Nodes.FloatNode(3);
      // 高光颜色
      var color = new Nodes.ColorNode(0xffffff);
      var viewZ = new Nodes.MathNode(
        new Nodes.NormalNode(),
        new Nodes.Vector3Node(0, 0, -intensity),
        Nodes.MathNode.DOT
      );
      var rim = new Nodes.OperatorNode(
        viewZ,
        new Nodes.FloatNode(intensity),
        Nodes.OperatorNode.ADD
      );
      var rimPower = new Nodes.MathNode(rim, power, Nodes.MathNode.POW);
      var rimColor = new Nodes.OperatorNode(
        rimPower,
        color,
        Nodes.OperatorNode.MUL
      );
      mtl.color = new Nodes.ColorNode(0x1a1716);
      mtl.emissive = rimColor;
      mtl.side = defaultSide;

      /*  mesh.material = mtl; */

      // 循环方法 添加金属质感
      /* function _ChangeMaterialEmissive(parent) {
        parent.traverse(function (obj) {
          if (obj instanceof THREE.Mesh) {
            
            obj.material = mtl;
          }
        });
      } */
      // 加载进度
      function onProgress(xhr) {
        // 后台打印查看模型文件加载进度
        self.percentage = Number((xhr.loaded / xhr.total) * 100)
        console.log('self.percentage',self.percentage);
        console.log("加载完成的百分比" + (xhr.loaded / xhr.total) * 100);
      }

      fbxLoader.load(
        self.modelPath2,
        function (object) {
          self.object = object;
          /* _ChangeMaterialEmissive(self.object); */
          console.log("objzwz", object);
          self.moduleSize(self.object);
          self.loading = false;
          self.mixer = new THREE.AnimationMixer(self.object);
          self.animationTime = self.object.animations[0].duration;
        },
        onProgress
      );
    },
    moduleSize(object) {
      let self = this;
      let group = new THREE.Group();
      group.add(object);

      let bbox = new THREE.Box3().setFromObject(group);
      let mdlen = bbox.max.x - bbox.min.x; //边界的最小坐标值 边界的最大坐标值
      let mdhei = bbox.max.y - bbox.min.y;
      let mdwid = bbox.max.z - bbox.min.z;
      console.log("group", group);
      group.position.set(0, 0, 0);

      let dist = Math.abs(
        self.camera.position.z - group.position.z - mdwid / 2
      );
      console.log("dist值为:" + dist);
      let vFov = (self.camera.fov * Math.PI) / 180;
      //console.log('vFov值为:' + vFov );
      let vheight = 2 * Math.tan(vFov * 0.5) * dist;
      //console.log('vheight值为:' + vheight );
      let fraction = mdhei / vheight;
      // console.log('fraction值为:' + fraction );
      let finalHeight = self.height * fraction;
      //console.log('finalHeight值为:' + finalHeight);
      let finalWidth = (finalHeight * mdlen) / mdhei;
      //console.log('finalWidth值为:' + finalWidth );

      let value1 = self.width / finalWidth;
      console.log("value1缩放比例值为:" + value1);
      let value2 = self.height / finalHeight;
      console.log("value2缩放比例值为:" + value2);

      if (value1 >= value2) {
        group.scale.set(value2 / 2, value2 / 2, value2 / 2);
      } else {
        group.scale.set(value1 / 2, value1 / 2, value1 / 2);
      }
      let bbox2 = new THREE.Box3().setFromObject(group);
      let mdlen2 = bbox2.max.x - bbox2.min.x;
      let mdhei2 = bbox2.max.y - bbox2.min.y;
      let mdwid2 = bbox2.max.z - bbox2.min.z;
      group.position.set(0, -(bbox2.max.y + bbox2.min.y) / 2, 0);

      self.scene.add(group);

      /*       let boxhelper = new THREE.BoxHelper(group, 0xbe1915); //外面红色框
      self.scene.add(boxhelper); */
    },
    loadImg() {},
    addEvent() {
      let self = this;
      this.renderer.domElement.addEventListener("click", (event) => {
        /* self.showCard = false */
        let container = document.getElementById("app1");

        const { offsetX, offsetY } = event;
        const x = (offsetX / container.clientWidth) * 2 - 1;
        const y = -(offsetY / container.clientHeight) * 2 + 1;
        const mousePoint = new THREE.Vector2();
        mousePoint.x = x;
        mousePoint.y = y;
        const raycaster = new THREE.Raycaster();
        // 设置鼠标位置和参考相机
        raycaster.setFromCamera(mousePoint, this.camera);
        // 鼠标点击对应的物体（所有鼠标映射到的物体，包括被遮挡的）
        const intersects = raycaster.intersectObjects(
          this.scene.children,
          true
        );
        console.log("intersects", intersects);

        if (intersects.length > 0) {
          /* self.close() */
          self.modelName = intersects[0].object.name;
          console.log(intersects[0].object);
        }

        // 过滤网格和地面
        /* const intersect = intersects.filter(
          (intersect) =>
            !(intersect.object instanceof GridHelper) &&
            intersect.object.name !== "plane"
        )[0]; */
      });
    },
    play() {
      /* this.mixer.clipAction(this.object.animations[0]).play();
      this.animate2(); */
      
      this.renderEnabled = true;
      this.animation = this.mixer.clipAction(this.object.animations[0]);
      /* console.log("THREE.LoopOnce", animation); */
      this.animation.setLoop(THREE.LoopOnce); //不循环播放
      this.animation.clampWhenFinished = true; //暂停在最后一帧播放的状态
      // enabled 值设为false会禁用动作, 也就是无效.默认值是true
      // 当enabled被重新置为true, 动画将从当前时间（time）继续 (将 enabled 置为 false 不会重置此次动作)
      this.animation.enable = true;
      this.animation.time = 0; //操作对象设置开始播放时间
      this.object.animations[0].duration = this.animationTime / 2; //剪辑对象设置播放结束时间
      this.animation.paused = false;
      this.animation.play();
      /* this.timeRender(); */
      this.animate2();
    },
    pause() {
      this.animation.paused = false;
      this.animation.play();
      this.animation.time = this.animationTime / 2;
      this.object.animations[0].duration = this.animationTime //操作对象设置开始播放时间
    },
    animate() {
      this.animateFrame2 = requestAnimationFrame(this.animate);
      this.renderer.clear();
      /* const delta = this.clock.getDelta();
      this.mixer.update(delta); */
      this.renderer.render(this.scene, this.camera);
      this.renderer.clearDepth();
    },
    animate2() {
      this.animateFrame = requestAnimationFrame(this.animate2);
      if (this.renderEnabled) {
        // 这里是你自己业务上需要的code
        /* this.renderer.clear(); */
        const delta = this.clock.getDelta();
        this.mixer.update(delta);
        /* this.renderer.render(this.scene, this.camera);
        this.renderer.clearDepth(); */
      }
    },
    closeCard() {
      this.$router.back();
    },
    timeRender(time = 3000) {
      this.renderEnabled = true;

      clearTimeout(this.timeOut);
      /* if (timeOut) {
        console.log('timeOut',timeOut);
        
      } */
      this.timeOut = setTimeout(() => {
        this.renderEnabled = false;
        console.log("this.renderEnabled", this.renderEnabled);
      }, time);
    },
  },
  mounted() {
    // 仪器名称
    let modules = this.$route.query.moduleName;
    this.modelPath2 = `/models/${modules}`;
    console.log("this.modules", modules);
    // 仪器大小
    let container = document.getElementById("app1");
    this.height = Number(container.clientHeight / 2);
    this.width = this.height;
    console.log(this.height);
    // 初始化
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    this.controls = null;
    this.animationTime = null;
    // 结束
    this.init();
    this.loadImg();
    this.addEvent();
    this.animate();
  },
  beforeDestroy() {
    cancelAnimationFrame(this.animateFrame2);
    cancelAnimationFrame(this.animateFrame);
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    this.controls = null;
  },
};
</script>
<style scoped lang="scss">
#app1 {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  .title {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .progress{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .progress-item {
      width: 30%;
    }
  }
}
.btn-dilog {
  position: absolute;
  z-index: 9999;
  width: 100px;
  z-index: 9999;
  left: 500px;
  top: 200px;
}
.btn-d {
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  z-index: 9999;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
}
.el-icon-close {
  position: absolute;
  font-size: 20px;
  right: 15px;
  top: 15px;
  color: #fff;
  cursor: pointer;
}
.el-icon-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
