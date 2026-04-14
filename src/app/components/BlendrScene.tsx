'use client'
import { Bounds, Environment } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import * as THREE from 'three'

function TestScene() {
  const [sceneObject, setSceneObject] = useState<THREE.Scene | null>(null)
  const { set } = useThree()

  useEffect(() => {
    // Fetch the JSON manually
    fetch('/project.json')
      .then(res => res.json())
      .then(data => {
        const loader = new THREE.ObjectLoader()
        // Three.js editor exports keep the serializable scene under `scene`.
        const source = (data?.scene ?? data) as { object?: unknown } | undefined
        if (!source || typeof source !== 'object' || !('object' in source)) {
          console.error('project.json is missing a valid Three.js object payload')
          return
        }

        const parsed = loader.parse(source)
        if (!(parsed instanceof THREE.Scene)) {
          console.error('project.json did not parse into a THREE.Scene')
          return
        }
        setSceneObject(parsed)

        // Use camera from JSON if available
        const camera = parsed.getObjectByProperty('type', 'PerspectiveCamera')
        if (camera instanceof THREE.PerspectiveCamera) {
          set({ camera })
        }
      })
      .catch(err => console.error('Failed to load project.json', err))
  }, [set])

  if (!sceneObject) return null

  return <primitive object={sceneObject} />
}

export default function SceneWrapper() {
  return (
    <div className="w-full h-full top-0 left-0 absolute">
      <Canvas>
        <Suspense fallback={null}>
          <TestScene />
          <Environment preset="studio" />
          <ambientLight intensity={0.1} />
          <directionalLight position={[10, 20, 10]} intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
