import { useContext } from 'react';

//** React realated import */
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowRight } from 'react-icons/ai';

//** Components import */
import Skills from '../components/subComponents/Skills';
import { UseStateContext } from '../context/UseStateContext';

const Curriculum = () => {
   const skillsContext = useContext(UseStateContext);
   let showSkills = skillsContext?.showSkills;

   return (
      <section className='resume'>
         <section className='basic-infos'>
            <h1>Simon Aerts</h1>
            <img src='/selfie.jpeg' alt='Simon Aerts'></img>
            <section className='social-links'>
               <a rel='noreferrer' target='_blank' href='https://github.com/SimonAertsBecode'>
                  <AiFillGithub />
               </a>
               <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/simon-aerts-86a204203/'>
                  <AiFillLinkedin />
               </a>
            </section>
            <section className='skills'>{showSkills && <Skills />}</section>
         </section>
         <section className='journey'>
            <h2>Professional experience</h2>
            <section className='experience'>
               <section className='climact'>
                  <h4>Internship as a React.js - Redux developer</h4>
                  <h5>Climact</h5>
                  <p>
                     05/2021 <AiOutlineArrowRight /> 10/2021
                  </p>
                  <ul>
                     <li>React</li>
                     <li>Redux</li>
                     <li>Scss</li>
                     <li>REST API</li>
                     <li>ApexChart.js</li>
                  </ul>
               </section>
               <section className='becode'>
                  <h4>web developer intensive training</h4>
                  <h5>BeCode</h5>
                  <p>
                     01/2021 <AiOutlineArrowRight /> 08/2021
                  </p>

                  <ul>
                     <li>React</li>
                     <li>JavaScript</li>
                     <li>Scss</li>
                     <li>REST API</li>
                     <li>Node.js</li>
                     <li>MongoDB</li>
                  </ul>
               </section>
               <section className='physiotherapy'>
                  <h4>Physiotherapist</h4>
                  <h5>few institutes</h5>
                  <p>
                     01/2018 <AiOutlineArrowRight /> 08/2019
                  </p>
                  <p>Physiotherapist's specific skills</p>
               </section>
            </section>
            <h2>Education</h2>
            <section className='education'>
               <section className='--becode'>
                  <h3>Certification as web developer BeCode</h3>
                  <p>01/2021 - 08/2021</p>
               </section>

               <section className='--physiotherapy'>
                  <h3>Master in physiotherapy</h3>
                  <p>2015 - 2019</p>
               </section>
            </section>
         </section>
      </section>
   );
};

export default Curriculum;
