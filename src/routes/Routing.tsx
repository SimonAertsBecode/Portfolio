import { Route, Routes as Routing } from 'react-router-dom';

//** Import components
import LandingPage from '../components/LandingPage'

const Routes = () => {
   return (
      <Routing>
         <Route index element={<LandingPage />} />
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
