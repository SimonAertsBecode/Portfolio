//** Logo import */
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiJavascript1, DiSass } from 'react-icons/di';
import { SiTypescript, SiRedux, SiMongodb, SiWebpack } from 'react-icons/si';

const Skills = () => {
   return (
      <>
         <section className='js'>
            <DiJavascript1 />
            <div>
               <span></span>
            </div>
         </section>
         <section className='react'>
            <FaReact />
            <div>
               <span></span>
            </div>
         </section>
         <section className='redux'>
            <SiRedux />
            <div>
               <span></span>
            </div>
         </section>
         <section className='scss'>
            <DiSass />
            <div>
               <span></span>
            </div>
         </section>

         <section className='ts'>
            <SiTypescript />
            <div>
               <span></span>
            </div>
         </section>

         <section className='node'>
            <FaNodeJs />
            <div>
               <span></span>
            </div>
         </section>

         <section className='mongo'>
            <SiMongodb />
            <div>
               <span></span>
            </div>
         </section>

         <section className='webpack'>
            <SiWebpack />
            <div>
               <span></span>
            </div>
         </section>
      </>
   );
};

export default Skills;
