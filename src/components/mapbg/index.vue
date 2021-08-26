<template>
  <div id="WebGL-output">
    <Card v-if="showCard" @close="close" :station-name="stationName"></Card>
    <!-- <div class="title one" ref="one">第一个盒子</div> -->
  </div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Card from "../../components/card/index.vue";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
export default {
  name: "mapbg",
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
      modelUrl2: "/models/DX1.glb",
      showCard: false,
      loadscene: null,
      loadscene2: null,
      x: 10,
      y: 10,
      z: 10,
      stationName: "",
    };
  },
  computed: {
    seismometry() {
      // console.log("监听到vux改变了");
      return this.$store.state.map.seismometry;
    },
  },
  watch: {
    seismometry: function (value) {
      if (value) {
        this.loadscene.children[2].visible = true;
      } else {
        this.loadscene.children[2].visible = false;
        this.hiddenAllText();
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
      /* this.camera.position.set(0, 100, 20); */
      this.camera.position.set(0, 100, 50);

      // 文字
      self.labelRenderer = new CSS2DRenderer();
      self.labelRenderer.setSize(this.width, this.height);
      /* self.labelRenderer.domElement.style.position = "absolute"; */
      /* self.labelRenderer.domElement.style.top = "0px"; */
      document
        .getElementById("WebGL-output")
        .appendChild(self.labelRenderer.domElement);

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
        .getElementById("WebGL-output")
        .appendChild(this.renderer.domElement);

      let orbitcontrols = new OrbitControls(
        this.camera,
        this.renderer.domElement
      );

      this.renderer.domElement.addEventListener("click", (event) => {
        /* self.showCard = false */

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
        console.log("intersects", intersects);
        if (intersects.length > 0) {
          /* self.close() */
          intersects.forEach((element) => {
            if (
              element.object.name.indexOf("站") !== -1 ||
              element.object.name.indexOf("台") !== -1
            ) {
              console.log(element.object.name);
              this.stationName = element.object.name;
              self.showCard = true;
              console.log(self.showCard);
            }
          });
          console.log(intersects[0].object.name, intersects[0].object.position);
        }
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
        self.loadscene = gltf.scene;
        self.loadscene.traverse(function (object) {
          if (object.isMesh) {
            object.castShadow = true;
          }
        });

        console.log("Wuti", self.loadscene);
        // mesh方法
        // 4/5改变主体
        // loadscene.children[0].children[1].material.color.set(0xf10303);
        self.loadscene.scale.set(11, 11, 11);
        self.loadscene.rotation.set(0, 0, 0);
        self.loadscene.position.set(-10, 0, 0);
        console.log("self.loadscene", self.loadscene);
        self.scene.add(self.loadscene);
        self.showAllText();
      });
      loader1.load(this.modelUrl2, function (gltf2) {
        console.log("gltf2", gltf2);
        self.loadscene2 = gltf2.scene;
        self.loadscene2.traverse(function (object) {
          if (object.isMesh) {
            let color = new THREE.Color(0x045526);
            object.material.emissive = color;
            object.material.emissiveIntensity = 0.6;
            console.log("objectcolor", object);
            object.castShadow = true;
          }
        });
        self.loadscene2.scale.set(15, 15, 15);

        self.loadscene2.position.set(0, -15, 0);

        self.scene.add(self.loadscene2);
      });
    },
    loaderImg() {
      let seft = this;
      console.log("this.loadscene", this.loadscene);
      // 加载texture的一个类。 内部使用ImageLoader来加载文件。
      let texture = new THREE.TextureLoader().load("/models/ball.png");
      // wrapS这个值定义了纹理贴图在水平方向上将如何包裹，RepeatWrapping纹理将简单地重复到无穷大
      // wrapT这个值定义了纹理贴图在垂直方向上将如何包裹
      // 变成一个圈
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping; //每个都重复
      // 纹理将在表面上，分别在U、V方向重复多少次。
      texture.repeat.set(1, 1);
      // 将其设置为true，以便在下次使用纹理时触发一次更新。 这对于设置包裹模式尤其重要。
      texture.needsUpdate = true;
      // 圆柱几何体（CylinderGeometry）
      // 圆柱的顶部半径/圆柱的底部半径/圆柱的高度/圆柱侧面周围的分段数
      let geometry = new THREE.CylinderGeometry(10, 10, 15, 64);
      let materials = [
        // 基础网格材质(MeshBasicMaterial)一个以简单着色（平面或线框）方式来绘制几何体的材质。
        new THREE.MeshBasicMaterial({
          // 颜色贴图。默认为null
          map: texture,
          side: THREE.DoubleSide,
          // 材质透明？
          transparent: true,
        }),
        new THREE.MeshBasicMaterial({
          transparent: true,
          // 可见度
          opacity: 0,
          side: THREE.DoubleSide,
        }),
        new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0,
          side: THREE.DoubleSide,
        }),
      ];
      let mesh = new THREE.Mesh(geometry, materials);
      mesh.position.set(
        125.36941528320312,
        51.433692932128906,
        -0.1852910816669464
      );
      /* mesh.rotation.set(0, 0.6, 0.6); */

      // 先获取geometey的中心点位置并留存
      /* let center = new THREE.Vector3();
      mesh.geometry.computeBoundingBox();
      mesh.geometry.boundingBox.getCenter(center);
      let x = center.x;
      let y = center.y;
      let z = center.z; */

      // 把对象放到坐标原点
      /*  mesh.geometry.center(); */

      // 绕轴旋转
      /* mesh.geometry.rotateY(180); */
      mesh.rotation.set(-80, 0, 0);

      // 再把对象放回原来的地方
      /* mesh.geometry.translate(x, y, z);
      console.log(mesh); */

      this.loadscene.children[2].add(mesh);
      console.log("this.loadscene", this.loadscene);
      let s = 0;
      let p = 1;
      function animate1() {
        // 一定要在此函数中调用
        s += 0.1;
        p -= 0.1;
        if (s > 2) {
          s = 0;
          p = 1;
        }
        mesh.scale.set(1 + s, 1, 1 + s);
        mesh.material[0].opacity = p;

        requestAnimationFrame(animate1);
      }

      animate1();
    },
    loadText() {
      let self = this;
      const loader = new THREE.FontLoader();
      loader.load("/fonts/helvetiker_regular.typeface.json", function (font) {
        const color = 0x006699;
        const matLite = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide,
        });
        const message = "tzzzzz";
        const shapes = font.generateShapes(message, 20);
        const geometry = new THREE.ShapeGeometry(shapes);
        geometry.computeBoundingBox();
        const xMid =
          -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
        geometry.translate(xMid, 0, 0);
        const text = new THREE.Mesh(geometry, matLite);

        /* self.scene.add(text); */

        self.loadscene.children[1].children.push(text);
        text.position.set(0, 0, 0);
        console.log("self.loadscene", self.loadscene);
      }); //end load function
    },
    rendText() {
      this.$refs.one.style.left = "200px";
      console.log("zzzwww", this.$refs.one.style);
    },
    showAllText() {
      let self = this;
      self.loadscene.traverse(function (object) {
        if (object.isMesh) {
          if (object.name == "zhe" || object.name == "zhe_2") {
            return;
          } else {
            const earthDiv = document.createElement("div");
            earthDiv.className = "labelzwz";
            earthDiv.textContent = object.name;
            earthDiv.style.marginTop = "-20px";
            const earthLabel = new CSS2DObject(earthDiv);
            earthLabel.position.set(0, 0, 0);
            object.add(earthLabel);
          }
        }
      });
    },
    hiddenAllText() {
      let self = this;
      self.loadscene.traverse(function (object) {
        if (object.isMesh) {
          if (object.name == "zhe" || object.name == "zhe_2") {
            return;
          } else {
            object.remove(object.children[0])
            console.log(object);
          }
        }
      });
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
      this.labelRenderer.render(this.scene, this.camera);
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
    this.labelRenderer = null;
    
    // 结束
    /* 
    let scaleRate =  baseWidth/1920
    let bgStyle = document.getElementById('WebGL-output').style
    this.width = `${baseWidth/scaleRate}` */
    let baseWidth = document.documentElement.clientWidth;
    let baseHeight = document.documentElement.clientHeight;
    this.width = baseWidth * (1080 / baseHeight);
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
  z-index: 9;
}
.labelzwz {
  color: #fff;
  padding: 2px;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}
</style>
