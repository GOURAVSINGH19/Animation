import { useEffect, useRef } from 'react'
import { PerspectiveCamera, useAnimations, useGLTF, useTexture } from '@react-three/drei'
import { useControls } from 'leva';
import { useThree } from '@react-three/fiber';
import * as THREE from "three"

export function Model({ animation = "walk", ...props }) {

    const ref = useRef();
    const { scene, materials, animations } = useGLTF('/untitled2.glb');
    const texture = useTexture("/textures/Monkey_02.png");
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        if (actions && animations.length > 0) {
            actions[animations[0].name]?.play()
        }
    }, [actions, animations]);

    useEffect(() => {
        if (materials['Outline.002']) {
            materials['Outline.002'].map = texture

            materials['Outline.002'].needsUpdate = true
        }
    }, [texture, materials]);


    const { x, y, z, fov } = useControls({
        x: { value: -1.03297, min: -10, max: 40 },
        y: { value: -.890, min: -10, max: 40 },
        z: { value: 1.749, min: 0, max: 20 },
        fov: { value: 50, min: 10, max: 120 },
    })

    const { rotationx, rotationy, rotationz } = useControls({
        x: { value: 76.81, min: -10, max: 40 },
        y: { value: .024, min: -10, max: 40 },
        z: { value: -8.066, min: 0, max: 20 }
    })
    const { modelScale } = useControls({
        modelScale: { value: 1, min: 0.1, max: 10, step: 0.1 },
    })

    const { camera } = useThree();
    useEffect(() => {
        // const face = scene.getObjectByName('Ch47_Face')
        // if (!face) {
        //     console.warn('Face or head not found')
        //     return;
        // }
        // const facePos = new THREE.Vector3()
        // face.getWorldPosition(facePos)

        // const offset = new THREE.Vector3(0, 0, 1) 
        // const cameraPos = facePos.clone().add(offset)

        // camera.position.copy(cameraPos)
        camera.lookAt([0,2, 2])
    }, [scene, camera])

    return (
        <group dispose={null} >
            {/* <PerspectiveCamera makeDefault fov={fov} position={[x, y, z]} rotation={[rotationx, rotationy, rotationz]} /> */}
            <primitive ref={ref} object={scene} {...props} scale={modelScale} />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshBasicMaterial color="white" />
            </mesh>
        </group>
    );
}

useGLTF.preload('/untitled2.glb');
