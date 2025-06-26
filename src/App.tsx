import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme"; // 방금 정의한 테마 파일
import Layout from "./styles/Layout";
// import NavigationBar from "./components/NavigationBar";
import GlobalStyle from "@/styles/GlobalStyle";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <NavigationBar></NavigationBar>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
