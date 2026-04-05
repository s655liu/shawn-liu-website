import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Sphere, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function Blob() {
  const mesh = useRef()
  
  useFrame((state) => {
    const { clock, mouse } = state
    if (mesh.current) {
        mesh.current.distort = THREE.MathUtils.lerp(mesh.current.distort, 0.4 + mouse.x * 0.2, 0.1)
        mesh.current.speed = THREE.MathUtils.lerp(mesh.current.speed, 2 + mouse.y * 2, 0.1)
    }
  })

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 128, 128]} scale={1.5}>
        <MeshDistortMaterial
          ref={mesh}
          color="#64ffda"
          roughness={0.05}
          metalness={0.9} // Slight reduction for better visibility
          distort={0.4}
          speed={2}
          emissive="#64ffda"
          emissiveIntensity={0.2} // Self-illumination
        />
      </Sphere>
    </Float>
  )
}

export default function AbstractBlob() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        {/* Environment adds reflections crucial for metalness materials */}
        <Environment preset="city" /> 
        
        <Blob />
        
        {/* Ground shadow for depth */}
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
      </Canvas>
    </div>
  )
}
