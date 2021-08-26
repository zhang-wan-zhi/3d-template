<template>
  <div id="WebGL-map"></div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Card from "../../components/card/index.vue";
import * as d3 from "d3";
export default {
  name: "mapb",
  components: {
    Card,
  },
  data() {
    return {
      cube: null,
      sphere: null,
      step: 0,
      stats: null,
      group: null,
      width: 0,
      height: 1080,
      modelUrl: "/models/QB.glb",
      showCard: false,
      loadscene: null,
      x: 10,
      y: 10,
      z: 10,
      stationName: "",
    };
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
      this.scene.background = new THREE.Color(0x000000);
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        0.2,
        1000
      );
      this.camera.position.set(0, 100, 20);
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
        .getElementById("WebGL-map")
        .appendChild(this.renderer.domElement);
      let orbitcontrols = new OrbitControls(
        this.camera,
        this.renderer.domElement
      );
      // 坐标线
      /* let axes = new THREE.AxisHelper(100);
      this.scene.add(axes); */
      let ambientLight = new THREE.AmbientLight(0x0c0c0c, 4);
      this.scene.add(ambientLight);
      let dirlight = new THREE.DirectionalLight(0xdfebff, 1);
      dirlight.position.set(20, 20, 20);
      this.scene.add(dirlight);
    },
    // 加载地图数据
    loadMapData() {
      let self = this;
      const loader = new THREE.FileLoader();
      loader.load("/models/110100.json", (data) => {
        console.log("data", data.geometry);
        const jsondata = JSON.parse(JSON.stringify(data));
        console.log("jsondata", jsondata);
        self.generateGeometry(jsondata);
      });
    },
    generateGeometry(jsondata) {
      // 初始化一个地图对象
      this.smap = new THREE.Object3D();
      // 墨卡托投影转换
      const projection = d3
        .geoMercator()
        .center([104.0, 37.5])
        .scale(80)
        .translate([0, 0]);
      console.log("jsondata.features", jsondata.features);
      jsondata.features.forEach((elem) => {
        // 定一个省份3D对象
        const province = new THREE.Object3D();
        this.smap.add(province);
      });
      this.scene.add(this.smap);
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    // 初始化
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    this.controls = null;
    this.animationFrame = null;
    this.circle = null;
    this.helper = null;
    this.smap = null;
    // 结束
    let baseWidth = document.documentElement.clientWidth;
    let baseHeight = document.documentElement.clientHeight;
    this.width = baseWidth * (1080 / baseHeight);
    window.ob = this;
    this.init();
    this.loadMapData();
    this.animate();
  },
};
</script>

<style>
#WebGL-map {
  position: absolute;
  z-index: 9;
}
</style>
