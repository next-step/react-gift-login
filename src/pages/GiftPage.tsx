import styled from '@emotion/styled';
import { colors } from '@/styles/tokens';
import { Header } from '@/components/Header/Header';
import { CategoryGrid } from '@/components/CategoryGrid/CategoryGrid';
import { categories } from '@/mock/mockData';

const AppContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  background-color: ${colors.gray50};
  min-height: 100vh;
`;

export const GiftPage = () => {
  return (
    <AppContainer>
      <Header
        title="선물하기"
        onBackClick={() => console.log('뒤로가기 버튼 누름')}
        onProfileClick={() => console.log('프로필 버튼 누름')}
      />

      <CategoryGrid
        categories={categories}
        onCategoryClick={(category) => console.log('카테고리 클릭', category)}
      />
    </AppContainer>
  );
};
