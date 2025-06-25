import { Global, ThemeProvider, css } from '@emotion/react';
import resetStyles from '@/reset';
import theme from './styles/theme';
import styled from '@emotion/styled';
import NavigationBar from './components/NavigationBar/NavigationBar';

const globalStyles = css`
  body {
    font-family: 'Pretendard', Pretendard, sans-serif;
  }
`;

const ViewportContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.disabled};
`;

const AppFrame = styled.div`
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={[resetStyles, globalStyles]} />
      <ViewportContainer>
        <AppFrame>
          <NavigationBar />
        </AppFrame>
      </ViewportContainer>
    </ThemeProvider>
  );
}

export default App;
