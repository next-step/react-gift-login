import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import App from './App';
import './index.css';  
import Root from './Root';
=======
import Root from './Root';
import './index.css';

// ✅ Emotion ThemeProvider와 Global 추가
import { ThemeProvider, Global } from '@emotion/react';
import { theme } from './styles/theme';
import { globalReset } from './styles/reset';

>>>>>>> 5b4be5d (style: 로그인 화면 구현 완료)
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
<<<<<<< HEAD
      <BrowserRouter>
        <Root />
      </BrowserRouter>
=======
      <ThemeProvider theme={theme}>
        <Global styles={globalReset} />
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </ThemeProvider>
>>>>>>> 5b4be5d (style: 로그인 화면 구현 완료)
    </React.StrictMode>
  );
}
