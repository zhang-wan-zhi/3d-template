<template>
  <div id="app1">
    <div class="title">{{modelName}}</div>
    <div class="btn-dilog">
      <div class="btn-d" @click="play">分解</div>
      <div class="btn-d" @click="pause">合并</div>
    </div>
    <i class="el-icon-close" @click="closeCard"></i>
    <i class="el-icon-loading" v-if="loading"></i>
  </div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
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
      modelName: ''
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
        100
      );
      self.camera.position.set(5, 2, 8);

      const pmremGenerator = new THREE.PMREMGenerator(this.renderer);

      // 场景允许你在什么地方、摆放什么东西来交给three.js来渲染，这是你放置物体、灯光和摄像机的地方。
      self.scene = new THREE.Scene();
      self.scene.background = new THREE.Color(0xbfe3dd);
      self.scene.environment = pmremGenerator.fromScene(
        new RoomEnvironment(),
        0.04
      ).texture;

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
      hemiLight.position.set(0, 1, 0);
      self.scene.add(hemiLight);

      const dirLight = new THREE.DirectionalLight(0xffffff);
      dirLight.position.set(0, 1, 0);
      self.scene.add(dirLight);

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
      fbxLoader.load(self.modelPath2, function (object) {
        self.object = object;
        console.log(object);
        object.position.set(0, -1, 0);
        object.scale.set(0.02, 0.02, 0.02);
        self.scene.add(object);
        self.loading = false;
        self.mixer = new THREE.AnimationMixer(self.object);
      });
      // 加载json模型
      /* var loader = new THREE.ObjectLoader();
      loader.load(self.modelPath, function (obj) {
        self.scene.add(obj);
      }); */
      // stats
      /* self.stats = new Stats();
      container.appendChild(self.stats.dom); */
      /* fbxLoader.load(self.modelPath2, function (object) {
        object.position.set(100, 0, 100)
        console.log(object)
        self.scene.add(object)
      }) */
      /* let gltfLoader = new GLTFLoader();
      gltfLoader.load(self.modelPath3, function (object) {
        console.log("modelPath3", object);
        self.scene.add(object.scene);
      }); */
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
          self.modelName = intersects[0].object.name
          /* intersects.forEach((element) => {
            console.log('element',element);
          }); */
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
      this.animation.enable = true;
      this.animation.time = 0; //操作对象设置开始播放时间
      this.object.animations[0].duration = 7; //剪辑对象设置播放结束时间
      this.animation.play();
      /* this.timeRender(); */
      this.animate2();
    },
    pause() {
      console.log("pause", this.animation.paused);
      this.animation.paused = false;
      this.animation.play();
      this.animation.time = 7;
      this.object.animations[0].duration = 14; //操作对象设置开始播放时间
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
      this.$emit("close");
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
    this.init();
    this.loadImg();
    this.addEvent()
    this.animate();
  },
  beforeDestroy() {
    cancelAnimationFrame(this.animateFrame2);
    cancelAnimationFrame(this.animateFrame);
  },
};
</script>
<style scoped lang="scss">
#app1 {
  position: fixed;
  height: 700px;
  width: 1000px;
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
}
.btn-dilog {
  position: absolute;
  z-index: 9999;
  width: 100px;
  z-index: 9999;
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
