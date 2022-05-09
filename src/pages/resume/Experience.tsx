import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

//* CLass import
import { useStringManipulation } from '../../utils/string';

interface experienceDatas {
   title: string;
   place: string;
   dates: [string, string];
   stacks: string[];
}

const Experience: React.FC<experienceDatas> = ({ title, place, dates, stacks }) => {

   return (
      <section className={place}>
         <section className='header'>
            <h4>{title}</h4>
            <h5>{useStringManipulation.capitalizeFirstLetter(title)}</h5>
         </section>
         <p>
            {dates[0]} <AiOutlineArrowRight /> {dates[1]}
         </p>
         <ul>
            {stacks.map((item) => (
               <li key={item}>{item}</li>
            ))}
         </ul>
      </section>
   );
};

export default Experience;
