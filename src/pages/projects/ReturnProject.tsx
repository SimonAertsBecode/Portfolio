import React from 'react';
import Loading from '../../animation/Loading';

interface projectDatas {
   title: string;
   link: string;
   sourceCode: string | boolean;
   description: string;
   stack: string[] | any;
   inProgress: boolean;
}

// title, link, description, stack, inProgress;

const ReturnProject: React.FC<projectDatas> = ({ title, link, description, sourceCode, stack, inProgress }) => {
   return (
      <li>
         <section className='header'>
            <h3>{title}</h3>
            <section className='links'>
               <a href={`${link}`} target='_blank' rel='noreferrer'>
                  see project
               </a>
               <a href={`${sourceCode}`} target='_blank' rel='noreferrer'>
                  source code
               </a>
            </section>
         </section>
         <section className='description'>
            <p>{description}</p>
            {inProgress && <Loading />}
         </section>
      </li>
   );
};

export default ReturnProject;
