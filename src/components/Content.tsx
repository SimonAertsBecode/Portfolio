import React, { Dispatch, SetStateAction, useContext } from 'react';
import { motion } from 'framer-motion';
import { UseStateContext } from '../context/UseStateContext';

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
   title?: string;
   className: string;
   children: JSX.Element;
   setActiveBtn?: Dispatch<SetStateAction<number>>;
   index?: number;
}

const Content: React.FC<props> = ({ title, className, variants, children, setActiveBtn, index }) => {
   const skillsContext = useContext(UseStateContext);

   const handleClick = () => {
      title === 'Resume' && skillsContext?.setShowSkills(true);
      //needed to set index !== undefined otherwise the index value of 0 is considered as false
      if (setActiveBtn && index !== undefined) setActiveBtn(index);
   };

   return (
      <motion.section initial='hidden' animate='visible' variants={variants} className={className} onClick={handleClick}>
         {children}
      </motion.section>
   );
};

export default Content;
