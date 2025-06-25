/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react';
import NavBar from './components/NavBar';
import CategorySection from './components/CategorySection';
import theme from './styles/theme';
import { categories } from './data/categories';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <main>
        <h1>카카오 선물하기 메인 페이지 만들기</h1>
        <CategorySection categories={categories} />
      </main>
    </ThemeProvider>
  );
}

export default App;
