import styled from '@emotion/styled';
import NavigationBar from '@/components/common/NavigationBar';
import CategorySection from '@/components/home/CategorySection';
import FriendSelectSection from '@/components/home/FriendSelectSection';
import BannerSection from '@/components/home/BannerSection';
import GiftRankingGrid from '@/components/GiftRanking/GiftRankingGrid';


function App() {
  return (
    <AppContainer>
      <AppInner>
        <NavigationBar />
        <FriendSelectSection />
        <CategorySection />
        <BannerSection />
        <GiftRankingGrid />
      </AppInner>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray100};
  min-height: 100vh;
`;

const AppInner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.gray00};
  min-height: 100vh;
`;
