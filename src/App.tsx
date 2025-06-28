import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { JSX } from 'react';

import Home from '@/pages/Home';
import Login from '@/pages/Login/Login.tsx';

import globalStyle from '@/styles/global';
import { theme } from '@/styles/theme';
import NotFound from '@/pages/NotFound/NotFound.tsx';

const App: () => JSX.Element = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
