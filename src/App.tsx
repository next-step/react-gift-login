import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "@/pages/Home";
import globalStyle from '@/styles/global.ts';
import { Global } from '@emotion/react';
import { JSX } from 'react';


const App: () => JSX.Element = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
