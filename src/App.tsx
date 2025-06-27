import React from 'react';
import GlobalStyle from './styles/global';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import NavigationBar from '@components/NavigationBar';

const Warpper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.semanticColors.background.fill};
`;

const TopArea = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  max-width: 720px;
  width: 100%;
  background-color: ${(props) => props.theme.semanticColors.background.default};
  z-index: 1000;
`;

const MainArea = styled.div`
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgb(255, 255, 255);
  padding-top: 2.75rem;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Warpper>
          <TopArea>
            <NavigationBar />
          </TopArea>
          <MainArea>메인</MainArea>
        </Warpper>
      </ThemeProvider>
    </>
  );
};

export default App;
