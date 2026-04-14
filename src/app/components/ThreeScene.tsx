'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense, useMemo } from 'react'
import { useAppContext } from '../context/portfolioContext'
import { viewModesType } from '../types/viewModes'

function GLBModel() {
  const { scene } = useGLTF('/TestSceneNew.glb')
  const model = useMemo(() => scene.clone(true), [scene])

  return (
      <primitive
        object={model}
        position={[0, -2, 0]}
        rotation={[0.01, 0.45, -0.0]}
        scale={1.5}
        />
    )
}

export default function ThreeScene() {
  const { viewMode } = useAppContext()
  const viewModeClass =
    viewMode === viewModesType.darkMode ? 'layout-dark-shift' : 'layout-light-shift'

  return (
    <div className={`w-full h-full top-0 left-0 absolute ${viewModeClass}`}>
      <Canvas camera={{ position: [5, 5, 10], fov: 45 }} className="h-full">
        <Suspense fallback={null}>
          <Environment preset="warehouse" />
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 20, 10]} intensity={1.1} />
          <GLBModel />
          <OrbitControls makeDefault enableDamping />
        </Suspense>
      </Canvas>
    </div>
  )
}

useGLTF.preload('/TestSceneNew.glb')
