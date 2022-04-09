import React from 'react';
import { motion } from 'framer-motion';

type variantsInterface = {
   visible: {
      x: string;
      scale: number;
      zIndex: number;
      transition: {
         duration: number;
         delay: number;
      };
   };
   hidden: {
      opacity: number;
      x: number;
   };
};

interface props {
   variants: variantsInterface;
   key: string;
   className: string;
   children: JSX.Element;
}

const Content: React.FC<props> = ({ className, variants, children }) => {
   return (
      <motion.section initial='hidden' animate='visible' variants={variants} className={className}>
         {children}
      </motion.section>
   );
};

export default Content;
