import { useThree, useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export function CameraFrustumHelper() {
  const { scene, camera } = useThree()
  const helperRef = useRef()

  useEffect(() => {
    const helper = new THREE.CameraHelper(camera)
    scene.add(helper)
    helperRef.current = helper

    return () => {
      scene.remove(helper)
    }
  }, [camera, scene])

  useFrame(() => {
    helperRef.current?.update()
  })

  return null
}
