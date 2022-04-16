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
      y: '-100%',
   },
};

const loadingCircleTransition = {
   duration: 0.6,
   yoyo: Infinity,
   //**Creates an error on transition, needs to be digged in */
   // repeatType: 'loop',
   ease: 'easeInOut',
};

const LoadingAnimation = ({ text }: { text?: string }) => {
   let content = null;

   if (text) {
      const animateText = text.split('');
      content = (
         <>
            {animateText.map((item, index) => {
               return (
                  <motion.span key={index} variants={loadingCircle} transition={loadingCircleTransition}>
                     {item === ' ' ? ' - ' : item}
                  </motion.span>
               );
            })}
         </>
      );
   }

   return (
      <motion.section className='loading' variants={loadingContainer} initial='start' animate='end'>
         {content ? (
            content
         ) : (
            <>
               <motion.div variants={loadingCircle} transition={loadingCircleTransition} className='bullet-first'></motion.div>
               <motion.div variants={loadingCircle} transition={loadingCircleTransition} className='bullet-second'></motion.div>
               <motion.div variants={loadingCircle} transition={loadingCircleTransition} className='bullet-third'></motion.div>
            </>
         )}
      </motion.section>
   );
};

export default LoadingAnimation;
