import { Global, ThemeProvider, css } from '@emotion/react';
import resetStyles from '@/reset';
import theme from './styles/theme';
import styled from '@emotion/styled';
import NavigationBar from './components/NavigationBar/NavigationBar';
import GiftBanner from './components/GiftBanner/GiftBanner';

const globalStyles = css`
  body {
    font-family: 'Pretendard', Pretendard, sans-serif;
  }
`;

const ViewportContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: ${({ theme }) => theme.layout.height.viewport};
  background-color: ${({ theme }) => theme.colors.background.fill};
`;

const AppFrame = styled.div`
  max-width: ${({ theme }) => theme.layout.width.container};
  width: 100%;
  min-height: ${({ theme }) => theme.layout.height.viewport};
  background-color: ${({ theme }) => theme.colors.background.default};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={[resetStyles, globalStyles]} />
      <ViewportContainer>
        <AppFrame>
          <NavigationBar />
          <main>
            <GiftBanner />
          </main>
        </AppFrame>
      </ViewportContainer>
    </ThemeProvider>
  );
}

export default App;
