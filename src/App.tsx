import { Global, ThemeProvider, css } from '@emotion/react';
import resetStyles from '@/reset';
import theme from './styles/theme';
import NavigationBar from './components/NavigationBar/NavigationBar';
import GiftBanner from './components/GiftBanner/GiftBanner';
import Category from './components/Category/Category';
import EventBanner from './components/EventBanner/EventBanner';
import TrendingGifts from './components/TrendingGifts/TrendingGifts';
import { AppFrame, Content, ViewportContainer } from './App.styles';

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
        <AppFrame>
          <NavigationBar />
          <main>
            <GiftBanner />
            <Content>
              <Category />
              <EventBanner />
              <TrendingGifts />
            </Content>
          </main>
        </AppFrame>
      </ViewportContainer>
    </ThemeProvider>
  );
}

export default App;
