<template>
  <div id="web-house">
    <loading v-if="loading"></loading>
    <station-interior v-show="showInterior"></station-interior>
    <div class="info">
      <div class="info1" @click="showInterior = !showInterior">站台信息</div>
      <div class="info1">
        <div class="text">仪器位置:</div>
        <el-switch v-model="value" active-color="#13ce66"> </el-switch>
      </div>
    </div>
  </div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import Card from "../../components/card/index.vue";
import loading from "../../components/loading/index.vue";
import { GUI } from "three/examples/jsm/libs/dat.gui.module.js";
import { Water } from "three/examples/jsm/objects/Water.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";
import stationInterior from "../stationInterior/index.vue";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import TWEEN from "@tweenjs/tween.js";
export default {
  name: "mapbg",
  components: {
    Card,
    stationInterior,
    loading,
  },
  data() {
    return {
      cube: null,
      sphere: null,
      step: 0,
      stats: null,
      group: null,
      width: 1920,
      height: 1080,
      modelPathGLB: "/models/tz.glb",
      modelPathFbx: "/models/tz/3.fbx",
      modelPathFbx2: "/models/FK1.fbx",
      showCard: false,
      loadscene: null,
      labelRenderer: null,
      x: 10,
      y: 10,
      z: 10,
      stationName: "",
      sun: null,
      showInterior: false,
      value: false,
      fn2: null,
      modelFileName: "",
      tzObject: null,
      loading: true,
    };
  },
  computed: {},
  watch: {
    value: function (newvalue, oldvalue) {
      let oldP = {
        x: 800,
        y: 250,
        z: 1500,
      };
      let oldT = {
        x: 0,
        y: 0,
        z: 0,
      };
      let newP = {
        x: 1200,
        y: 500,
        z: -1000,
      };
      let newT = {
        x: 100,
        y: 0,
        z: -800,
      };
      if (newvalue) {
        /* this.raom();
        this.addEvent(newvalue);
        this.addClickEvent(newvalue); */
        this.showModelName();

        this.animateCamera(oldP, oldT, newP, newT);
        /* this.camera.position.set(1200, 500, -1000);
        this.controls.target = new THREE.Vector3(100, 0, -800); */
      } else {
        this.hiddenModelText();
        /* this.camera.position.set(800, 250, 1500);
        this.controls.target = new THREE.Vector3(0, 0, 0); */
        this.animateCamera(newP, newT, oldP, oldT);
        /* this.camera.position.set(15, 15, 50);
        this.controls.target = new THREE.Vector3(0, 0, 0);
        this.addEvent(newvalue);
        this.addClickEvent(newvalue); */
      }
    },
  },
  methods: {
    close() {
      console.log("1111");
      this.showCard = false;
    },
    // oldP  相机原来的位置
    // oldT  target原来的位置
    // newP  相机新的位置
    // newT  target新的位置
    // callBack  动画结束时的回调函数
    animateCamera(oldP, oldT, newP, newT, callBack) {
      let self = this;
      let tween = new TWEEN.Tween({
        x1: oldP.x, // 相机x
        y1: oldP.y, // 相机y
        z1: oldP.z, // 相机z
        x2: oldT.x, // 控制点的中心点x
        y2: oldT.y, // 控制点的中心点y
        z2: oldT.z, // 控制点的中心点z
      });
      tween.to(
        {
          x1: newP.x,
          y1: newP.y,
          z1: newP.z,
          x2: newT.x,
          y2: newT.y,
          z2: newT.z,
        },
        1000
      );
      tween.onUpdate(function (object) {
        self.camera.position.x = object.x1;
        self.camera.position.y = object.y1;
        self.camera.position.z = object.z1;
        self.controls.target.x = object.x2;
        self.controls.target.y = object.y2;
        self.controls.target.z = object.z2;
        self.controls.update();
      });
      tween.onComplete(function () {
        self.controls.enabled = true;
        callBack && callBack();
      });
      tween.easing(TWEEN.Easing.Cubic.InOut);
      tween.start();
    },
    createCanvas() {
      
    },
    init() {
      let self = this;
      // scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xcce0ff);
      this.scene.fog = new THREE.Fog(0xcce0ff, 500, 10000);

      // camera

      this.camera = new THREE.PerspectiveCamera(
        30,
        this.width / this.height,
        0.1,
        10000
      );
      this.camera.position.set(800, 250, 1500);

      // lights
      // 环境光
      const ambientlight = new THREE.AmbientLight(0x666666);
      this.scene.add(ambientlight);
      // 平射
      let dirlight = new THREE.DirectionalLight(0xdfebff, 1);
      dirlight.position.set(50, 200, 100);
      dirlight.position.multiplyScalar(1.3);
      dirlight.castShadow = true;
      dirlight.shadow.mapSize.width = 1024;
      dirlight.shadow.mapSize.height = 1024;
      const d = 300;
      dirlight.shadow.camera.left = -d;
      dirlight.shadow.camera.right = d;
      dirlight.shadow.camera.top = d;
      dirlight.shadow.camera.bottom = -d;
      dirlight.shadow.camera.far = 1000;
      this.scene.add(dirlight);

      // 文字渲染
      self.labelRenderer = new CSS2DRenderer();
      self.labelRenderer.setSize(this.width, this.height);
      document
        .getElementById("web-house")
        .appendChild(self.labelRenderer.domElement);
      // webgl渲染
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(this.width, this.height);
      // 设置设备像素比。通常用于避免HiDPI设备上绘图模糊
      this.renderer.setPixelRatio(window.devicePixelRatio);
      // 默认是LinearToneMapping。查看Renderer constants以获取其它备选项
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      // 色调映射的曝光级别。默认是1
      this.renderer.toneMappingExposure = 1;
      this.renderer.domElement.style.position = "absolute";
      this.renderer.domElement.style.top = "0px";
      //this.renderer.shadowMapEnabled = true;
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      document
        .getElementById("web-house")
        .appendChild(this.renderer.domElement);
      this.clock = new THREE.Clock();

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.listenToKeyEvents(window);
      this.controls.controlsenablePan = true;
      this.controls.enabled = true;
      this.controls.enableKeys = true;
      this.controls.maxPolarAngle = Math.PI * 0.5;
      // ground
      const loader = new THREE.TextureLoader();
      const groundTexture = loader.load("/models/grasslight-big.jpg");
      groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
      groundTexture.repeat.set(25, 25);
      groundTexture.anisotropy = 16;
      groundTexture.encoding = THREE.sRGBEncoding;

      const groundMaterial = new THREE.MeshLambertMaterial({
        map: groundTexture,
      });

      

      let mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(20000, 20000),
        groundMaterial
      );
      mesh.position.y = -50;
      mesh.rotation.x = -Math.PI / 2;
      mesh.receiveShadow = true;
      this.scene.add(mesh);

      // 坐标线
      /* let axes = new THREE.AxesHelper(100);
      this.scene.add(axes); */
    },
    loadModel() {
      let self = this; //这一点很重要。。
      let loader1 = new GLTFLoader();
      loader1.load(this.modelPathGLB, function (gltf) {
        console.log("gltf", gltf);
        self.loadscene = gltf.scene;
        self.loadscene.traverse(function (object) {
          if (object.isMesh) {
            object.castShadow = true;
          }
        });
        self.loadscene.scale.set(200, 200, 200);
        self.loadscene.rotation.set(0, 0, 0);
        self.loadscene.position.set(0, -1000, 0);
        console.log("self.loadscene", self.loadscene);
        self.scene.add(self.loadscene);
      });
    },
    loadModelFbx() {
      let self = this;
      let fbxLoader = new FBXLoader();

      /* const path = require("../../../public/models/FK.fbx"); */
      fbxLoader.load(
        self.modelPathFbx,
        function (object) {
          console.log(object);
          object.position.set(0, 0, 0);
          object.scale.set(0.1, 0.1, 0.1);
          self.scene.add(object);
        },
        onProgress
      );
      // 加载进度
      function onProgress(xhr) {
        // 后台打印查看模型文件加载进度
        if (xhr.loaded == xhr.total) {
          self.loading = false;
        }
      }
      fbxLoader.load(self.modelPathFbx2, function (object) {
        self.tzObject = object;
        console.log(object);
        self.tzObject.position.set(100, 0, -800);
        self.tzObject.scale.set(3, 3, 3);
        self.scene.add(self.tzObject);
      });
    },
    showModelName() {
      let self = this;
      self.tzObject.traverse(function (object) {
        if (object.isMesh) {
          const earthDiv = document.createElement("div");
          earthDiv.className = "labelzwz";
          earthDiv.textContent = object.name;
          earthDiv.style.marginTop = "-20px";
          earthDiv.addEventListener("click", self.showModel, false);
          const earthLabel = new CSS2DObject(earthDiv);
          earthLabel.position.set(0, 0, 0);
          object.add(earthLabel);
        }
      });
    },
    hiddenModelText() {
      let self = this;
      self.tzObject.traverse(function (object) {
        if (object.isMesh) {
          object.remove(object.children[0]);
        }
      });
    },
    loadCircle() {
      let circleMat = new THREE.MeshBasicMaterial({
        color: "yellow",
      });
      let circleGeo = new THREE.CircleGeometry(0.01, 20);
      this.circle = new THREE.Mesh(circleGeo, circleMat);
      this.circle.rotation.x = -Math.PI / 2;
      this.circle.position.set(-4.4, 2.6, 20.9);
      this.circle.material.transparent = true;
      this.circle.material.opacity = 1;
      this.circle.name = "circle";
      this.scene.add(this.circle);
    },
    addEvent(e) {
      let self = this;
      let fn = function (event) {
        /* self.showCard = false */
        const { offsetX, offsetY } = event;
        const x = (offsetX / self.width) * 2 - 1;
        const y = -(offsetY / self.height) * 2 + 1;
        const mousePoint = new THREE.Vector2();
        mousePoint.x = x;
        mousePoint.y = y;
        const raycaster = new THREE.Raycaster();
        // 设置鼠标位置和参考相机
        raycaster.setFromCamera(mousePoint, self.camera);
        // 鼠标点击对应的物体（所有鼠标映射到的物体，包括被遮挡的）
        const intersects = raycaster.intersectObjects(
          self.scene.children,
          true
        );
        /* console.log("intersects", intersects); */
        if (intersects.length > 0) {
          let op = intersects[0].point;
          let nx = op.x;
          let ny = op.y + 0.01;
          let nz = op.z;
          let np = new THREE.Vector3(nx, ny, nz);
          /* self.circle.position.set(0, 0, 0); */
          self.circle.position.copy(np);

          /* console.log(intersects[0].name);
          self.circle.position.set(0, 0, 0);
          self.circle.position.copy(intersects[0].point); */
        }
      };
      if (e) {
        self.renderer.domElement.addEventListener("pointermove", fn, true);
      } else {
        self.renderer.domElement.removeEventListener("pointermove", fn, true);
      }
    },
    addClickEvent(e) {
      let self = this;
      console.log("e", e);
      self.fn2 = function (event) {
        /* self.showCard = false */
        console.log("ggggggg");
        const { offsetX, offsetY } = event;
        const x = (offsetX / self.width) * 2 - 1;
        const y = -(offsetY / self.height) * 2 + 1;
        const mousePoint = new THREE.Vector2();
        mousePoint.x = x;
        mousePoint.y = y;
        const raycaster = new THREE.Raycaster();
        // 设置鼠标位置和参考相机
        raycaster.setFromCamera(mousePoint, self.camera);
        // 鼠标点击对应的物体（所有鼠标映射到的物体，包括被遮挡的）
        const intersects = raycaster.intersectObjects(
          self.scene.children,
          true
        );
        /* console.log("intersects", intersects); */
        if (intersects.length > 0 && self.value) {
          let op = intersects[0].point;
          let nx = op.x;
          let ny = op.y + 0.1;
          let nz = op.z;
          let np = new THREE.Vector3(nx, ny, nz);
          self.controls.target = np;
          self.camera.position.copy(np);
          /* self.camera.lookAt(np); */

          /* self.camera.position.set(0, 0, 0);
          self.camera.position.copy(intersects[0].point);
          self.controls.update(); */
        }
      };
      if (e) {
        self.renderer.domElement.addEventListener("click", self.fn2, true);
      } else {
        self.renderer.domElement.removeEventListener("click", self.fn2, true);
      }
    },
    showModel(e) {
      console.log("1111", e.target.innerText);
      this.$router.push({ name: "modules", query: { moduleName: "yq3.fbx" } });
    },
    animate() {
      this.animationFrame = requestAnimationFrame(this.animate);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      this.labelRenderer.render(this.scene, this.camera);
      TWEEN.update();
    },
    raom() {
      this.camera.position.set(-4.4, 1.6, 20.9);
    },
  },
  beforeCreate() {},
  mounted() {
    // 初始化
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    this.controls = null;
    this.animationFrame = null;
    this.circle = null;
    this.helper = null;
    this.clock = null;
    this.tween = null;
    this.canvas = null;
    // 结束
    window.ob = this;
    let baseWidth = document.documentElement.clientWidth;
    let baseHeight = document.documentElement.clientHeight;
    this.width = baseWidth * (1080 / baseHeight);
    this.createCanvas();
    this.init();
    this.animate();
    this.loadCircle();
    this.loadModelFbx();

    /* this.loadModel() */
  },
  beforeDestroy() {
    cancelAnimationFrame(this.animationFrame);
    this.renderer.domElement.removeEventListener("click", this.fn2, true);
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    this.controls = null;
  },
};
</script>

<style scoped lang="scss">
#web-house {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
  .info {
    position: absolute;
    display: flex;
    height: 50px;
    top: 150px;
    right: 300px;
    color: #fff;
    z-index: 999;
  }
  .info1 {
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-right: 20px;
    font-size: 16px;
    background: rgba(11, 11, 11, 0.4);
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    .text {
      margin-right: 10px;
    }
  }
}
.labelzwz {
  color: #fff;
  padding: 2px;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

</style>
