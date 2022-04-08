import React, { useState } from 'react';
import LandingPage from './LandingPage';

import { motion, AnimatePresence } from 'framer-motion';

const transitionVariant = {
   hidden: {
      scale: 1,
      opacity: 1,
      zIndex: 1000,
   },
   visible: {
      scale: 1,
      opacity: 1,
      zIndex: 1000,
   },
   exit: {
      scale: 0,
      y: '-100vh',
      opacity: 0.3,
      transition: { duration: 2.5 },
   },
};

const TransitionLogic = () => {
   const [transition, setTransition] = useState(false);

   setTimeout(() => {
      setTransition(true);
   }, 3000);

   return (
      <>
         <AnimatePresence>
            {!transition ? (
               <motion.section
                  className='welcome-page'
                  key='welcomePage'
                  variants={transitionVariant}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
               >
                  <p>Welcome on my portfolio</p>
               </motion.section>
            ) : (
               <LandingPage />
            )}
         </AnimatePresence>
      </>
   );
};

export default TransitionLogic;
