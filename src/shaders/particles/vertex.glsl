varying vec2 vUv;

void main(){
    vec4 mdoelPosition = modelMatrix * vec4(position, 1.0);
    vec4 projectionPosition = projectionMatrix * viewMatrix * mdoelPosition;
    gl_Position = projectionPosition;

    gl_PointSize = 2.0;

    // Varyings
    vUv = uv;
}