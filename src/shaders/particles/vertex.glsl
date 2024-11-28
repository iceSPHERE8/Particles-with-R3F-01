uniform sampler2D uTexture;
uniform float uResolutionY;

varying vec2 vUv;
varying vec3 vColor;

void main(){
    vec4 mvPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
    vec4 projectionPosition = projectionMatrix * mvPosition;

    float texIntensity = texture2D(uTexture, uv).r * 1.0;
    texIntensity = clamp(texIntensity, 0.0, 1.0);
    texIntensity = smoothstep(0.0, 1.5, texIntensity);
    
    gl_PointSize = (1.0 / (- mvPosition.z)) * uResolutionY * 2.0;
    gl_PointSize *= texIntensity;

    gl_Position = projectionPosition;

    // Varyings
    vUv = uv;
    vColor = vec3(texIntensity);
}