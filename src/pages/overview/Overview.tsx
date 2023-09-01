import CanvasComp from '../../animation/CanvasComp';
import { motion } from 'framer-motion';

const titleAnimation = {
   visible: (i: number) => ({
      y: 0,
      opacity: 0.9,
      transition: {
         duration: 1,
         delay: i * 0.1,
      },
   }),
   hidden: {
      opacity: 0,
      y: '-500vh',
   },
};

const Overview = () => {
   const renderTitle = (title: string) => {
      const titleToRender = title;
      const titleSplit = titleToRender.split('');

      return titleSplit.map((item, index) => {
         return (
            <motion.span
               key={index}
               initial='hidden'
               animate='visible'
               variants={titleAnimation}
               custom={index}
            >
               {item}
            </motion.span>
         );
      });
   };

   return (
      <>
         <section className='overview'>
            <section className='head'>
               <h1
                  style={{
                     whiteSpace: 'pre-wrap',
                  }}
               >
                  {renderTitle('frontend - React developer \nSimon Aerts')}
               </h1>
            </section>
            <section className='logo-animation'>
               <CanvasComp />
            </section>
         </section>
      </>
   );
};

export default Overview;
