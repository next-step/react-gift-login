import { GlobalResetStyle } from "@styles/reset";
import { GlobalTypographyStyle } from "@styles/typography";
import { Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "@styles/theme";
import MainPage from "@/pages/MainPage";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray.gray100};
`;
const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.gray.gray200};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
      <Global styles={GlobalTypographyStyle} />
      <Background>
        <Container>
          <MainPage />
        </Container>
      </Background>
    </ThemeProvider>
  );
}

export default App;
