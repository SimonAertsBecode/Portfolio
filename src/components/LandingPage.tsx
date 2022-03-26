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

const LandingPage = () => {
   const [actviveBtn, setActiveBtn] = useState(2);

   const setStateForAnimation = () => {
      stateForAnimation.map((item, index) => {});
   };

   useLayoutEffect(() => {
      const { left, main, right } = stateForAnimation;
      if (actviveBtn === 1) {
         left.x = '0vw';
         left.scale = 1;
         left.zIndex = 2;
         main.x = '50vw';
         main.scale = 0.8;
         main.zIndex = 1;
         right.x = '100vw';
         right.scale = 0.6;
         right.zIndex = 0;
      } else if (actviveBtn === 2) {
         left.x = '-50vw';
         left.scale = 0.8;
         left.zIndex = 0;
         main.x = '0vw';
         main.scale = 1;
         main.zIndex = 2;
         right.x = '50vw';
         right.scale = 0.8;
         right.zIndex = 0;
      } else if (actviveBtn === 3) {
         left.x = '-100vw';
         left.scale = 0.6;
         left.zIndex = 0;
         main.x = '-50vw';
         main.scale = 0.8;
         main.zIndex = 1;
         right.x = '0vw';
         right.scale = 1;
         right.zIndex = 2;
      }
   }, [actviveBtn]);

   return (
      <>
         <section className='container'>
            {/* <motion.section animate={stateForAnimation[0].left} className='left-page'>
               <Curriculum />
            </motion.section>
            <motion.section animate={stateForAnimation.main} className='main-page'>
               <Overview />
            </motion.section>
            <motion.section animate={stateForAnimation.right} className='right-page'>
               <Projects />
            </motion.section> */}

            {stateForAnimation.map((item, index) => {
               const { values } = item;
               if (actviveBtn === index) {
                  values.x = '0vw';
                  values.scale = 1;
                  values.zIndex = 2;
               }
               return <motion.section animate={item.values} className={`${item.name}-page`}></motion.section>;
            })}
            <Pagination setActiveBtn={setActiveBtn} activeBtn={actviveBtn} />
         </section>
      </>
   );
};

export default LandingPage;
