import { useState } from 'react';
import Curriculum from '../pages/Curriculum';
import Overview from '../pages/Overview';
import Pagination from './Pagination';
import Projects from '../pages/Projects';

import { motion } from 'framer-motion';

interface itemAnimation {
   x: string;
   scale: number;
   zIndex: number;
   transition: {
      duration: number;
   };
}

const animationVariants = {
   visible: {
      x: '0vw',
      scale: 1,
      zIndex: 2,
      transition: {
         duration: 0.5,
      },
   },
};

const LandingPage = () => {
   const [actviveBtn, setActiveBtn] = useState(1);

   const jsxComponents = [
      { page: 'left', content: <Curriculum /> },
      { page: 'main', content: <Overview /> },
      { page: 'right', content: <Projects /> },
   ];

   const animationLogic = (visible: itemAnimation, index: number) => {
      const isPositive = index < actviveBtn ? false : true;
      const diff = Math.abs(actviveBtn - index);

      let scaleValue = (0.8 * diff) % (diff - 1);

      if (isNaN(scaleValue)) {
         scaleValue = 0.8 * diff;
      }

      visible.x = !isPositive ? `-${diff * 50}vw` : `${diff * 50}vw`;
      visible.scale = scaleValue;
      visible.zIndex = diff === 2 ? 0 : diff;
   };

   return (
      <>
         <section className='container'>
            {jsxComponents.map((item, index) => {
               const { page, content } = item;
               const { visible } = animationVariants;
               if (actviveBtn === index) {
                  visible.x = '0vw';
                  visible.scale = 1;
                  visible.zIndex = 2;
               } else {
                  animationLogic(visible, index);
               }
               return (
                  <motion.section key={page} animate='visible' variants={animationVariants} className={`${page}-page`}>
                     {console.log(visible)}
                     {content}
                  </motion.section>
               );
            })}
            <Pagination setActiveBtn={setActiveBtn} activeBtn={actviveBtn} />
         </section>
      </>
   );
};

export default LandingPage;
