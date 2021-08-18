<template>
  <div id="web-house"></div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import Card from "../../components/card/index.vue";
export default {
  name: "mapbg",
  components: {
    Card,
  },
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      cube: null,
      sphere: null,
      step: 0,
      stats: null,
      group: null,
      width: 1920,
      height: 1080,
      modelPath: "/models/66.glb",
      showCard: false,
      loadscene: null,
      x: 10,
      y: 10,
      z: 10,
      stationName: "",
    };
  },
  computed: {
    seismometry() {
      /* this.loadscene.children[1].visible = true; */
      console.log("111111222222");
      /* if(this.$store.state.map.seismometry) {
        this.loadscene.children[1].visible = true;
      } else {
        this.loadscene.children[1].visible = false;
      } */
      return this.$store.state.map.seismometry;
    },
  },
  watch: {
    seismometry: function (value) {
      if (value) {
        this.loadscene.children[2].visible = true;
      } else {
        this.loadscene.children[2].visible = false;
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
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x88ccff);

      this.camera = new THREE.PerspectiveCamera(
        75,
        this.width / this.height,
        0.1,
        1000
      );
      this.camera.position.set(0, 10, 0);

      this.camera.rotation.order = 'YXZ'
    // gx
      const ambientlight = new THREE.AmbientLight(0x6688cc)
      this.scene.add(ambientlight)

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
      let orbitcontrols = new OrbitControls(
        this.camera,
        this.renderer.domElement
      );
      // 坐标线
      let axes = new THREE.AxisHelper(100);
      this.scene.add(axes);

      /* let ambientLight = new THREE.AmbientLight(0x0c0c0c, 4);
      this.scene.add(ambientLight); */

      let dirlight = new THREE.DirectionalLight(0xdfebff, 1);
      dirlight.position.set(-20, -20, -20);
      this.scene.add(dirlight);

      
    },
    loadModel() {
      let self = this; //这一点很重要。。
      let loader1 = new GLTFLoader();
      loader1.load(this.modelPath, function (gltf) {
        self.loadscene = gltf.scene;
        self.loadscene.traverse(function (object) {
          if (object.isMesh) {
            object.castShadow = true;
          }
        });
        self.loadscene.scale.set(0.5, 0.5, 0.5);
        self.loadscene.rotation.set(-1, 0, 0);
        self.loadscene.position.set(0, 0, 0);
        console.log("self.loadscene", self.loadscene);
        self.scene.add(self.loadscene);

      });
      /* let fbxLoader = new FBXLoader();
      fbxLoader.load(self.modelPath, function (object) {
        console.log(object);
        object.position.set(0, 0, 0);
        object.scale.set(0.005, 0.005, 0.005);
        self.scene.add(object);
      }); */
    },

    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    window.ob = this;
    this.init();
    this.animate();
    this.loadModel();
  },
};
</script>

<style>
/* #web-house {
  position: absolute;
  width: 1920px;
  height: 1080px;
  z-index: 9;
} */
</style>
