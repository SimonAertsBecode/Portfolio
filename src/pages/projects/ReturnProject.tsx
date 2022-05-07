import React from 'react';
import LoadingAnimation from '../../animation/LoadingAnimation';

interface projectDatas {
   title: string;
   link: string | boolean;
   sourceCode: string | boolean;
   description: string;
   stack: string[] | stackObject;
   inProgress: boolean;
}

type stackObject = {
   language: string;
   frontend: string[];
   backend: string;
   database: string;
};

const ReturnProject: React.FC<projectDatas> = ({ title, link, description, sourceCode, stack, inProgress }) => {
   const arrayToUserInterface = (array: string[]) => {
      if (array.length >= 2) {
         return array.map((item, index) => (index === 0 ? item : `  ${item}`));
      }
   };

   const isStackAnArray = () => {
      if (Array.isArray(stack)) {
         return stack.map((item) => <li key={item}>{item}</li>);
      } else {
         const stackEntries = Object.entries(stack);
         return stackEntries.map((entrie) => {
            return <li key={entrie[0]}>{`${entrie[0]} : ${Array.isArray(entrie[1]) ? arrayToUserInterface(entrie[1]) : entrie[1]}`}</li>;
         });
      }
   };

   return (
      <li>
         <section className='body'>
            <section className='header'>
               <h3>{title}</h3>
               <section className='links'>
                  {link ? (
                     <a href={`${link}`} target='_blank' rel='noreferrer'>
                        see project
                     </a>
                  ) : (
                     <p>the project hasn't been deployed yet</p>
                  )}
                  {sourceCode ? (
                     <a href={`${sourceCode}`} target='_blank' rel='noreferrer'>
                        source code
                     </a>
                  ) : (
                     <p>I don't have access to the source code anymore</p>
                  )}
               </section>
            </section>
            <section className='description'>
               <p>{description}</p>
            </section>
            <section className='stack'>
               <h2>Stack used for the project</h2>
               <ul>{isStackAnArray()}</ul>
            </section>
         </section>
         {inProgress && <LoadingAnimation text='Still In Development' />}
      </li>
   );
};

export default ReturnProject;
