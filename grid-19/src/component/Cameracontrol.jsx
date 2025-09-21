import { useSpring } from '@react-spring/three'
import { useThree } from '@react-three/fiber'

export function AnimatedCamera() {
    const { camera } = useThree()
    useSpring(() => ({
        z: 10,
        config: { mass: 1, tension: 150, friction: 100 },
        onChange: ({ value }) => {
            camera.position.z = value.z
        }
    }))
    return null
}
