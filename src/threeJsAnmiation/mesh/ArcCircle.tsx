import { useRef } from 'react';
import * as three from 'three';

const ArcCercle = () => {
   const arcCercle = useRef<three.Mesh>(null);

   return (
      <mesh ref={arcCercle}>
         <sphereBufferGeometry attach='geometry' args={[1, 32, 30]} />
         <meshStandardMaterial attach='material' color='rgba(98, 187, 193, 1)' />
      </mesh>
   );
};

export default ArcCercle;
