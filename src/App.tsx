import Routes from './routes/Routing';
import { UseStateProvider } from './context/UseStateContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
   return (
      <UseStateProvider>
         <BrowserRouter>
            <Routes />
         </BrowserRouter>
      </UseStateProvider>
   );
}

export default App;
