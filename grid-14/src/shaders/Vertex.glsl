float PI = 3.141592653589793;

uniform vec2 uResolution; 
uniform float uTime;
uniform float uScrollVelocity;

out vec2 vUv; 
out vec2 vUvCover;

vec3 deformationCurve(vec3 position, vec2 uv) {
  position.y = position.y - (sin(uv.x * PI) * min(abs(uScrollVelocity), 5.0) * sign(uScrollVelocity) * -0.01);
  return position;
}

void main() {
  vUv = uv;
  vUvCover = getCoverUvVert(uv, uTextureSize, uQuadSize);
  vec3 deformedPosition = deformationCurve(position, vUvCover);
  float mask = roundedBox(vUv, uQuadSize, uBorderRadius);

  gl_Position = projectionMatrix * modelViewMatrix * viewPosition;
}
