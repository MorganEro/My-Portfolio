import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './scss/styles/main.scss';
import App from './App.jsx';
import { ModalProvider } from './context/ModalContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>
);
