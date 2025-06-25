import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme"; // 방금 정의한 테마 파일
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>test</Layout>
    </ThemeProvider>
  );
}

export default App;
