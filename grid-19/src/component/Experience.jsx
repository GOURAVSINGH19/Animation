import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Bounds, OrbitControls, useHelper, useBounds } from '@react-three/drei';
import { PointLightHelper, SpotLightHelper } from 'three';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import GUI from 'lil-gui';
import Iron from './Iron';
const GuiControls = () => {
    // Refs
    const pointLightRef1 = useRef();
    const pointLightRef2 = useRef();
    const pointLightRef3 = useRef();
    const spotLightRef = useRef();

    // Helpers
    // useHelper(pointLightRef1, PointLightHelper, 1);
    // useHelper(pointLightRef2, PointLightHelper, 1);
    // useHelper(pointLightRef3, PointLightHelper, 1);
    // useHelper(spotLightRef, SpotLightHelper, 1);

    // State
    const [lightParams, setLightParams] = useState({
        intensity: 5,
        bloomIntensity: 0.5,
        color: '#fff',

        // Point Lights
        point1: { x: 0, y: 1, z: 0 },
        point2: { x: 1, y: 1, z: 0 },
        point3: { x: -1, y: 1, z: 0 },

        // Spot Light
        spot: {
            x: 0,
            y: 2,
            z: 5,
            angle: 0.5,
            penumbra: 0.5,
            distance: 10,
            targetX: 0,
            targetY: 0,
            targetZ: 0,
        },
    });

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const minY = 0.6
        const maxY = 1.9
        const speed = 1.5

        const y = (minY + maxY) / 2 + Math.sin(t * speed) * ((maxY - minY) / 2)
        if (pointLightRef1.current) {
            pointLightRef1.current.position.y = y;
        }
    }, [])

    //mouse interaction

    //   useEffect(() => {
    //     function onMouseMove(event) {
    //       setMousePos({
    //         x: (event.clientX / window.innerWidth) * 2 - 1,
    //         y: -((event.clientY / window.innerHeight) * 2 - 1), // invert y for 3D coords
    //       })
    //     }
    //     window.addEventListener('mousemove', onMouseMove)
    //     return () => window.removeEventListener('mousemove', onMouseMove)
    //   }, [])

    useEffect(() => {
        const gui = new GUI();

        // General Settings
        gui.add(lightParams, 'intensity', 0, 10).onChange((val) =>
            setLightParams((prev) => ({ ...prev, intensity: val }))
        );
        gui.add(lightParams, 'bloomIntensity', 0, 4).onChange((val) =>
            setLightParams((prev) => ({ ...prev, bloomIntensity: val }))
        );
        gui.addColor(lightParams, 'color').onChange((val) =>
            setLightParams((prev) => ({ ...prev, color: val }))
        );

        // Point Light 1
        const point1Folder = gui.addFolder('Point Light 1');
        point1Folder.add(lightParams.point1, 'x', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, point1: { ...prev.point1, x: v } }))
        );
        point1Folder.add(lightParams.point1, 'y', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, point1: { ...prev.point1, y: v } }))
        );
        point1Folder.add(lightParams.point1, 'z', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, point1: { ...prev.point1, z: v } }))
        );

        // Point Light 2
        const point2Folder = gui.addFolder('Point Light 2');
        point2Folder.add(lightParams.point2, 'x', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, point2: { ...prev.point2, x: v } }))
        );
        point2Folder.add(lightParams.point2, 'y', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, point2: { ...prev.point2, y: v } }))
        );
        point2Folder.add(lightParams.point2, 'z', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, point2: { ...prev.point2, z: v } }))
        );

        // Point Light 3
        const point3Folder = gui.addFolder('Point Light 3');
        point3Folder.add(lightParams.point3, 'x', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, point3: { ...prev.point3, x: v } }))
        );
        point3Folder.add(lightParams.point3, 'y', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, point3: { ...prev.point3, y: v } }))
        );
        point3Folder.add(lightParams.point3, 'z', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, point3: { ...prev.point3, z: v } }))
        );

        // Spot Light
        const spotFolder = gui.addFolder('Spot Light');
        spotFolder.add(lightParams.spot, 'x', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, spot: { ...prev.spot, x: v } }))
        );
        spotFolder.add(lightParams.spot, 'y', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, spot: { ...prev.spot, y: v } }))
        );
        spotFolder.add(lightParams.spot, 'z', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, spot: { ...prev.spot, z: v } }))
        );
        spotFolder.add(lightParams.spot, 'angle', 0, Math.PI / 2).onChange((v) =>
            setLightParams((prev) => ({ ...prev, spot: { ...prev.spot, angle: v } }))
        );
        spotFolder.add(lightParams.spot, 'penumbra', 0, 1).onChange((v) =>
            setLightParams((prev) => ({ ...prev, spot: { ...prev.spot, penumbra: v } }))
        );
        spotFolder.add(lightParams.spot, 'distance', 0, 50).onChange((v) =>
            setLightParams((prev) => ({ ...prev, spot: { ...prev.spot, distance: v } }))
        );
        spotFolder.add(lightParams.spot, 'targetX', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, spot: { ...prev.spot, targetX: v } }))
        );
        spotFolder.add(lightParams.spot, 'targetY', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, spot: { ...prev.spot, targetY: v } }))
        );
        spotFolder.add(lightParams.spot, 'targetZ', -10, 10).onChange((v) =>
            setLightParams((prev) => ({ ...prev, spot: { ...prev.spot, targetZ: v } }))
        );

        return () => gui.destroy();
    }, []);

    const { color, bloomIntensity, point1, point2, point3, spot } = lightParams;

    return (
        <Suspense fallback={null}>
            {/* Point Lights */}
            <pointLight ref={pointLightRef1} position={[point1.x, point1.y, point1.z]} intensity={5} color={color} decay={1} distance={0} />
            <pointLight ref={pointLightRef2} position={[point2.x, point2.y, point2.z]} intensity={5} color={color} decay={1} distance={0} />
            <pointLight ref={pointLightRef3} position={[point3.x, point3.y, point3.z]} intensity={5} color={color} decay={1} distance={0} />

            {/* Spot Light */}
            <spotLight
                ref={spotLightRef}
                position={[spot.x, spot.y, spot.z]}
                intensity={5}
                angle={spot.angle}
                penumbra={spot.penumbra}
                distance={spot.distance}
                decay={1}
                color={color}
                castShadow
            />

            {/* Target indicator */}

            {/* <mesh position={[spot.targetX, spot.targetY, spot.targetZ]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="red" />
      </mesh> */}

            {/* Model (Iron handles its own Bounds + SelectToZoom) */}
            <Iron position={[0, -1, 0]} />

            {/* Postprocessing */}
            <EffectComposer>
                <Bloom intensity={bloomIntensity} luminanceThreshold={1} luminanceSmoothing={0.5} />
            </EffectComposer>

            {/* <OrbitControls makeDefault /> */}
        </Suspense>
    );
};

// Bounds / zoom handled inside Iron.jsx now

export default GuiControls;