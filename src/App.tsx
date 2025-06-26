import GlobalStyle from '@/styles/GlobalStyle';
import Navigation from '@/components/Navigation';
import FriendSelectSection from '@/components/FriendSelectSection';
import CategorySection from './components/CategorySection';
import BannerSection from './components/BannerSection';
import RankingSection from './components/RankingSection';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <FriendSelectSection />
      <CategorySection />
      <BannerSection />
      <RankingSection />
    </>
  );
}

export default App;
