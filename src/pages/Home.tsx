import CategorySection from '@components/CategorySection';
import PromoBanner from '@components/PromoBanner';
import RankingSection from '@components/RankingSection';
import RecipientSelector from '@components/RecipientSelector';

const Home = () => {
  return (
    <>
      <RecipientSelector />
      <CategorySection />
      <PromoBanner />
      <RankingSection />
    </>
  );
};

export default Home;
