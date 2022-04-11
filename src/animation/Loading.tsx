import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
   return (
      <section className='loading'>
         <motion.div animate={{ y: -20, rotateZ: 0 }} className='bullet-first'></motion.div>
         <motion.div animate={{ y: -20, rotateZ: 60 }} className='bullet-second'></motion.div>
         <motion.div animate={{ y: -20, rotateZ: 80 }} className='bullet-third'></motion.div>
      </section>
   );
};

export default Loading;
