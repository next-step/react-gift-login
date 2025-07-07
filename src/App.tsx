import GlobalStyles from "@/styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme/index";
import Container from "./styles/Container.tsx/Container";
import { RouterProvider } from 'react-router-dom';
import route from "@/routes/Router.tsx"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <RouterProvider router={route} />
      </Container>
    </ThemeProvider>
  );
}
export default App;
