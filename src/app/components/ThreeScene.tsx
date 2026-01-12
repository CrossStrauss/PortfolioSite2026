'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState, useEffect } from 'react'
import { Environment } from "@react-three/drei"
import * as THREE from 'three'
import { useAppContext } from '../context/portfolioContext'
import { viewModesType } from '../types/viewModes';

function Knot({ viewMode }: { viewMode: viewModesType }) {

    const meshRef = useRef<THREE.Mesh>(null!)

    console.log(viewMode);

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5
            meshRef.current.rotation.x += delta * 0.3
        }
    })

    const geometry = useMemo(
        () => new THREE.TorusKnotGeometry(10, 4.2, 154, 20),
        []
    )

    if (viewMode === viewModesType.darkMode) {
        return (
        <group ref={meshRef}>
                <mesh geometry={geometry}>
                    <meshStandardMaterial
                        color={"#212724"}
                        metalness={0.1}
                        roughness={0.5}
                        envMapIntensity={1.2}
                        flatShading={true} />
                </mesh>
                <mesh geometry={geometry} scale={1.001}>
                    <meshStandardMaterial
                        wireframe
                        color="white"
                        roughness={1}
                        envMapIntensity={1.2}
                    />
                </mesh>
            </group>
        )
    } else {
        return (
        <group ref={meshRef}>
                <mesh geometry={geometry}>
                    <meshStandardMaterial
                        color={"#486a7b"}
                        metalness={0.1}
                        roughness={0.5}
                        envMapIntensity={1.2}
                        flatShading={true} />
                </mesh>
                <mesh geometry={geometry} scale={1.001}>
                    <meshStandardMaterial
                        wireframe
                        color="white"
                        roughness={1}
                        envMapIntensity={1.2}
                    />
                </mesh>
            </group>
        )
    }

    
}

export default function ThreeScene() {

    const { viewMode } = useAppContext();
    const [viewModeClass, setViewModeClass] = useState('layout-background');
    const [hasChanged, setHasChanged] = useState(false);

    useEffect(() => {
        if (!hasChanged) return

        if (viewMode === viewModesType.darkMode) {
            setViewModeClass('layout-dark-shift');
        } else {
            setViewModeClass('layout-light-shift')
        }
    },[viewMode])

    useEffect(() => {
        if (!hasChanged) setHasChanged(true)
    }, [viewMode])

    return (
        <div className={`absolute w-full h-full top-0 left-0 z-1 ${viewModeClass}`}>
            <div className={"w-[100vw] h-[100vh]"}>
                <Canvas camera={{ position: [3, 20, 30] }}>
                    <Environment preset="studio" />
                    <ambientLight intensity={1} />
                    <directionalLight
                        position={[10, 20, 10]}
                        intensity={1.2}
                    />
                    <Knot viewMode={viewMode} />
                </Canvas>
            </div>
        </div>
    )
}