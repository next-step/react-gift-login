/** @jsxImportSource @emotion/react */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@src/App.tsx'
import { ThemeProvider, css } from '@emotion/react';
import theme from './styles/tokens/index';
import "@src/styles/reset.css";
import '@src/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)