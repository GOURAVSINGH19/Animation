import React, { useMemo, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { DoubleSide, Color } from 'three'

useGLTF.preload('/Iron/scene.gltf')


export default function Iron(props) {
	const { scene } = useGLTF('/Iron/scene.gltf')
	const cloned = useMemo(() => scene.clone(true), [scene])

	return (
		<group>
			<group position={[0, 2, 0]}>
				<primitive object={cloned} {...props} />
			</group>
			{/* <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow>
				<planeGeometry args={[100, 100]} />
				<meshStandardMaterial side={DoubleSide} color="#121212" />
			</mesh> */}
			<Upperplanemesh />
		</group>
	)
}

const Upperplanemesh = () => {
	const ref = useRef()
	return (
		<group>
			<mesh
				ref={ref}
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0,3, 0]}
				castShadow
				receiveShadow
			>
				<planeGeometry args={[10, 10]} />
				<meshStandardMaterial
					side={DoubleSide}
					emissive={'#fff'}
					emissiveIntensity={10}
					color="black"
				/>
			</mesh>
			{/* <mesh
				ref={ref}
				rotation={[0,-Math.PI / 2, 0]}
				position={[-4, 1.3, 0]}
				castShadow
				receiveShadow
			>
				<planeGeometry args={[2, 2]} />
				<meshStandardMaterial
					side={DoubleSide}
					emissive={'#fff'}
					emissiveIntensity={10}
					color="black"
				/>
			</mesh>
			<mesh
				ref={ref}
				rotation={[0,-Math.PI / 2, 0]}
				position={[4, 1.3, 0]}
				castShadow
				receiveShadow
			>
				<planeGeometry args={[2, 2]} />
				<meshStandardMaterial
					side={DoubleSide}
					emissive={'#fff'}
					emissiveIntensity={10}
					color="black"
				/>
			</mesh> */}
		</group>
	)
}
