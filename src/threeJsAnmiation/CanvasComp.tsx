import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as three from 'three';
import { softShadows } from '@react-three/drei';
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

const Sphere = () => {
   const sphere = useRef<three.Mesh>(null);

   useFrame(() => {
      sphere.current!.rotation.x += 0.01;
      sphere.current!.rotation.y += 0.01;
   });

   return (
      <mesh ref={sphere} castShadow>
         <sphereBufferGeometry attach='geometry' args={[1.5, 30, 30]} />
         <meshStandardMaterial attach='material' color='rgba(98, 187, 193, 1)' />
      </mesh>
   );
};

// const ArcCercle = () => {
//    const arcCercle = useRef<three.Mesh>(null);

//    return (
//       <mesh ref={arcCercle}>
//          <sphereBufferGeometry attach='geometry' args={[1, 32, 30]} />
//          <meshStandardMaterial attach='material' color='rgba(98, 187, 193, 1)' />
//       </mesh>
//    );
// };

const Plane = () => {
   const plane = useRef<three.Mesh>(null);

   return (
      <mesh ref={plane} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
         <planeBufferGeometry attach='geometry' args={[100, 100]} />
         <shadowMaterial attach='material' color='white' opacity={0.2} />
      </mesh>
   );
};

const CanvasComp = () => {
   return (
      <Canvas shadows camera={{ position: [5, 1, 10], fov: 60 }}>
         <ambientLight intensity={0.8} />
         <directionalLight
            position={[5, 5, 4]}
            intensity={1}
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
            shadow-camera-far={50}
            shadow-camera-left={-10}
         />
         <pointLight position={[1, 1, 0]} />
         <Sphere />
         <Plane />
         <OrbitControls />
      </Canvas>
   );
};

export default CanvasComp;
