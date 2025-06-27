import GlobalStyle from '@/styles/GlobalStyle';
import Navigation from '@/components/Navigation';
import FriendSelectSection from '@/components/FriendSelectSection';
import CategorySection from '@/components/CategorySection';
import BannerSection from '@/components/BannerSection';
import RankingGroup from '@/components/RankingSection/RankingGroup';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <FriendSelectSection />
      <CategorySection />
      <BannerSection />
      <RankingGroup />
    </>
  );
}

export default App;
