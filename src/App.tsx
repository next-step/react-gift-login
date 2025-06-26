import GlobalStyle from '@/styles/GlobalStyle';
import Navigation from '@/components/Navigation';
import FriendSelectSection from '@/components/FriendSelectSection';
import CategorySection from './components/CategorySection';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <FriendSelectSection />
      <CategorySection />
    </>
  );
}

export default App;
