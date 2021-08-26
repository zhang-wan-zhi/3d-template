<template>
  <div id="web-house">
    <station-interior v-show="showInterior"></station-interior>
    <div class="info">
      <div class="info1" @click="showInterior = !showInterior">站台信息</div>
      <div class="info1">
        <div class="text">漫游:</div>
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
import { GUI } from "three/examples/jsm/libs/dat.gui.module.js";
import { Water } from "three/examples/jsm/objects/Water.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";
import stationInterior from "../stationInterior/index.vue";
export default {
  name: "mapbg",
  components: {
    Card,
    stationInterior,
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
      modelPathFbk: "/models/FK1.fbx",
      showCard: false,
      loadscene: null,
      x: 10,
      y: 10,
      z: 10,
      stationName: "",
      sun: null,
      showInterior: false,
      value: false,
      fn2: null,
      modelFileName: "",
    };
  },
  computed: {},
  watch: {
    value: function (newvalue, oldvalue) {
      if (newvalue) {
        this.raom();
        this.addEvent(newvalue);
        this.addClickEvent(newvalue);
      } else {
        this.camera.position.set(15, 15, 50);
        this.controls.target = new THREE.Vector3(0, 0, 0);
        /* this.controls.update(); */
        this.addEvent(newvalue);
        this.addClickEvent(newvalue);
      }
    },
  },
  methods: {
    close() {
      console.log("1111");
      this.showCard = false;
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


      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(this.width, this.height);
      // 设置设备像素比。通常用于避免HiDPI设备上绘图模糊
      this.renderer.setPixelRatio(window.devicePixelRatio);
      // 默认是LinearToneMapping。查看Renderer constants以获取其它备选项
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      // 色调映射的曝光级别。默认是1
      this.renderer.toneMappingExposure = 1;
      //this.renderer.shadowMapEnabled = true;
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      document
        .getElementById("web-house")
        .appendChild(this.renderer.domElement);
      this.clock = new THREE.Clock();

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      /* this.controls.listenToKeyEvents( window );
      this.controls.controlsenablePan = true;
      this.controls.enabled = true
      this.controls.enableKeys = true */
      self.sun = new THREE.Vector3();

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

        console.log('gltf',gltf);
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
      fbxLoader.load(self.modelPathFbk, function (object) {
        console.log(object);
        object.position.set(100, 0, 0);
        object.scale.set(5, 5, 5);
        self.scene.add(object);
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
    animate() {
      this.animationFrame = requestAnimationFrame(this.animate);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
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
    // 结束
    window.ob = this;
    let baseWidth = document.documentElement.clientWidth;
    let baseHeight = document.documentElement.clientHeight;
    this.width = baseWidth * (1080 / baseHeight);

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
</style>
