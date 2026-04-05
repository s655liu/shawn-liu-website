import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function SimplexWaves() {
  const mesh = useRef()
  const scrollRef = useRef(0)
  
  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current += 0.05
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shaderArgs = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uScrollSpeed: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColor1: { value: new THREE.Color('#0a0a0c') },
      uColor2: { value: new THREE.Color('#16213e') },
      uAccent: { value: new THREE.Color('#64ffda') },
    },
    vertexShader: `
      varying vec2 vUv;
      varying float vElevation;
      uniform float uTime;
      uniform float uScrollSpeed;
      uniform vec2 uMouse;

      // Simple 2D Noise
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
          dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vUv = uv;
        vec3 pos = position;
        
        float noise = snoise(vec2(pos.x * 0.5, pos.y * 0.5 + uTime * 0.2));
        float mouseDist = distance(uv, uMouse);
        float interaction = (1.0 - smoothstep(0.0, 0.8, mouseDist)) * 0.5;
        
        float elevation = noise * (0.3 + uScrollSpeed * 0.5 + interaction);
        pos.z += elevation;
        vElevation = elevation;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      varying float vElevation;
      uniform float uTime;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uAccent;

      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      void main() {
        vec3 color = mix(uColor1, uColor2, vUv.y + vElevation);
        
        // Add accent highlights based on elevation
        color = mix(color, uAccent, smoothstep(0.2, 0.5, vElevation) * 0.3);
        
        // Add Cinematic Grain
        float grain = random(vUv + uTime * 0.05) * 0.07;
        
        // Vignette effect
        float vignette = 1.0 - distance(vUv, vec2(0.5)) * 1.5;
        
        gl_FragColor = vec4((color + grain) * vignette, 0.8);
      }
    `
  }), [])

  useFrame((state) => {
    const { clock, mouse } = state
    shaderArgs.uniforms.uTime.value = clock.getElapsedTime()
    shaderArgs.uniforms.uMouse.value.lerp(new THREE.Vector2((mouse.x + 1)/2, (mouse.y + 1)/2), 0.1)
    
    // Smoothly decay scroll speed
    scrollRef.current *= 0.95
    shaderArgs.uniforms.uScrollSpeed.value = scrollRef.current
  })

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 4, 0, 0]} position={[0, 0, -2]}>
      <planeGeometry args={[20, 20, 128, 128]} />
      <shaderMaterial args={[shaderArgs]} transparent={true} depthWrite={false} />
    </mesh>
  )
}

export default function BackgroundCanvas() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none bg-[#0a0a0c]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
        <SimplexWaves />
      </Canvas>
    </div>
  )
}
