import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import Iron from './Iron'

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 1, 6], fov: 45 }} shadows>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Iron position={[0, -1, 0]} />
        <Environment preset="dawn" />
        <EffectComposer>
          <Bloom
            intensity={.5}
            luminanceThreshold={1}
            luminanceSmoothing={0.5}
          />
        </EffectComposer>
        <OrbitControls makeDefault />
      </Suspense>
    </Canvas>
  )
}

export default Scene