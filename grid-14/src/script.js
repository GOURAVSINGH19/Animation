import * as THREE from 'three';
import Lenis from 'lenis';
import { calcFov, debounce } from './utils';
import vertexShader from "./shaders/Vertex.glsl"
import fragmentShader from "./shaders/fragment.glsl"
const canvas = document.querySelector('.webgl');

let scroll = {
    scrollY: window.scrollY,
    scrollVelocity: 0,
};

const lenis = new Lenis({
    smoothWheel: true,
    orientation: "vertical",
});

lenis.on("scroll", (e) => {
    scroll.scrollY = window.scrollY;
    scroll.scrollVelocity = e.velocity;
});

function scrollRaf(time) {
    lenis.raf(time);
    requestAnimationFrame(scrollRaf);
}

requestAnimationFrame(scrollRaf);


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


const CAMERA_POS = 500;
// scene
let scene = new THREE.Scene();

// camera setup
const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    10,
    1000
);
camera.position.z = CAMERA_POS;
camera.fov = calcFov(CAMERA_POS);
camera.updateProjectionMatrix();

let observer;
let mediaStore;

observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const index = entry.target.dataset.index;

            if (index) {
                mediaStore[parseInt(index)].isInView = entry.isIntersecting;
            }
        });
    },
    { rootMargin: "500px 0px 500px 0px" }
);


const setMediaStore = (scrollY) => {
    const media = [...document.querySelectorAll("[data-img]")];

    console.log(media)
    mediaStore = media.map((media, i) => {
        observer.observe(media);

        media.dataset.index = String(i);

        const bounds = media.getBoundingClientRect();
        const imageMaterial = material.clone();

        const imageMesh = new THREE.Mesh(geometry, imageMaterial);
        imageMesh.scale.set(bounds.width, bounds.height, 1);

        if (!(bounds.top >= 0 && bounds.top <= window.innerHeight)) {
            imageMesh.position.y = window.innerHeight;
        }

        scene.add(imageMesh);

        return {
            media,
            material: imageMaterial,
            mesh: imageMesh,
            width: bounds.width,
            height: bounds.height,
            top: bounds.top + scrollY,
            left: bounds.left,
            isInView: bounds.top >= -500 && bounds.top <= window.innerHeight + 500,
        };
    });
};



let geometry = new THREE.PlaneGeometry(1, 1, 100, 100);
let material = new THREE.ShaderMaterial({
    uniforms: {
        uResolution: {
            value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        uTime: { value: 0 },
        uScrollVelocity: { value: 0 },
        uEdgeSize: { value: 0.001 },
    },
    vertexShader,
    fragmentShader,
    glslVersion: THREE.GLSL3,
});

// renderer setup
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// render loop
const render = (time = 0) => {
    time /= 1000;

    mediaStore.forEach((object) => {
        if (object.isInView) {
            object.material.uniforms.uResolution.value.x = window.innerWidth;
            object.material.uniforms.uResolution.value.y = window.innerHeight;
            object.material.uniforms.uTime.value = time;
            object.material.uniforms.uScrollVelocity.value = scroll.scrollVelocity;
        } else {
            object.mesh.position.y = 2 * window.innerHeight;
        }
    });

    // setPositions();

    renderer.render(scene, camera);

    requestAnimationFrame(render);
};

// window resize handling
window.addEventListener(
    "resize",
    debounce(() => {
        const fov = calcFov(CAMERA_POS);

        resizeThreeCanvas({ camera, fov, renderer });

        mediaStore.forEach((object) => {
            const bounds = object.media.getBoundingClientRect();
            object.mesh.scale.set(bounds.width, bounds.height, 1);
            object.width = bounds.width;
            object.height = bounds.height;
            object.top = bounds.top + scroll.scrollY;
            object.left = bounds.left;
            object.isInView = bounds.top >= 0 && bounds.top <= window.innerHeight;
        });
    })
);

// on page load
window.addEventListener("load", () => {
    // media details
    setMediaStore(scroll.scrollY);
    requestAnimationFrame(render);

    document.body.classList.remove("loading");
});
