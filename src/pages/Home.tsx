import CategorySection from '@components/CategorySection';
import PromoBanner from '@components/PromoBanner';
import RankingSection from '@components/RankingSection';
import FreiendSelector from '@components/FreiendSelector';

const Home = () => {
  return (
    <>
      <FreiendSelector />
      <CategorySection />
      <PromoBanner />
      <RankingSection />
    </>
  );
};

export default Home;
