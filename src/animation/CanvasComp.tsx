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

//** React gltf created with vectary */
const ReactLogoGltf = () => {
   const gltf = useLoader(GLTFLoader, '/assets/gltf/portfolio.glb');
   return (
      <Suspense fallback={null}>
         <primitive object={gltf.scene} />
      </Suspense>
   );
};

const ReactLogo = () => {
   const reactGltf = useRef<three.Mesh>();

   useFrame(() => {
      reactGltf.current!.rotation.x += 0.003;
      reactGltf.current!.rotation.y += 0.003;
   });

   return (
      <mesh ref={reactGltf} position={[0, 0, 0]} castShadow>
         <ReactLogoGltf />
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
   //* property scroll to false, so size won't change when scrolling on different section 'Resume' and 'Projects'
   return (
      <Canvas shadows={true} resize={{ scroll: false }} camera={{ position: [5, 0, 5], fov: 3 }}>
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
         <group>
            <ReactLogo />
            <Plane />
         </group>
         <OrbitControls />
      </Canvas>
   );
};

export default CanvasComp;
