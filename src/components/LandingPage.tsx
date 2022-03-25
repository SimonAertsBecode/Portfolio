import React, { useCallback, useEffect, useState } from 'react';
import Curriculum from '../pages/Curriculum';
import Overview from '../pages/Overview';
import Pagination from './Pagination';
import Projects from '../pages/Projects';

import { motion } from 'framer-motion';

const LandingPage = () => {
   const [actviveBtn, setActiveBtn] = useState(2);
   const [stateForAnimation, setStateForAnimation] = useState({
      left: {
         x: '-50vw',
         scale: 0.8,
         zIndex: 0,
      },
      main: {
         x: '-0vw',
         scale: 1,
         zIndex: 2,
      },
      right: {
         x: '50vw',
         scale: 0.8,
         zIndex: 0,
      },
      transition: {
         delay: 0.5,
      },
   });

   const setAnimation = useCallback(
      (value: number) => {
         const { left, main, right } = stateForAnimation;
         if (value === 1) {
            setStateForAnimation((prevState) => ({
               ...prevState,
               [left.x]: '0vw',
               [left.scale]: 1,
               [left.zIndex]: 2,
               [main.x]: '50vw',
               [main.scale]: 0.8,
               [main.zIndex]: 1,
               [right.x]: '100vw',
               [right.scale]: 0.6,
               [right.zIndex]: 0,
            }));
         } else if (value === 2) {
            setStateForAnimation((prevState) => ({
               ...prevState,
               [left.x]: '-50vw',
               [left.scale]: 0.8,
               [left.zIndex]: 0,
               [main.x]: '0vw',
               [main.scale]: 1,
               [main.zIndex]: 2,
               [right.x]: '50vw',
               [right.scale]: 0.8,
               [right.zIndex]: 0,
            }));
         } else if (value === 3) {
            setStateForAnimation((prevState) => ({
               ...prevState,
               [left.x]: '-100vw',
               [left.scale]: 0.6,
               [left.zIndex]: 0,
               [main.x]: '-50vw',
               [main.scale]: 0.8,
               [main.zIndex]: 1,
               [right.x]: '0vw',
               [right.scale]: 1,
               [right.zIndex]: 2,
            }));
         }
      },
      [actviveBtn, stateForAnimation]
   );

   // useEffect(() => {
   //          const { left, main, right } = stateForAnimation;
   //          if (actviveBtn === 1) {
   //             setStateForAnimation((prevState) => ({
   //                ...prevState,
   //                [left.x]: '0vw',
   //                [left.scale]: 1,
   //                [left.zIndex]: 2,
   //                [main.x]: '50vw',
   //                [main.scale]: 0.8,
   //                [main.zIndex]: 1,
   //                [right.x]: '100vw',
   //                [right.scale]: 0.6,
   //                [right.zIndex]: 0,
   //             }));
   //          } else if (actviveBtn === 2) {
   //             setStateForAnimation((prevState) => ({
   //                ...prevState,
   //                [left.x]: '-50vw',
   //                [left.scale]: 0.8,
   //                [left.zIndex]: 0,
   //                [main.x]: '0vw',
   //                [main.scale]: 1,
   //                [main.zIndex]: 2,
   //                [right.x]: '50vw',
   //                [right.scale]: 0.8,
   //                [right.zIndex]: 0,
   //             }));
   //          } else if (actviveBtn === 3) {
   //             setStateForAnimation((prevState) => ({
   //                ...prevState,
   //                [left.x]: '-100vw',
   //                [left.scale]: 0.6,
   //                [left.zIndex]: 0,
   //                [main.x]: '-50vw',
   //                [main.scale]: 0.8,
   //                [main.zIndex]: 1,
   //                [right.x]: '0vw',
   //                [right.scale]: 1,
   //                [right.zIndex]: 2,
   //             }));
   //          }
   // }, [actviveBtn, stateForAnimation]);

   console.log(stateForAnimation);

   return (
      <>
         <section className='container'>
            <motion.section animate={stateForAnimation.left} className='left-page'>
               <Curriculum />
            </motion.section>
            <motion.section animate={stateForAnimation.main} className='main-page'>
               <Overview />
            </motion.section>
            <motion.section animate={stateForAnimation.right} className='right-page'>
               <Projects />
            </motion.section>
            <Pagination setActiveBtn={setActiveBtn} activeBtn={actviveBtn} />
         </section>
      </>
   );
};

export default LandingPage;
