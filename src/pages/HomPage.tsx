import NavigationBar from '@/components/NavigationBar';
import RecieverSelectBox from '@/components/RecieverSelectBox';
import GiftThemeSection from '@/components/GiftTheme';
import Banner from '@/components/Banner';
import GiftRanking from '@/components/GiftRanking';

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <RecieverSelectBox />
      <GiftThemeSection />
      <Banner />
      <GiftRanking />
    </>
  );
};

export default HomePage;