import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import './App.css'

import Particles from './Particles.jsx'

function App() {
  return (
    <Canvas id='canvas-01'>
      <OrbitControls />
      
      <Particles />
    </Canvas>
  )
}

export default App
