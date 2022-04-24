import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface experienceDatas {
   title: string;
   place: string;
   dates: [string, string];
   stacks: string[];
}

const Experience: React.FC<experienceDatas> = ({ title, place, dates, stacks }) => {
   const capitalizeFirstLetter = (string: string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
   };

   return (
      <section className={place}>
         <section className='header'>
            <h4>{title}</h4>
            <h5>{capitalizeFirstLetter(title)}</h5>
         </section>
         <p>
            {dates[0]} <AiOutlineArrowRight /> {dates[1]}
         </p>
         <ul>
            {stacks.map((item) => (
               <li>{item}</li>
            ))}
         </ul>
      </section>
   );
};

export default Experience;
