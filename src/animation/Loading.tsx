import React from 'react';
import { motion } from 'framer-motion';

const loadingContainer = {
   start: {
      transition: {
         staggerChildren: 0.1,
      },
   },
   end: {
      transition: {
         staggerChildren: 0.1,
      },
   },
};

const loadingCircle = {
   start: {
      y: '0%',
   },
   end: {
      y: '100%',
   },
};

const loadingCircleTransition = {
   duration: 0.4,
   yoyo: Infinity,
   ease: 'easeInOut',
};

const Loading = (/*{ text }: { text?: string }*/) => {

//     let content = null
//    if (text) {
//       const animateText = text.split('');
//       content = (
//          <motion.section className='loading' variants={loadingContainer} initial='start' animate='end'>
//             {animateText.map((item) => {
//                <motion.p variants={loadingCircle} transition={loadingCircleTransition} className={text}>
//                   {item}
//                </motion.p>;
//             })}
//          </motion.section>
//       );
//    }
   return (
      {true && <p>coucou</p>}
    //   <motion.section className='loading' variants={loadingContainer} initial='start' animate='end'>
    //      <motion.div variants={loadingCircle} transition={loadingCircleTransition} className='bullet-first'></motion.div>
    //      <motion.div variants={loadingCircle} transition={loadingCircleTransition} className='bullet-second'></motion.div>
    //      <motion.div variants={loadingCircle} transition={loadingCircleTransition} className='bullet-third'></motion.div>
    //   </motion.section>
   );
};

export default Loading;
