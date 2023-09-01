import { Route, Routes as Routing } from 'react-router-dom';

//** Import components
import TransitionLogic from '../components/TransitionLogic';

const Routes = () => {
   return (
      <Routing>
         <Route index element={<TransitionLogic />} />
      </Routing>
   );
};

export default Routes;
