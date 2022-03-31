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

const LandingPage = () => {
   const [actviveBtn, setActiveBtn] = useState(1);

   const jsxComponents = [
      { title: 'Curriculum', content: <Curriculum /> },
      { title: 'Overview', content: <Overview /> },
      { title: 'Projects', content: <Projects /> },
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
            <main className='content'>
               {jsxComponents.map((item, index) => {
                  const animationVariants = {
                     visible: {
                        x: '0vw',
                        scale: 1,
                        zIndex: 2,
                        transition: {
                           duration: 0.8,
                        },
                        opacity: 1,
                     },
                     hidden: {
                        opacity: 0,
                        x: 0,
                     },
                  };

                  const { title, content } = item;
                  const { visible } = animationVariants;

                  if (actviveBtn !== index) animationLogic(visible, index);

                  return (
                     <motion.section key={title} initial='hidden' animate='visible' variants={animationVariants} className={`${title}-page`}>
                        {content}
                     </motion.section>
                  );
               })}
            </main>

            <Pagination jsxComponents={jsxComponents} setActiveBtn={setActiveBtn} activeBtn={actviveBtn} />
         </section>
      </>
   );
};

export default LandingPage;
