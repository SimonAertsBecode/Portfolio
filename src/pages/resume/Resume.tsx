import { useContext } from 'react';
import { UseStateContext } from '../../context/UseStateContext';

//** React realated import */
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

//** Components import */
import Skills from './Skills';
import Experience from './Experience';

const Resume = () => {
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
            <section className='description'>
               <h2>A little bit about myself</h2>
               <p>
                  My name is Simon, I'm 27 years old and I'm originally from Belgium (Brussels to be precise). After graduating in physiotherapy I
                  realised that it wasn't for me, so I did an intensive 11 months training course at BeCode (including internship). Since then, I
                  continue to learn the whole React/Javascript-Typescript ecosystem by myself by working on projects that can be found on my github
                  page and portfolio. I've been in the web development univers for about a year and a half now and I love it.
               </p>
            </section>
            <h2>Professional experience</h2>
            <section className='experience'>
               <Experience
                  title='Internship as a React.js - Redux developer'
                  place='climact'
                  dates={['05/2021', '10/2021']}
                  stacks={['React', 'Redux', 'Scss', 'REST API', 'ApexChart.js']}
               />
               <Experience
                  title='Web developer intensive training'
                  place='becode'
                  dates={['01/2021', '08/2021']}
                  stacks={['React', 'JavaScript', 'TypeScript', 'Scss', 'Node.js', 'MongoDB', 'REST API']}
               />
               <Experience
                  title='Physiotherapist'
                  place='few institutes'
                  dates={['01/2018', '08/2019']}
                  stacks={["physiotherapist's specific skills"]}
               />
            </section>
            <h2>Education</h2>
            <section className='education'>
               <section className='becode'>
                  <h3>Certification as web developer BeCode</h3>
                  <p>01/2021 - 08/2021</p>
               </section>

               <section className='physiotherapy'>
                  <h3>Master in physiotherapy</h3>
                  <p>2015 - 2019</p>
               </section>
            </section>
         </section>
      </section>
   );
};

export default Resume;
