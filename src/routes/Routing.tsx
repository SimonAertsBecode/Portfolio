import { Route, Routes as Routing } from 'react-router-dom';

//** Import components
import LandingPage from '../components/LandingPage';
// import Curriculum from '../components/curriculum/Curriculum';
// import Projects from '../components/projects/Projects';

const Routes = () => {
   return (
      <Routing>
         {/* <Route index element={<LandingPage />} />
         <Route path='curriculum' element={<Curriculum />} />
         <Route path='projects' element={<Projects />} />
         <Route path='*' element={<Navigate to='/' />} /> */}
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
