/** @jsxImportSource @emotion/react */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global } from '@emotion/react';
import reset from '@/styles/reset';
import '@/index.css';
import App from '@/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={reset} />
    <App />
  </StrictMode>,
);
