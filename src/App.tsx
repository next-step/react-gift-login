/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react';
import NavBar from './components/NavBar';
import CategorySection from './components/CategorySection';
import theme from './styles/theme';
import { categories } from './data/categories';
import FriendSelector from './components/FriendSelector';
import Banner from './components/Banner';
import RankingSection from './components/RankingSection/RankingSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <main>
        <FriendSelector />
        <CategorySection categories={categories} />
        <Banner/>
        <RankingSection/>
      </main>
    </ThemeProvider>
  );
}

export default App;
