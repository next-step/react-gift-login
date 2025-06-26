import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/globalStyle';
import {theme} from '@/styles/theme';
import Layout from '@/components/Layout';
import NavigationBar from '@/components/NavigationBar/NavigationBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <NavigationBar /> 
      </Layout>
    </ThemeProvider>
  );
}

export default App;
