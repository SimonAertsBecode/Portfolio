import { createContext, ReactChild, ReactFragment, ReactPortal } from 'react';
import { useState } from 'react';

export const UseStateContext = createContext(false);

export const UseStateProvider = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => {
   const [showSkills, setShowSkills] = useState(false);

   return <UseStateContext.Provider value={[showSkills, setShowSkills]}>{props.children}</UseStateContext.Provider>;
};
