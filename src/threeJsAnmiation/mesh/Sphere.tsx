import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as three from 'three';

const Sphere = () => {
   const sphere = useRef<three.Mesh>(null);

   useFrame(() => {
      sphere.current!.rotation.x += 0.01;
      sphere.current!.rotation.y += 0.01;
   });

   return (
      <mesh ref={sphere} castShadow>
         <boxBufferGeometry attach='geometry' args={[2, 2, 2]} />
         <meshStandardMaterial attach='material' color='rgba(98, 187, 193, 1)' />
      </mesh>
   );
};

export default Sphere;
