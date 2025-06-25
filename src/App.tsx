import { GlobalResetStyle } from "@styles/reset";
import { GlobalTypographyStyle } from "@styles/typography";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
      <Global styles={GlobalTypographyStyle} />
      <div>카카오 테크 캠퍼스 2단계 미션 1</div>
    </ThemeProvider>
  );
}

export default App;
