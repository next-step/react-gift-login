import { useState } from 'react';
import ResetStyles from '@/styles/ResetStyles';
import MainLayout from '@/Layout/MainLayout';
import Header from '@/Layout/Header';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/ResetStyles';

function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <Header />
      {isHome ? <MainLayout /> : <div>로그인 페이지</div>}
    </ThemeProvider>
  );
}

export default App;
