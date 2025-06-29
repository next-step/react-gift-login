import { useState } from 'react';
import ResetStyles from '@/styles/ResetStyles';
import MainLayout from '@/Layout/MainLayout';
import Header from '@/Layout/Header';
import Login from '@/Layout/Login';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/ResetStyles';
import { AppWrapper } from '@/styles/App.styles';

function App() {
  const [isHome, setIsHome] = useState(true);
  function handleBackClick() {
    setIsHome(true);
  }
  function handleLoginClick() {
    setIsHome(false);
  }
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <ResetStyles />
        <Header onBackClick={handleBackClick} onLoginClick={handleLoginClick} />
        {isHome ? <MainLayout /> : <Login onLogin={handleBackClick} />}
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
