import { useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function ScrollAnimation() {
    const scroll = useScroll()
    const { camera } = useThree()

    useFrame(() => {
        const scrollOffset = scroll.offset
        const zCurve = -Math.cos(scrollOffset * Math.PI) * 0.5 + 0.5;
        camera.position.z = 1 + zCurve * 5 + scrollOffset * 2;
        camera.position.x = Math.sin(scrollOffset * Math.PI * 2) * 1
        camera.position.y = 1.8
        camera.lookAt(0, 1.6, .1)
    })

    return null
}
