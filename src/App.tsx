import Header from '@/components/Header';
import CategorySection from '@/components/CategorySection';
import FriendSelectBox from './components/FriendSelectBox';
import SupportBanner from './components/SupportBanner';

function App() {
  return (
    <div>
      <Header />
      <FriendSelectBox/>
      <CategorySection />
      <SupportBanner/>
    </div>
  );
}

export default App;