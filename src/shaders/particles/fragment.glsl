uniform sampler2D uTexture;

varying vec2 vUv;
varying vec3 vColor;

void main(){
    vec2 pointUv = gl_PointCoord;

    vec4 color = texture2D(uTexture, vUv);

    float dist = distance(pointUv, vec2(0.5));

    if(dist > 0.5){
        discard;
    }

    gl_FragColor = vec4(vColor, 1.0);
    // gl_FragColor = color;
}