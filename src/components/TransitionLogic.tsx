import { useEffect, useState } from 'react';
import LandingPage from './LandingPage';

import { motion, AnimatePresence } from 'framer-motion';

const transitionVariant = {
   hidden: {
      scale: 1,
      opacity: 1,
      zIndex: 1000,
   },
   visible: {
      opacity: 1,
      zIndex: 1000,
   },
   exit: {
      opacity: 0,
      transition: { duration: 1 },
   },
};

const TransitionLogic = () => {
   const [transition, setTransition] = useState(false);
   const [AxisValue, setAxisValue] = useState(0);

   setTimeout(() => {
      setTransition(true);
   }, 2000);

   const handleScreenWidth = () => {
      const { innerWidth: width } = window;
      if (width <= 600) {
         setAxisValue(80);
      } else if (width <= 900) {
         setAxisValue(60);
      } else {
         setAxisValue(50);
      }
   };

   useEffect(() => {
      handleScreenWidth();
   }, []);

   window.addEventListener('resize', handleScreenWidth);

   return (
      <>
         <AnimatePresence>
            {!transition ? (
               <motion.section className='welcome-page' key='welcomePage' variants={transitionVariant} initial='hidden' animate='visible' exit='exit'>
                  <p>Welcome to my portfolio</p>
               </motion.section>
            ) : (
               <LandingPage responsiveValue={AxisValue} />
            )}
         </AnimatePresence>
      </>
   );
};

export default TransitionLogic;
