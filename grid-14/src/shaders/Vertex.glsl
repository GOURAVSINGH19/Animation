uniform float scrollProgress; 
varying vec2 vUv;

void main() {
    vUv = uv;

    vec3 newPosition = position;
    float bendStrength = 0.01;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
