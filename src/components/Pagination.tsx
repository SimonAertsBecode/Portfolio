import React, { Dispatch, SetStateAction, useContext } from 'react';
import { UseStateContext } from '../context/UseStateContext';

interface props {
   jsxComponents: components[];
   activeBtn: number;
   setActiveBtn: Dispatch<SetStateAction<number>>;
}

interface components {
   title: string;
   content: JSX.Element;
}

const Pagination: React.FC<props> = ({ setActiveBtn, activeBtn, jsxComponents }) => {
   const skillsContext = useContext(UseStateContext);

   const renderButton = (value: number, name: string) => {
      return (
         <button
            key={value}
            className={activeBtn === value ? 'active' : undefined}
            onClick={() => {
               setActiveBtn(value);
               name === 'Resume' && skillsContext?.setShowSkills(true);
            }}
         >
            {name}
         </button>
      );
   };
   return (
      <section className='pagination'>
         {jsxComponents.map((item, index) => {
            return renderButton(index, item.title);
         })}
      </section>
   );
};

export default Pagination;
