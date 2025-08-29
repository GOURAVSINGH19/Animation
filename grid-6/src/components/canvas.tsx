import * as THREE from 'three/webgpu';
import { Canvas, extend, type CanvasProps } from '@react-three/fiber';

extend(THREE as any);

export const WebGPUCanvas = (props: CanvasProps) => {
    return (
        <Canvas
            {...props}
            flat
            gl={async (props) => {
                const renderer = new THREE.WebGPURenderer(props as any);
                await renderer.init();
                return renderer;
            }}
            dpr={[1, 2]}
            className='canvas'
        >
            {props.children}
        </Canvas>
    );
};