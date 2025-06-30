import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gift from "@/pages/Gift";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gift />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
