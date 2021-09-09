<template>
  <div id="WebGL-output">
    <Card v-if="showCard" @close="close" :station-name="stationName"></Card>
    <!-- <div class="title one" ref="one">第一个盒子</div> -->
    <canvas id="can" width="300" height="300"></canvas>
  </div>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Card from "../../components/card/index.vue";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import TWEEN from "@tweenjs/tween.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
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
      modelUrl2: "/models/11.glb",
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
      let oldP = {
        x: 0,
        y: 100,
        z: 50,
      };
      let oldT = {
        x: 0,
        y: 0,
        z: 0,
      };
      let newP = {
        x: 0,
        y: 40,
        z: 80,
      };
      let newT = {
        x: 0,
        y: 0,
        z: 0,
      };
      if (value) {
        /* this.loadscene.children[2].visible = true; */
        this.showAllText();
        this.animateCamera(oldP, oldT, newP, newT);
      } else {
        /* this.loadscene.children[2].visible = false; */
        this.hiddenAllText();
        this.animateCamera(newP, newT, oldP, oldT);
      }
    },
  },
  methods: {
    close() {
      console.log("1111");
      this.showCard = false;
    },
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
      /* this.camera.position.set(0, 40, 100); */
      this.camera.position.set(0, 100, 50);

      // 文字
      self.labelRenderer = new CSS2DRenderer();
      self.labelRenderer.setSize(this.width, this.height);
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
      /* this.renderer.toneMappingExposure = 1; */
      this.renderer.domElement.style.position = "absolute";
      this.renderer.domElement.style.top = "0px";
      //this.renderer.shadowMapEnabled = true;
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      document
        .getElementById("WebGL-output")
        .appendChild(this.renderer.domElement);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.maxPolarAngle = Math.PI * 0.5;
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
      let ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      this.scene.add(ambientLight);

      /* let dirlight = new THREE.DirectionalLight(0xdfebff, 1);
      dirlight.position.set(20, 20, 20);
      this.scene.add(dirlight); */
      let light = new THREE.PointLight(0xe38210, 1);
      light.position.set(0, 50, 0);
      light.name = "点光源";
      this.scene.add(light);

      /* let light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
      this.scene.add(light); */
      // 添加底部图片
      /*  const loader = new THREE.TextureLoader();
      const groundTexture = loader.load("/models/bg.png");
      groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
      groundTexture.repeat.set(25, 25);
      groundTexture.anisotropy = 16;
      groundTexture.encoding = THREE.sRGBEncoding;

      const groundMaterial = new THREE.MeshLambertMaterial({
        map: groundTexture,
      });

      let mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1200, 1200),
        groundMaterial
      );
      mesh.position.y = -50;
      mesh.rotation.x = -Math.PI / 2;
      mesh.receiveShadow = true;
      this.scene.add(mesh); */
    },
    loadCanvas() {
      let self = this;
      // Set canvas drawing surface
      var space = document.getElementById("can");
      var surface = space.getContext("2d");
      surface.scale(1, 1);

      // Set Particles
      var particles = [];
      var particle_count = 150;
      for (var i = 0; i < particle_count; i++) {
        particles.push(new particle());
      }
      var time = 0;
      // Set wrapper and canvas items size
      var canvasWidth = 480;
      var canvasHeight = 480;
      /* $(".wrapper").css({ width: canvasWidth, height: canvasHeight });
      $("#surface").css({ width: canvasWidth, height: canvasHeight }); */

      // shim layer with setTimeout fallback from Paul Irish
      window.requestAnimFrame = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 6000 / 60);
          }
        );
      })();

      function particle() {
        this.speed = { x: -1 + Math.random() * 2, y: -5 + Math.random() * 5 };
        /* canvasWidth = document.getElementById("can").width;
        canvasHeight = document.getElementById("can").height; */
        this.location = { x: 480 / 2, y: 480 / 2 + 35 };

        this.radius = 0.5 + Math.random() * 1;

        this.life = 10 + Math.random() * 10;
        this.death = this.life;

        this.r = 255;
        this.g = Math.round(Math.random() * 155);
        this.b = 0;
      }

      function ParticleAnimation() {
        surface.globalCompositeOperation = "source-over";
        surface.fillStyle = "black";
        surface.fillRect(0, 0, 480, 480);
        surface.globalCompositeOperation = "lighter";

        for (var i = 0; i < particles.length; i++) {
          var p = particles[i];

          surface.beginPath();

          p.opacity = Math.round((p.death / p.life) * 100) / 100;
          var gradient = surface.createRadialGradient(
            p.location.x,
            p.location.y,
            0,
            p.location.x,
            p.location.y,
            p.radius
          );
          gradient.addColorStop(
            0,
            "rgba(" + p.r + ", " + p.g + ", " + p.b + ", " + p.opacity + ")"
          );
          gradient.addColorStop(
            0.5,
            "rgba(" + p.r + ", " + p.g + ", " + p.b + ", " + p.opacity + ")"
          );
          gradient.addColorStop(
            1,
            "rgba(" + p.r + ", " + p.g + ", " + p.b + ", 0)"
          );
          surface.fillStyle = gradient;
          surface.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
          surface.fill();
          p.death--;
          p.radius++;
          p.location.x += p.speed.x;
          p.location.y += p.speed.y;

          //regenerate particles
          if (p.death < 0 || p.radius < 0) {
            //a brand new particle replacing the dead one
            particles[i] = new particle();
          }
        }

        requestAnimFrame(ParticleAnimation);
      }

      ParticleAnimation();

      // canvas画布对象作为CanvasTexture的参数重建一个纹理对象
      // canvas画布可以理解为一张图片
      let canvas = document.getElementById("can");
      var texture = new THREE.CanvasTexture(canvas);

      //打印纹理对象的image属性
      // console.log(texture.image);
      //矩形平面
      /* self.geometry = new THREE.PlaneGeometry(16, 16); */
      //添加立方体
      var geometry = new THREE.BoxBufferGeometry(16, 16, 16);

      var material = new THREE.MeshPhongMaterial({
        map: texture, // 设置纹理贴图
      });
      material.map.needsUpdate = true;
      // 创建一个矩形平面网模型，Canvas画布作为矩形网格模型的纹理贴图
      var mesh = new THREE.Mesh(geometry, material);
      this.scene.add(mesh);
    },
    loadModel() {
      let self = this; //这一点很重要。。
      let loader1 = new GLTFLoader();

      loader1.load(this.modelUrl, function (gltf) {
        // 模型组loadscene
        self.loadscene = gltf.scene;
        self.loadscene.traverse(function (object) {
          if (object.isMesh) {
            /* object.castShadow = true;
            object.material.opacity = 0.6;
            object.material.transparent = true;
            object.material.colorWrite = true;
            object.material.flatShading = true; */
            if (object.name == "zhe_2" ||object.name == "zhe") {
              // 改变主体颜色

              const personTexture = new THREE.TextureLoader();
              const modeltexture = personTexture.load(
                "/models/left2right.png"
              ); // 加载贴图
              modeltexture.wrapS = THREE.RepeatWrapping;
              modeltexture.wrapT = THREE.RepeatWrapping;
              modeltexture.repeat.set(1, 1);

              let modelmaterial = new THREE.MeshLambertMaterial({
                color: 0x0E3F87,
                transparent: true, //允许透明计算
                opacity: 0.9, //半透明设置
                /* map: modeltexture, */
              });

              object.material = modelmaterial
              /* object.material.emissive = new THREE.Color(0x0950ca); */
            }
            if (object.name == "jie") {
              /*  object.material.emissive = new THREE.Color(0xffffff); */
              
              let modelmaterial = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                transparent: true, //允许透明计算
                opacity: 1, //半透明设置
                /* map: modeltexture, */
              });

              object.material = modelmaterial
            }
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
        /* self.showAllText(); */
      });
      loader1.load(this.modelUrl2, function (gltf2) {
        console.log("gltf2", gltf2);
        self.loadscene2 = gltf2.scene;
        self.loadscene2.traverse(function (object) {
          if (object.isMesh) {
            /* let color = new THREE.Color(0x045526);
            object.material.emissive = color;
            object.material.emissiveIntensity = 2;
            object.material.opacity = 0.8;
            object.material.transparent = true;
            console.log("objectcolor", object);
            object.castShadow = true; */
          }
        });
        self.loadscene2.scale.set(0.3, 0.3, 0.3);
        self.loadscene2.position.set(0, -10, 0);
        self.scene.add(self.loadscene2);
      });
    },
    initRenderPass() {
      // 加载后期发光效果
      let renderScene = new RenderPass(this.scene, this.camera);
      //辉光
      this.bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.6,
        0.1,
        0.1
      );
      this.bloomPass.strength = 0.1; // 发光强度
      this.bloomPass.radius = 0; // 发光半径
      this.bloomPass.threshold = 0.1; // 发光阈值
      this.renderer.toneMappingExposure = 1.2; //设置场景曝光度
      this.composer = new EffectComposer(this.renderer);
      this.composer.addPass(renderScene);
      this.composer.addPass(this.bloomPass);
    },
    loadLine() {
      //创建条形平面-箭头流动的路径
      const geometry = new THREE.PlaneGeometry(20, 2, 32);

      //加载纹理
      let arrowLineTexture = new THREE.TextureLoader().load(
        "/models/right.png"
      );
      arrowLineTexture.wrapS = arrowLineTexture.wrapT = THREE.RepeatWrapping; //每个都重复
      arrowLineTexture.repeat.set(10, 1); //水平重复10次
      arrowLineTexture.needsUpdate = true;

      // 加载的纹理作为纹理贴图创建材质
      let materials = new THREE.MeshBasicMaterial({
        map: arrowLineTexture,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geometry, materials);
      mesh.position.set(0, 10, 0);
      this.scene.add(mesh);
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

      mesh.rotation.set(-80, 0, 0);

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
          if (
            object.name == "zhe" ||
            object.name == "zhe_2" ||
            object.name == "jie"
          ) {
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
            object.remove(object.children[0]);
            console.log(object);
          }
        }
      });
    },
    animate() {
      let self = this;
      if (self.scene.getObjectByName("底部小圆")) {
        self.scene.getObjectByName("底部小圆").rotation.y += 0.03;
      }
      requestAnimationFrame(this.animate);

      this.renderer.render(this.scene, this.camera);
      this.labelRenderer.render(this.scene, this.camera);
      TWEEN.update();
      this.composer.render();
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
    this.raf = null;
    this.sprite = null;
    this.bloomPass = null;
    this.composer = null;
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
    this.initRenderPass();
    /* this.loadCanvas(); */
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
.labelzwz:hover {
  background-color: rgba(16, 19, 172, 0.6);
  /* background-color: rgb(53, 84, 224); */
}
#can {
  width: 480px;
  height: 480px;
  position: absolute;
  z-index: 9999;
  margin: 20px auto;
  display: block;
}
</style>
