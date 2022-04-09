import React from 'react';

interface projectDatas {
   title: string;
   link: string;
   description: string;
   stack: string[] | any;
   inProgress: boolean;
}

// title, link, description, stack, inProgress;

const ReturnProject: React.FC<projectDatas> = ({ title, link, description, stack, inProgress }) => {
   return (
      <li>
         <section className='header'>
            <h3>{title}</h3>
            <a href={`${link}`} target='_blank' rel='noreferrer'>
               {' '}
               Click here to see the project
            </a>
         </section>
         <section className='description'>
            <p>{description}</p>
            {inProgress && <p>Project still in progess</p>}
         </section>
      </li>
   );
};

export default ReturnProject;
