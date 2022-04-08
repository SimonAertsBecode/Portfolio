import { Route, Routes as Routing } from 'react-router-dom';

//** Import components
import TransitionLogic from '../components/TransitionLogic';

const Routes = () => {
   return (
      <Routing>
         <Route index element={<TransitionLogic />} />
         <Route
            path='github-account'
            element={() => {
               window.location.replace('https://github.com/SimonAertsBecode');
               return null;
            }}
         />
      </Routing>
   );
};

export default Routes;
