import { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import * as THREE from "three"
import GuiControls from './Experience';
import { AnimatedCamera } from './Cameracontrol';
const Scene = () => {

  return (
    <>
      <Canvas
        dpr={[1, 2]}
        gl={{ alpha: true }}
        camera={{ position: [0, 1.5, 10], fov: 45 }}
        resize={false}
      >
        <GuiControls />
        <Fog />
        <AnimatedCamera />
      </Canvas>
    </>
  );
};



const Fog = () => {
  const { scene } = useThree()

  useEffect(() => {
    scene.fog = new THREE.Fog('#111', 10, 30)
  }, [scene])

  return null
}

export default Scene;
