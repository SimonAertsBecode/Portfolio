import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/index.scss';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(<App />);
