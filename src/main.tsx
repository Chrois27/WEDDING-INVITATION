import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/global.css';
import './styles/main.scss';

const AppWrapper = () => (
  <div className="app-container">
    <App />
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
);