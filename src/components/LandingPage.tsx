import { useState } from 'react';
import Curriculum from './curriculum/Curriculum';
import Overview from './homeComponents/Overview';
import Pagination from './Pagination';
import Projects from './projects/Projects';

import { motion } from 'framer-motion';

const LandingPage = () => {
   const [actviveBtn, setActiveBtn] = useState(2);

   return (
      <>
         <section className='container'>
            <section className='left-page'>
               <Curriculum />
            </section>
            <section className='landing-page'>
               <Overview />
            </section>
            <section className='right-page'>
               <Projects />
            </section>
            <Pagination setActiveBtn={setActiveBtn} activeBtn={actviveBtn} />
         </section>
      </>
   );
};

export default LandingPage;
