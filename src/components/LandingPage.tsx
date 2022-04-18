import { useState } from 'react';
import Resume from '../pages/resume/Resume';
import Overview from '../pages/overview/Overview';
import Pagination from './Pagination';
import Projects from '../pages/projects/Projects';
import Content from './Content';

interface itemAnimation {
   x: string;
   scale: number;
   zIndex: number;
   transition: {
      duration: number;
   };
}

const LandingPage = ({ responsiveValue }: { responsiveValue: number }) => {
   const [actviveBtn, setActiveBtn] = useState(1);

   const jsxComponents = [
      { title: 'Resume', content: <Resume /> },
      { title: 'Overview', content: <Overview /> },
      { title: 'Projects', content: <Projects /> },
   ];

   const paginationLogic = (visible: itemAnimation, index: number) => {
      const isPositive = index < actviveBtn ? false : true;
      const diff = Math.abs(actviveBtn - index);

      let scaleValue = (0.8 * diff) % (diff - 1);

      if (isNaN(scaleValue)) {
         scaleValue = 0.8 * diff;
      }

      visible.x = !isPositive ? `-${diff * responsiveValue}vw` : `${diff * responsiveValue}vw`;
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
                           delay: 0,
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
                     <Content
                        key={title}
                        title={title}
                        variants={animationVariants}
                        className={`${title.toLowerCase()}-page`}
                        setActiveBtn={setActiveBtn}
                        index={index}
                     >
                        {content}
                     </Content>
                  );
               })}
            </main>

            <Pagination jsxComponents={jsxComponents} setActiveBtn={setActiveBtn} activeBtn={actviveBtn} />
         </section>
      </>
   );
};

export default LandingPage;
