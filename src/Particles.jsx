import { shaderMaterial, useTexture } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { extend } from "@react-three/fiber"

import particleVertexShader from './shaders/particles/vertex.glsl'
import particleFragmentShader from './shaders/particles/fragment.glsl'

const ParticleShaderMaterial = shaderMaterial(
    {
        uTexture: null,
        uResolutionY: window.innerHeight
    },
    particleVertexShader,
    particleFragmentShader
)

extend({ ParticleShaderMaterial })

export default function Particles(props){
    const backTexture = useTexture('./pexels-marianamontrazi-6757343.jpg')
    const particleShaderMaterial = useRef()

    useEffect(() => {
        particleShaderMaterial.current.uniforms.uTexture.value = backTexture
    }, [])

    addEventListener('resize', () => {
        particleShaderMaterial.current.uniforms.uResolutionY.value = window.innerHeight
    })
    
    return<>
        <points>
            <planeGeometry args={ [640, 972, 160, 243] } />
            <particleShaderMaterial ref={ particleShaderMaterial }  />
        </points>
    </> 
}