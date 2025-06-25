import { useState } from 'react';
import ResetStyles from '@/styles/ResetStyles';
import MainLayout from '@/Layout/MainLayout';
import Header from '@/Layout/Header';
import Login from '@/Layout/Login';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/ResetStyles';

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
      <div
        style={{
          backgroundColor: '#f7f8f9',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ResetStyles />
        <Header onBackClick={handleBackClick} onLoginClick={handleLoginClick} />
        {isHome ? <MainLayout /> : <Login onLogin={handleBackClick} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
