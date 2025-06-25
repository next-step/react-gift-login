/** @jsxImportSource @emotion/react */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';

import { theme } from '@/styles/theme';
import reset from '@/styles/reset';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
