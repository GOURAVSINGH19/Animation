import React, { useMemo, useEffect, useRef } from 'react'
import { Bounds, MeshReflectorMaterial, useBounds, useGLTF } from '@react-three/drei'
import { DoubleSide } from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

useGLTF.preload('/Iron/scene.gltf')


export default function Iron(props) {
	const { scene } = useGLTF('model.glb')
	const cloned = useMemo(() => scene.clone(true), [scene])

	return (
		<group>
			<Bounds fit clip observe margin={1.2}>
				<SelectToZoom>
					<group position={[0, 2, 0]} castShadow>
						<primitive object={cloned} {...props} />
					</group>
				</SelectToZoom>
			</Bounds>
			<mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
				<planeGeometry args={[100, 100]} />
				<MeshReflectorMaterial
					side={DoubleSide}
					mixStrength={.15}
					mixContrast={.3}
					resolution={2048}
					mirror={1}
					depthScale={1}
					minDepthThreshold={.01}
					maxDepthThreshold={1}
					depthToBlurRatioBias={0.03}
					reflectorOffset={0.3}
				// color={"#111"}
				/>
			</mesh>
			<Upperplanemesh />
		</group>
	)
}
const Upperplanemesh = () => {
	const ref = useRef();
	return (
		<group>
			<mesh
				ref={ref}
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, 2.4, 0]}
			>
				<planeGeometry args={[4, 4]} />
				<meshStandardMaterial
					side={DoubleSide}
					emissive={'#fff'}
					emissiveIntensity={1}
				/>
			</mesh>
		</group>
	)
}

function SelectToZoom({ children }) {
	const api = useBounds()
	return (
		<group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
			{children}
		</group>
	)
}
