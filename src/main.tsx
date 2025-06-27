import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { reset } from '@styles/reset.ts';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme.ts';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
