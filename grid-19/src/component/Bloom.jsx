// SelectiveBloom.jsx
import { useThree, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useEffect, useRef } from 'react'

const BLOOM_LAYER = 1

export function SelectiveBloom() {
    const { camera, gl, scene, size } = useThree()
    const bloomCamera = useRef()


    // Init bloom camera
    useEffect(() => {
        bloomCamera.current = camera.clone()
        bloomCamera.current.layers.set(BLOOM_LAYER)
    }, [camera])

    return (
        <EffectComposer
            gl={gl}
            size={size}
            autoClear={false}
        >
            <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={0.9}
                intensity={1.5}
            />
        </EffectComposer>
    )
}
