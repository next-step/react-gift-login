import PageLayout from '@/components/Layout/PageLayout';
import NavigationBar from '@/components/NavigationBar';
import GiftThemeSection from '@/components/GiftTheme';
import ReceiverSelectBox from './components/RecieverSelectBox';
import Banner from './components/Banner';
import GiftRanking from './components/GiftRanking';



const App = () => {
  return (
    <>
      <NavigationBar />
      <PageLayout>
        <ReceiverSelectBox/>
        <GiftThemeSection/>
        <Banner/>
        <GiftRanking/>
      </PageLayout>
    </>
  );
}

export default App;
