import { useState } from 'react';
import ResetStyles from '@/styles/ResetStyles';
import MainLayout from '@/Layout/MainLayout';
import Header from '@/Layout/Header';

function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <>
      <ResetStyles />
      <Header />
      {isHome ? <MainLayout /> : <div>로그인 페이지</div>}
    </>
  );
}

export default App;
