import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas camera={{ position: [0, 0, 2] }}>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color={0x00ff00} wireframe />
      </mesh>
    </Canvas>
  </React.StrictMode>,
)
