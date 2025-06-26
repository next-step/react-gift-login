import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "@/pages/Home";
import globalStyle from '@/styles/global.ts';
import { Global } from '@emotion/react';
import { JSX } from 'react';
import Login from '@/pages/Login.tsx';


const App: () => JSX.Element = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
