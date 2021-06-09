import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls, useGLTF, useFBX } from '@react-three/drei'

const CanvasThree = ({ url, style }) => {

    // url contain model resource -> http://localhost:4000/api/archivos/sSaLhwHkn
    // url NOT contain model resource -> http://localhost:4000/api/archivos/
    const array = url.split('/')
    const referenceWord = array[ array.length - 1 ].trim()
    console.log(url)
    const containResource = referenceWord != '' ? true : false
    console.log(containResource)
    return (
        <Canvas style={{...style}} >
            <Suspense fallback={null}>
                <ambientLight intensity={0.2} />
                <pointLight position={[0,2,2]} />
                { containResource 
                    ? ( <Model url={url} /> )
                    : ( <Box material-color='red' /> ) 
                }
            </Suspense>
            <OrbitControls autoRotate={true} />
        </Canvas>
    )
}

const Model = ({ url }) => {
    console.log(url)

    const extension = 'glb'

    return (
        <>
        {
            extension === 'fbx'
            ? ( <ModelFBX url={url} />)
            : ( <ModelGLTF url={url} /> ) 
        }
    </>
    )
}

const ModelFBX = ({ url }) => {
    const fbx = useFBX(url)
    return ( <primitive object={fbx} /> )
}

const ModelGLTF = ({ url }) => {
    const gltf = useGLTF(url)
    return ( <primitive object={gltf.scene} /> )
}

export default CanvasThree
