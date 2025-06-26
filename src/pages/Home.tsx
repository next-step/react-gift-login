import CategorySection from '@components/CategorySection';
import NavigationBar from '@components/NavigationBar';
import PromoBanner from '@components/PromoBanner';
import RankingSection from '@components/RankingSection';
import RecipientSelector from '@components/RecipientSelector';

const Home = () => {
  return (
    <>
      <NavigationBar />
      <RecipientSelector />
      <CategorySection />
      <PromoBanner />
      <RankingSection />
    </>
  );
};

export default Home;
