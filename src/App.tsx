import { Global, ThemeProvider, css } from '@emotion/react';
import resetStyles from '@/reset';
import theme from './styles/theme';

const globalStyles = css`
  body {
    font-family: 'Pretendard', Pretendard, sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={[resetStyles, globalStyles]} />
    </ThemeProvider>
  );
}

export default App;
