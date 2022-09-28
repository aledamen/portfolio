import { Canvas, createPortal, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Text, Shadow, OrthographicCamera } from '@react-three/drei'
import React, { useRef, useMemo } from 'react'
import * as THREE from 'three'

function Sphere({ children }) {
    const cam = useRef()
    const [scene, target] = useMemo(() => {
        const scene = new THREE.Scene()
        const target = new THREE.WebGLRenderTarget(2048,2048)
        return [scene, target]
    }, [])

    useFrame(({ gl }) => {
        gl.setRenderTarget(target)
        gl.render(scene, cam.current)
        gl.setRenderTarget(null)
    })

    return (
        <>
            <OrthographicCamera ref={cam} makeDefault={false} position={[0, 0, 1]} zoom={4} />
            {createPortal(
                <Text
                    color="#00f8ae"
                    fontSize={10}
                    maxWidth={5}
                    maxHeight={7}
                    lineHeight={3}
                    letterSpacing={-0.02}
                    font='https://fonts.googleapis.com/css?family=Roboto+Mono&subset=greek'
                    text={children}
                >
                    {children}
                </Text>,
                scene
            )}
            <mesh>
                <sphereBufferGeometry attach="geometry" args={[0.8, 30, 20]} />
                <meshStandardMaterial attach="material" map={target.texture} />
            </mesh>
            <Shadow scale={[2, 2, 1]} opacity={0.2} position={[0, -2.1, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            <Shadow
                color="#1E90FF"
                scale={[4, 4, 1]}
                opacity={0.2}
                position={[0, -2, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </>
    )
}

export default function World() {
    return (
          <Canvas style={{width:'50%', position:'relative', zIndex:'1', right:'-50px', top:'-150px'}}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} />
              <pointLight position={[-10, -10, -5]} color="#1E90FF" intensity={20} />
              <pointLight position={[0, -10, 0]} intensity={1.5} />
              <Sphere>
              React.js Next.js Node.js
              </Sphere>
            <OrbitControls enableZoom={false}/>
        </Canvas>
      )
  }
// function Box(children) {
//     return (
//       <mesh>
//             <sphereGeometry attach="geometry"/>
//             <meshLambertMaterial attach='material' color="#00f8ae" />
//         </mesh>
//     )
// }
// export default function World() {
//   return (
//         <Canvas style={{width:'30%'}}>
//           <OrbitControls enableZoom={false} />
//       {/* <Stars /> */}
//       <ambientLight intensity={0.5} />
//       <spotLight
//         position={[10, 15, 10]}
//         angle={0.5}
//       />
//             <Box style={{width:'300px', height:'300px'}}></Box>
//         </Canvas>
//     )
// }