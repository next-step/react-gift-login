import { GlobalResetStyle } from './styles/reset'
import { Global } from "@emotion/react";
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme/theme';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
      <div>카카오 선물하기 메인 페이지</div>
    </ThemeProvider>
  );
};

export default App;