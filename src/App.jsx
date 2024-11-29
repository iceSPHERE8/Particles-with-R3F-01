import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

import './App.css'

import Particles from './Particles.jsx'

function App() {
  return (
    <Canvas camera={ {position: [0, 0, 1000], far: 10000} }>
      <OrbitControls />
      <Perf position='top-left' />
  
      <Particles />
    </Canvas>
  )
}

export default App
