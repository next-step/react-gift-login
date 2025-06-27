import { GlobalResetStyle } from "@styles/reset";
import { GlobalTypographyStyle } from "@styles/typography";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "@styles/theme";
import AppLayout from "@/components/layout/AppLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
      <Global styles={GlobalTypographyStyle} />
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;
