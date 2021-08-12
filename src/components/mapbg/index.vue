<template>
  <div id="WebGL-output">
    <Card v-if="showCard"></Card>
  </div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
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
      modelUrl: "/models/dixing.glb",
      showCard: false,
    };
  },
  methods: {
    init() {
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
        .getElementById("WebGL-output")
        .appendChild(this.renderer.domElement);

      let orbitcontrols = new OrbitControls(
        this.camera,
        this.renderer.domElement
      );
      this.renderer.domElement.addEventListener("click", (event) => {
        const { offsetX, offsetY } = event;
        const x = (offsetX / this.width) * 2 - 1;
        const y = -(offsetY / this.height) * 2 + 1;
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
        if (intersects.length > 0) {
          this.showCard = !this.showCard;
          console.log(intersects[0].object.name);
        }

        // 过滤网格和地面
        /* const intersect = intersects.filter(
          (intersect) =>
            !(intersect.object instanceof GridHelper) &&
            intersect.object.name !== "plane"
        )[0]; */
      });
      // 坐标线
      /* let axes = new THREE.AxisHelper(100);
      this.scene.add(axes); */
      let ambientLight = new THREE.AmbientLight(0x0c0c0c, 4);
      this.scene.add(ambientLight);

      let dirlight = new THREE.DirectionalLight(0xdfebff, 1);
      dirlight.position.set(20, 20, 20);
      this.scene.add(dirlight);
    },
    loadModel() {
      let self = this; //这一点很重要。。
      let loader1 = new GLTFLoader();

      loader1.load(this.modelUrl, function (gltf) {
        // 模型组loadscene
        const loadscene = gltf.scene;
        loadscene.traverse(function (object) {
          if (object.isMesh) {
            object.castShadow = true;
          }
        });
        console.log("Wuti", loadscene);
        // mesh方法
        // 4/5改变主体
        // loadscene.children[0].children[1].material.color.set(0xf10303);
        loadscene.scale.set(13, 13, 13);
        loadscene.rotation.set(0, 0, 0);
        loadscene.position.set(-10, 0, 0);

        self.scene.add(loadscene);
      });
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
#WebGL-output {
  position: absolute;
}
</style>
