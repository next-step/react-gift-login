import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/Layout/Layout';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <NavigationBar />
        <div></div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
