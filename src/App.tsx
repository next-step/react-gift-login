import React from 'react';
import GlobalStyle from './styles/global';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';

const Container = styled.div`
  background-color: ${(props) => props.theme.semanticColors.brand.kakaoYellow};
`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>test</Container>
      </ThemeProvider>
    </>
  );
};

export default App;
