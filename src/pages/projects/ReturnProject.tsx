import React from 'react';
import LoadingAnimation from '../../animation/LoadingAnimation';

interface projectDatas {
   title: string;
   link: string | boolean;
   sourceCode: string | boolean;
   description: string;
   stack: string[] | any;
   inProgress: boolean;
}

const ReturnProject: React.FC<projectDatas> = ({ title, link, description, sourceCode, stack, inProgress }) => {
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
         </section>
         {inProgress && <LoadingAnimation text='Still In Development' />}
      </li>
   );
};

export default ReturnProject;
