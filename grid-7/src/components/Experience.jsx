import { Suspense } from "react"
import { Model } from "./Monkey";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Perf } from "r3f-perf";
const Experience = () => {
    return (
        <>
            <Perf position="top-left" />
            <OrbitControls />
            <Environment preset="sunset" />
            <Suspense>
                <Model />
            </Suspense>
        </>
    )
}

export default Experience;