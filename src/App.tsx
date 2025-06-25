import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme"; // 방금 정의한 테마 파일

function App() {
  return (
    <ThemeProvider theme={theme}>
      <></>
    </ThemeProvider>
  );
}

export default App;
