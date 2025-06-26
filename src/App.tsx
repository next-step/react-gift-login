import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/globalStyle';
import {theme} from '@/styles/theme';
import Layout from '@/Components/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <div>Hello World</div> {/* 여기에 Router나 페이지 컴포넌트 들어가면 됨 */}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
