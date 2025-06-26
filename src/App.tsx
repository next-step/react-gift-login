import { Global, ThemeProvider, css } from '@emotion/react';
import resetStyles from '@/reset';
import theme from './styles/theme';
import styled from '@emotion/styled';
import NavigationBar from './components/NavigationBar/NavigationBar';
import GiftBanner from './components/GiftBanner/GiftBanner';
import Category from './components/Category/Category';
import EventBanner from './components/EventBanner/EventBanner';

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

const Content = styled.div`
  margin-top: ${({ theme }) => theme.spacing[10]};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
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
            <Content>
              <Category />
              <EventBanner />
            </Content>
          </main>
        </AppFrame>
      </ViewportContainer>
    </ThemeProvider>
  );
}

export default App;
