import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyle.tsx';

import { ThemeProvider } from '@emotion/react'
import GlobalStyle from './styles/GlobalStyle.tsx'
import theme from './styles/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
)
=======
    <GlobalStyle />
    <App />
  </StrictMode>,
);
>>>>>>> eunchae-04
