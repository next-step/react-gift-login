import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <div>check</div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
