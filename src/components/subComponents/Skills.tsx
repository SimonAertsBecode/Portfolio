//** Logo import */
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiJavascript1, DiSass } from 'react-icons/di';
import { SiTypescript, SiRedux, SiMongodb, SiWebpack } from 'react-icons/si';

const Skills = () => {
   return (
      <>
         <section className='js'>
            <DiJavascript1 />
            <div></div>
         </section>
         <section className='react'>
            <FaReact />
            <div></div>
         </section>
         <section className='redux'>
            <SiRedux />
            <div></div>
         </section>
         <section className='scss'>
            <DiSass />
            <div></div>
         </section>

         <section className='ts'>
            <SiTypescript />
            <div></div>
         </section>

         <section className='node'>
            <FaNodeJs />
            <div></div>
         </section>

         <section className='mongo'>
            <SiMongodb />
            <div></div>
         </section>

         <section className='webpack'>
            <SiWebpack />
            <div></div>
         </section>
      </>
   );
};

export default Skills;
