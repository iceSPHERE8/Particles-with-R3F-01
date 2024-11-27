import { shaderMaterial, useTexture } from "@react-three/drei"
import { useRef } from "react"
import { extend } from "@react-three/fiber"

import particleVertexShader from './shaders/particles/vertex.glsl'
import particleFragmentShader from './shaders/particles/fragment.glsl'

const ParticleShaderMaterial = shaderMaterial(
    {},
    particleVertexShader,
    particleFragmentShader
)

extend({ ParticleShaderMaterial })

export default function Particles(props){
    const backTexture = useTexture('./pexels-marianamontrazi-6757343.jpg')

    return<>
        <points>
            <planeGeometry args={ [2, 2, 100, 100] } />
            <particleShaderMaterial />
        </points>
    </> 
}