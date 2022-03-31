import Routes from './routes/Routing';
import { UseStateProvider } from './context/UseStateContext';

function App() {
   return (
      <UseStateProvider>
         <Routes />
      </UseStateProvider>
   );
}

export default App;
