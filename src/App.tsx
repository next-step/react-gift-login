import PageLayout from '@/components/Layout/PageLayout';
import NavigationBar from '@/components/NavigationBar';
import GiftThemeSection from '@/components/GiftTheme';
import ReceiverSelectBox from './components/RecieverSelectBox';
import Banner from './components/Banner';



function App() {
  return (
    <>
      <NavigationBar />
      <PageLayout>
        <ReceiverSelectBox/>
        <GiftThemeSection/>
        <Banner/>
      </PageLayout>
    </>
  );
}

export default App;
