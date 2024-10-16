import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProfessionalsProvider } from './context/ProfessionalsContext';
import { GlobalStyles } from './styles/GlobalStyles';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ProfessionalsProvider>
        <GlobalStyles />
        <App />
      </ProfessionalsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
