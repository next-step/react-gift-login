import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import NavigationBar from '@/components/common/NavigationBar';
import HomePage from '@/pages/homepage';
import LoginPage from '@/pages/loginpage';

function App() {
  return (
    <AppContainer>
      <AppInner>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </AppInner>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
  min-height: 100vh;
`;

const AppInner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.gray00};
  min-height: 100vh;
`;
