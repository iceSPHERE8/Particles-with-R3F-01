uniform sampler2D uTexture;
uniform float uResolutionY;
uniform float uTime;
uniform float uSpeed;
uniform float uScale;
uniform float uStrength;

varying vec2 vUv;
varying vec3 vColor;

#include "../curlNoise.glsl"

void main(){
    vec4 mvPosition = viewMatrix * modelMatrix * vec4(position, 1.0);

    vec3 distortion = curlNoise(position.xyz * uScale * 0.1 + uTime * uSpeed);
    mvPosition.xyz += distortion * uStrength;

    vec4 projectionPosition = projectionMatrix * mvPosition;

    float texIntensity = texture2D(uTexture, uv).r * 1.0;
    texIntensity = clamp(texIntensity, 0.0, 1.0);
    texIntensity = smoothstep(0.0, 2.0, texIntensity);
    
    gl_PointSize = (1.0 / (- mvPosition.z)) * uResolutionY * 1.5;
    gl_PointSize *= texIntensity;

    gl_Position = projectionPosition;

    // Varyings
    vUv = uv;
    vColor = vec3(texIntensity);
}