const fragmentShader = `
precision mediump float; // Soluciona error con Raw Shader Material

varying vec3 vPosition;

varying vec3 vNormal;

varying vec2 vUv;

uniform float uTime;

uniform vec2 uResolution;

void main() {

    vec3 rColor = vec3(0.9, 0.0, 0.3);
    vec3 gColor = vec3(0.0, 0.9, 0.3);
    vec3 bColor = vec3(0.0, 0.3, 0.9);
    vec3 yColor = vec3(0.9, 0.9, 0.3);

    vec2 position = (gl_FragCoord.xy * 2.0 - uResolution); // vUv es equivalente a gl_FragCoord.xy
    position /= min(uResolution.x, uResolution.y); // La position divida la resolución mínima

    float a = sin(position.y * 5.0 - uTime * 0.2) / 2.0;
    float b = cos(position.y * 5.0 - uTime * 0.2) / 2.0;
    float c = sin(position.y * 5.0 - uTime * 0.2 + 3.14) / 2.0;
    float d = cos(position.y * 5.0 - uTime * 0.2 + 3.14) / 2.0;

    float e = 0.01 / abs(position.x + a);
    float f = 0.01 / abs(position.x + b);
    float g = 0.01 / abs(position.x + c);
    float h = 0.01 / abs(position.x + d);

    vec3 destColor = rColor * e + gColor * f + bColor * g + yColor * h;

    gl_FragColor = vec4(destColor, 1.0);

}
`

export default fragmentShader