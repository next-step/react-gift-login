import PageLayout from '@/components/Layout/PageLayout';
import NavigationBar from '@/components/NavigationBar';
import GiftThemeSection from '@/components/GiftTheme';



function App() {
  return (
    <>
      <NavigationBar />
      <PageLayout>
        <GiftThemeSection/>
      </PageLayout>
    </>
  );
}

export default App;
