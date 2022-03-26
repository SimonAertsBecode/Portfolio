import React, { useState, useLayoutEffect } from 'react';
import Curriculum from '../pages/Curriculum';
import Overview from '../pages/Overview';
import Pagination from './Pagination';
import Projects from '../pages/Projects';

import { motion } from 'framer-motion';

// const stateForAnimation = (x: number, scale: number, zIndex: number) => {
//    return {
//       left: {
//          x: '-50vw',
//          scale: 0.8,
//          zIndex: 0,
//          transition: {
//             duration: 0.5,
//          },
//       },
//       main: {
//          x: '-0vw',
//          scale: 1,
//          zIndex: 2,
//          transition: {
//             duration: 0.5,
//          },
//       },
//       right: {
//          x: '50vw',
//          scale: 0.8,
//          zIndex: 0,
//          transition: {
//             duration: 0.5,
//          },
//       },
//    };
// };

const stateForAnimation = [
   {
      name: 'left',
      values: {
         x: '-50vw',
         scale: 0.8,
         zIndex: 0,
         transition: {
            duration: 0.5,
         },
      },
   },
   {
      name: 'main',
      values: {
         x: '0vw',
         scale: 1,
         zIndex: 2,
         transition: {
            duration: 0.5,
         },
      },
   },
   {
      name: 'right',
      values: {
         x: '50vw',
         scale: 0.8,
         zIndex: 0,
         transition: {
            duration: 0.5,
         },
      },
   },
];

interface itemAnimation {
   x: string;
   scale: number;
   zIndex: number;
   transition: {
      duration: number;
   };
}

const LandingPage = () => {
   const [actviveBtn, setActiveBtn] = useState(2);

   const jsxComponents = [<Curriculum />, <Overview />, <Projects />];

   const animationLogic = (values: itemAnimation, index: number) => {
      const isPositive = index < actviveBtn ? false : true;
      const diff = Math.abs(actviveBtn - index);

      let scaleValue = (0.8 * diff) % (diff - 1);

      console.log(scaleValue);

      // if (scaleValue == isNaN) {
      //    scaleValue = 0.8 * diff;
      // }

      values.x = !isPositive ? `-${diff * 50}vw` : `${diff * 50}vw`;
      values.scale = scaleValue;
      values.zIndex = diff;
   };

   return (
      <>
         <section className='container'>
            {stateForAnimation.map((item, index) => {
               const { values } = item;
               if (actviveBtn === index) {
                  values.x = '0vw';
                  values.scale = 1;
                  values.zIndex = 2;
               } else {
                  animationLogic(values, index);
               }
               return (
                  <motion.section key={item.name} animate={item.values} className={`${item.name}-page`}>
                     {jsxComponents[index]}
                  </motion.section>
               );
            })}
            <Pagination setActiveBtn={setActiveBtn} activeBtn={actviveBtn} />
         </section>
      </>
   );
};

export default LandingPage;
