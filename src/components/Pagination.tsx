import React, { Dispatch, SetStateAction } from 'react';

interface props {
   activeBtn: number;
   setActiveBtn: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<props> = ({ setActiveBtn, activeBtn }) => {
   const renderButton = (value: number, name: string) => {
      return (
         <button
            key={value}
            className={activeBtn === value ? 'btn-active' : undefined}
            onClick={() => {
               setActiveBtn(value);
            }}
         >
            {name}
         </button>
      );
   };
   return (
      <section className='pagination'>
         {renderButton(1, 'Curriculum')}
         {renderButton(2, 'Overview')}
         {renderButton(3, 'Projects')}
      </section>
   );
};

export default Pagination;
