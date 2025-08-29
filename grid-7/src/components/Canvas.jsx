import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import { ScrollControls } from "@react-three/drei"
import { Suspense } from "react"
import { CameraFrustumHelper } from "./cameraDebug"
// import studio from "@theatre/studio"
// import { getProject } from "@theatre/core"
// import { SheetProvider } from "@theatre/r3f"
// studio.initialize();
// const project = getProject("animate")
// const sheet = project.sheet('Animated scene')
const Scene = () => {
    return (
        <Canvas camera={{ fov: 45, position: [0, 1.5, 1] }}>
            <ambientLight intensity={1} />
            <directionalLight />
            <Suspense fallback="wait">
                <ScrollControls pages={4}>
                    <Experience />
                </ScrollControls>
            </Suspense>
            <CameraFrustumHelper />
        </Canvas>
    )
}

export default Scene
