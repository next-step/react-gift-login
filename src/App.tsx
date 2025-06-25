import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme";
import Gift from "@/pages/Gift";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Gift />
    </ThemeProvider>
  );
}

export default App;
