import "./style.css";
import * as THREE from "three";
import vertexShader from "./shaders/Vertex.glsl";
import fragmentShader from "./shaders/Fragment.glsl";
import Lenis from "lenis";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let scene, camera, renderer, scrollY, totaltarget;

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 100, 1000);
camera.position.z = 500;
camera.fov = (180 * (2 * Math.atan(window.innerHeight / 2 / 500))) / Math.PI;
camera.updateProjectionMatrix();

scene = new THREE.Scene();

let webglImages = [];

function setimageArray() {
  const images = [...document.querySelectorAll("[data-webgl-media]")];

  const imageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
  webglImages = images.map((img, i) => {
    img.style.opacity = 0;
    const { width, height, top, left } = img.getBoundingClientRect();

    const imageMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      glslVersion: THREE.GLSL3,
      uniforms: {
        scrollProgress: {
          value: 0,
        },
      },
    });
    const mesh = new THREE.Mesh(imageGeo, imageMaterial);
    mesh.scale.set(width, height, 1);

    mesh.position.x = left - sizes.width / 2 + width / 2;
    mesh.position.y = -top + sizes.height / 2 - height / 2;
    scene.add(mesh);

    return {
      mesh,
      material: imageMaterial,
      img,
    };
  });
}
setimageArray();
const canvas = document.querySelector(".webgl");
renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setAnimationLoop(animate);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const clock = new THREE.Clock();

function updatePlanesPosition() {
  webglImages.forEach((object, index) => {
    const { width, height, top, left } = object.img.getBoundingClientRect();

    object.mesh.scale.set(width, height, 1);

    object.mesh.position.x = left - sizes.width / 2 + width / 2;
    object.mesh.position.y = -top + sizes.height / 2 - height / 2;
  });
  totaltarget = window.scrollY / window.innerHeight;
}

lenis.on("scroll", updatePlanesPosition);

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  renderer.setSize(sizes.width, sizes.height);

  camera.aspect = sizes.width / sizes.height;

  webglImages.forEach((object, index) => {
    const { width, height, top, left } = object.img.getBoundingClientRect();

    object.mesh.scale.set(width, height, 1);

    object.mesh.position.x = left - sizes.width / 2 + width / 2;
    object.mesh.position.y = -top + sizes.height / 2 - height / 2;
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  camera.updateProjectionMatrix();
  updatePlanesPosition();
});

function animate() {
  scrollY += (totaltarget - scrollY) * 0.1;
  webglImages.forEach((object, i) => {
    object.material.uniforms.scrollProgress.value = scrollY;
  });
  updatePlanesPosition();
  renderer.render(scene, camera);
}
