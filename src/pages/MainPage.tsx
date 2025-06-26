import styled from '@emotion/styled';
import Header from '@/components/Header';
import FriendSelectBox from '@/components/FriendSelectBox';
import CategoryList from '@/components/CategoryList';
import NoticeBanner from '@/components/NoticeBanner';
import RankingFilter from '@/components/RankingFilter';
import ProductList from '@/components/ProductList';

const Container = styled.div`
  max-width: 720px;
  background: green;
  min-height: 100vh;
`;

function MainPage() {
  return (
    <Container>
      <Header />
      <FriendSelectBox />
      <CategoryList />
      <NoticeBanner />
      <RankingFilter />
      <ProductList />
    </Container>
  );
}

export default MainPage;
