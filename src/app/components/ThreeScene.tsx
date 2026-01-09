'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Edges } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'


function Knot(){

    const meshRef = useRef<THREE.Mesh>(null!)

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5
        }
    })

    return (
        <mesh ref={meshRef} rotation={[0, 0, 0]}>
            <torusKnotGeometry args={[1, 0.3, 59, 6]} />
            <meshStandardMaterial color="gray" wireframe />
        </mesh>
    )
}

function Box() {
    return (
        <mesh rotation={[0.4, 0.2, 0]}>
            <boxGeometry args={[5, 5, 5]} />
            <meshStandardMaterial color="hotpink" wireframe />
        </mesh>
    )
}

function Sphere() {
    const meshRef = useRef<THREE.Mesh>(null!)

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <sphereGeometry args={[2, 9, 9]} />
            <meshStandardMaterial color="grey" />
            <Edges color="white" />
        </mesh>
    )
}

export default function ThreeScene() {
  return (
    <div className={"aspect-square"}>
        <Canvas camera={{ position: [3, 3, 3] }}>
            <ambientLight intensity={1} />
            <Sphere />
        </Canvas>
    </div>
  )
}