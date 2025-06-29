import GlobalStyles from '@/GlobalStyles';
import Navibar from '@/Navibar';
import GiftThemeSection from '@/GiftThemeSection';
import Banner from '@/Banner';
import GiftRanking from '@/GiftRanking';
import SelectFr from '@/SelectFr';

function App() {
  return (
    <>
      <GlobalStyles/>
      <Navibar/>
      <SelectFr/>
      <GiftThemeSection />
      <Banner/>
      <GiftRanking/>
    </>
  )
}

export default App
