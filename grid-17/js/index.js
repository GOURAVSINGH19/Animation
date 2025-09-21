import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const section2 = document.querySelector(".section_2");
const section3 = document.querySelector(".section_3");
const section4 = document.querySelector(".section_4");
// const section5 = document.querySelector(".section_2");

const lenis = new Lenis({
  lerp: 0.1,
  smoothWheel: true,
});

// === Scene Setup ===
const scene = new THREE.Scene();
const canvas = document.getElementById("canvas");

// === Camera Setup ===
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

// === Renderer ===
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// === Lights ===
const ambientLight = new THREE.AmbientLight("white", 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight("white", 3);
directionalLight.position.set(5, 10, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight("white", 0.8);
directionalLight2.position.set(-5, 8, -5);
scene.add(directionalLight2);

const rectAreaLight = new THREE.RectAreaLight("white", 0.5, 50, 50);
rectAreaLight.position.set(-20, -40, 10);
rectAreaLight.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(rectAreaLight);

// === Load Model ===
gsap.set(camera.position, { x: 0, y: 4, z: 5 });
gsap.set(camera.rotation, { x: 0, y: 0, z: 0 });

const gltfLoader = new GLTFLoader();
let model = null;
let mixer = null;

gltfLoader.load("/can.glb", (gltf) => {
  model = gltf.scene;
  model.scale.set(2, 2, 2);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home_section",
      start: "10% top",
      end: "+=600%",
      scrub: true,
      markers:true
    },
  });
  tl.to(model.rotation, {
    x: 0.5,
    z: -0.3,
    ease: "linear",
  }).to(model.rotation, {
    rotate: "360deg",
  });
  scene.add(model);
  document.body.classList.remove("loading");
});

// === Animate Loop ===
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// === Resize Handling ===
function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

window.addEventListener("resize", handleResize);
window.scrollTo({ top: 0, behavior: "smooth" });

function lenisLoop() {
  lenis.raf(performance.now());
  requestAnimationFrame(lenisLoop);
}

lenisLoop();
