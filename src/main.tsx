import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { FormDataProvider } from './contexts/FormDataContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <FormDataProvider>
          <App />
        </FormDataProvider>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
