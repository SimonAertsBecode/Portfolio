import { createContext, Dispatch, ReactChild, SetStateAction, useMemo } from 'react';
import { useState } from 'react';

interface skillsInterface {
   showSkills: boolean;
   setShowSkills: Dispatch<SetStateAction<boolean>>;
}

export const UseStateContext = createContext<skillsInterface | null>(null);

export const UseStateProvider = (props: { children: ReactChild }) => {
   const [showSkills, setShowSkills] = useState(false);

   const providerSkills = useMemo(() => ({ showSkills, setShowSkills }), [showSkills, setShowSkills]);

   return <UseStateContext.Provider value={providerSkills}>{props.children}</UseStateContext.Provider>;
};
