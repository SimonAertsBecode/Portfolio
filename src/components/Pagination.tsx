import React, { Dispatch, SetStateAction, useContext } from 'react';
import { UseStateContext } from '../context/UseStateContext';

interface props {
   activeBtn: number;
   setActiveBtn: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<props> = ({ setActiveBtn, activeBtn }) => {
   const skillsContext = useContext(UseStateContext);

   const renderButton = (value: number, name: string) => {
      return (
         <button
            key={value}
            className={activeBtn === value ? 'btn-active' : undefined}
            onClick={() => {
               setActiveBtn(value);
               value === 0 && skillsContext?.setShowSkills(true);
            }}
         >
            {name}
         </button>
      );
   };
   return (
      <section className='pagination'>
         {renderButton(0, 'Curriculum')}
         {renderButton(1, 'Overview')}
         {renderButton(2, 'Projects')}
      </section>
   );
};

export default Pagination;
