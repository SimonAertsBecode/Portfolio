import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as three from 'three';
import { softShadows } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

/*
geometry <boxBufferGeometry> === type of geometries 'https://threejs.org/docs/#api/en/geometries'
material <MeshWobbleMaterial> === type of material 'https://threejs.org/docs/#api/en/materials/Material'
mesh = geometry + material

CANVAS (takes only three.js elements)
    - Light sources (Ambiant light (apply colors of material), Directional Light (impacts floor shadow), Point light)
    - Group
        - Implement all 'Mesh' we have created
    - Group
    - OrbitControls (allows to move around items)
CANVAS


SETPS:
Mesh
    - geometry , props attach = what it represents, args = size of it [x, y, z]
Mesh

*/

softShadows();

const ArcCircleGltf = () => {
   const gltf = useLoader(GLTFLoader, '/assets/gltf/portfolio.gltf');
   return (
      <Suspense fallback={null}>
         <primitive object={gltf.scene} />
      </Suspense>
   );
};

const ArcCircle = () => {
   const reactgltf = useRef<three.Mesh>();

   useFrame(() => {
      reactgltf.current!.rotation.x += 0.003;
      reactgltf.current!.rotation.y += 0.003;
   });

   return (
      <mesh ref={reactgltf} position={[0, 0, 0]} castShadow>
         <ArcCircleGltf />
      </mesh>
   );
};

const Plane = () => {
   const plane = useRef<three.Mesh>(null);

   return (
      <mesh ref={plane} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
         <planeBufferGeometry attach='geometry' args={[100, 100]} />
         <shadowMaterial attach='material' color='red' opacity={0.2} />
      </mesh>
   );
};

const CanvasComp = () => {
   return (
      <Canvas shadows camera={{ position: [5, 0, 5], fov: 5 }}>
         <ambientLight intensity={0.1} />
         <directionalLight
            position={[5, 5, 4]}
            intensity={1}
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
            shadow-camera-far={50}
            shadow-camera-left={-10}
         />
         <pointLight position={[1, 1, 0]} intensity={1} />
         <ArcCircle />
         <Plane />
         <OrbitControls />
      </Canvas>
   );
};

export default CanvasComp;
