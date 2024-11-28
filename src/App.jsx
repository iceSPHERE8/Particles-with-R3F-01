import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import './App.css'

import Particles from './Particles.jsx'

function App() {
  return (
    <Canvas id='canvas-01' camera={ {position: [0, 0, 1000], far: 10000} }>
      <OrbitControls />
      
      <Particles />
    </Canvas>
  )
}

export default App
