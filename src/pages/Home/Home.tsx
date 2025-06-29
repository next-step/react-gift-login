import Navigation from '../../components/Navigation/Navigation';
import FriendSelector from '../../components/FriendSelector/FriendSelector';
import CategorySection from '../../components/CategorySection/CategorySection';
import MessageSection from '../../components/MessageSection/MessageSection';
import RankingSection from '../../components/RankingSection/RankingSection';

const Home = () => (
  <>
    <Navigation />
    <FriendSelector />
    <CategorySection />
    <MessageSection />
    <RankingSection />
  </>
);

export default Home;
