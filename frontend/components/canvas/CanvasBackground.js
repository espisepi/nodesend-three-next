import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

const CanvasBackground = ({ style }) => {
    return (
        <Canvas style={{...style}} >
            <ambientLight />
            <Stars />
        </Canvas>
    )
}

export default CanvasBackground