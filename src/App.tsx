import Navigation from '@/components/Navigation';
import GiftsPage from '@/pages/GiftsPage';
import GlobalStyle from '@/styles/global';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.semantic.background.fill};
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer>
          <Navigation />
          <GiftsPage />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
