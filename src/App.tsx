import { Global, ThemeProvider, css } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';
import resetStyles from '@/reset';
import theme from './styles/theme';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { ViewportContainer } from './App.styles';

const globalStyles = css`
  body {
    font-family: 'Pretendard', Pretendard, sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={[resetStyles, globalStyles]} />
      <ViewportContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ViewportContainer>
    </ThemeProvider>
  );
}

export default App;
