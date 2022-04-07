import { useState } from 'react';
import Curriculum from '../pages/Resume';
import Overview from '../pages/Overview';
import Pagination from './Pagination';
import Projects from '../pages/Projects';
import MemoContent from './Content';

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
      { title: 'Resume', content: <Curriculum /> },
      { title: 'Overview', content: <Overview /> },
      { title: 'Projects', content: <Projects /> },
   ];

   window.addEventListener('load', () => {
      console.log('page loaded');
   });

   const paginationLogic = (visible: itemAnimation, index: number) => {
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

                  if (actviveBtn !== index) paginationLogic(visible, index);

                  return (
                     <MemoContent key={title} variants={animationVariants} className={`${title.toLowerCase()}-page`}>
                        {content}
                     </MemoContent>
                  );
               })}
            </main>

            <Pagination jsxComponents={jsxComponents} setActiveBtn={setActiveBtn} activeBtn={actviveBtn} />
         </section>
      </>
   );
};

export default LandingPage;
