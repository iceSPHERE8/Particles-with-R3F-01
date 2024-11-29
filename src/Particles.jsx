import { shaderMaterial, useTexture } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { useFrame, extend } from "@react-three/fiber"
import * as THREE from 'three'
import { useControls } from "leva"

import particleVertexShader from './shaders/particles/vertex.glsl'
import particleFragmentShader from './shaders/particles/fragment.glsl'

const ParticleShaderMaterial = shaderMaterial(
    {
        uTime: null,
        uTexture: null,
        uSpeed: 0,
        uScale: 0,
        uStrength: 0,
        uResolutionY: window.innerHeight
    },
    particleVertexShader,
    particleFragmentShader
)

extend({ ParticleShaderMaterial })

export default function Particles(props){
    const backTexture = useTexture('./pexels-marianamontrazi-6757343.jpg')
    const particleShaderMaterial = useRef()

    const { curlSpeed, curlScale, curlStrength } = useControls({
        curlSpeed: {
            name: 'Curl Speed',
            value: 1,
            min: 0,
            max: 2,
            step: 0.001
        },
        curlScale: {
            name: 'Curl Scale',
            value: 0.5,
            min: 0,
            max: 1,
            step: 0.001
        },
        curlStrength: {
            name: 'Curl Stength',
            value: 10,
            min: 0,
            max: 100,
            step: 0.01
        }
    })

    useFrame((state, delta) => {
        particleShaderMaterial.current.uniforms.uTime.value = state.clock.elapsedTime
        particleShaderMaterial.current.uniforms.uSpeed.value = curlSpeed
        particleShaderMaterial.current.uniforms.uScale.value = curlScale
        particleShaderMaterial.current.uniforms.uStrength.value = curlStrength
    })

    useEffect(() => {
        particleShaderMaterial.current.uniforms.uTexture.value = backTexture
        particleShaderMaterial.current.transparent = true
        particleShaderMaterial.current.depthWrite = false
        particleShaderMaterial.current.blending = THREE.AdditiveBlending
    }, [])

    addEventListener('resize', () => {
        particleShaderMaterial.current.uniforms.uResolutionY.value = window.innerHeight
    })
    
    return<>
        <points>
            <planeGeometry args={ [640, 972, 640, 972] } />
            <particleShaderMaterial ref={ particleShaderMaterial }  />
        </points>
    </> 
}