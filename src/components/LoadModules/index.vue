<template>
  <div id="app1">
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
      modelPath: "/moudles/fkd8.fbx",
      modelPath2: "/models/2.fbx",
      modelPath3: "/moudles/dixing.glb",
      mixer: null,
      clock: null,
      object: null,
      loading: true
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

      let fbxLoader = new FBXLoader();
      fbxLoader.load(self.modelPath2, function (object) {
        self.object = object;
        console.log(object);
        object.position.set(0, -1, 0);
        object.scale.set(0.02, 0.02, 0.02);
        self.scene.add(object);
        self.loading = false
        self.mixer = new THREE.AnimationMixer(self.object);
        self.animate();
      });

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
    play() {
      /* this.mixer.clipAction(this.object.animations[0]).play();
      this.animate2(); */

      let animation = this.mixer.clipAction(this.object.animations[0]);
      console.log("THREE.LoopOnce", animation);
      animation.setLoop(THREE.LoopOnce);
      animation.clampWhenFinished = true;
      animation.enable = true;
      animation.play();
      this.animate2();
    },
    pause() {
      console.log("pause");
      this.mixer.clipAction(this.object.animations[0]).stop();
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.clear();
      /* const delta = this.clock.getDelta();
      this.mixer.update(delta); */

      this.renderer.render(this.scene, this.camera);

      this.renderer.clearDepth();
    },
    animate2() {
      requestAnimationFrame(this.animate2);
      this.renderer.clear();
      const delta = this.clock.getDelta();
      this.mixer.update(delta);
      this.renderer.render(this.scene, this.camera);
      this.renderer.clearDepth();
    },
    closeCard() {
      this.$emit("close");
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>
<style>
#app1 {
  position: fixed;
  height: 700px;
  width: 1000px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
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
