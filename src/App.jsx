import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Autofocus, Noise, DepthOfField, Bloom, EffectComposer } from "@react-three/postprocessing"
import { BlendFunction } from 'postprocessing'
import { useControls } from "leva"

import './App.css'

import Particles from './Particles.jsx'

function App() {
  const { focusDistance, focalLength, bokehScale } = useControls('DOF Paras', {
    focusDistance:{
      name: 'Focus Distance',
      value: 0,
      min: 0,
      max: 1,
      step: 0.001
    },  
    focalLength:{
      name: 'Focal Length',
      value: 0.01,
      min: 0,
      max: 1,
      step: 0.001
    }, 
    bokehScale:{
      name: 'Bokeh Scale',
      value: 2,
      min: 0,
      max: 10,
      step: 0.001
    }, 
  })

  const { bloomThrehold, bloomSmooth } = useControls('Bloom Paras', {
    bloomThrehold:{
      name: 'Bloom Threhold',
      value: 0.8,
      min: 0,
      max: 1,
      step: 0.001
    },  
    bloomSmooth:{
      name: 'Bloom Smooth',
      value: 0.1,
      min: 0,
      max: 1,
      step: 0.001
    }
  })

  return (
    <Canvas camera={ {position: [0, 0, 500], far: 1000} }>
      <EffectComposer>
        <Noise premultiply blendFunction={ BlendFunction.ADD } />
        {/* <DepthOfField focusDistance={ focusDistance } focalLength={ focalLength } bokehScale={ bokehScale } height={480} /> */}
        <Autofocus bokehScale={ 5 } target={ [0, 0, 0] } />
        <Bloom mipmapBlur luminanceThreshold={ bloomThrehold } luminanceSmoothing={ bloomSmooth } height={300} />
        
        
      </EffectComposer>
      <OrbitControls />
      <Perf position='top-left' />

      <Particles />
    </Canvas>
  )
}

export default App
