import { GlobalResetStyle } from './styles/reset'
import { Global } from "@emotion/react";
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme/theme';
import GiftMain from './pages/GiftMain';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
          <GiftMain />
    </ThemeProvider>
  );
};

export default App;