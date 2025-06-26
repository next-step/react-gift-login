import GlobalStyle from '@/styles/GlobalStyle';
import Navigation from '@/components/Navigation';
import FriendSelectSection from '@/components/FriendSelectSection';
import CategorySection from './components/CategorySection';
import BannerSection from './components/BannerSection';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <FriendSelectSection />
      <CategorySection />
      <BannerSection />
    </>
  );
}

export default App;
