import { NavigationHeader } from '@/components/NavigationHeader';
import { FriendSelector } from '@/components/FriendSelector';
import { GiftCategoryGrid } from '@/components/GiftCategoryGrid';
import { PromotionBanner } from '@/components/PromotionBanner';
import { RealTimeRanking } from '@/components/RealTimeRanking';
import { giftThemes, rankingProducts } from '@/data/mockData';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import type { GiftTheme } from '@/types';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.gray200};
  display: flex;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    padding: 0 24px;
  }
`;

const MobileViewport = styled.div`
  width: 100%;
  max-width: 720px;
  min-height: 100vh;
  background: ${theme.colors.fill};
  position: relative;

  @media (min-width: ${theme.breakpoints.desktop}px) {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
  }
`;

export default function MainPage() {
  const handleBackClick = () => {
    console.log('뒤로 가기 클릭');
  };

  const handleProfileClick = () => {
    console.log('프로필 클릭');
  };

  const handleAddFriend = () => {
    console.log('친구 추가 클릭');
  };

  const handleThemeClick = (theme: GiftTheme) => {
    console.log('선택된 테마:', theme);
  };

  return (
    <AppContainer>
      <MobileViewport>
        <NavigationHeader
          title="선물하기"
          onBackClick={handleBackClick}
          onProfileClick={handleProfileClick}
        />

        <FriendSelector onAddFriend={handleAddFriend} />

        <GiftCategoryGrid themes={giftThemes} onThemeClick={handleThemeClick} />

        <PromotionBanner
          subtitle="카카오테크 캠퍼스 3기 여러분"
          title="프론트엔드 2단계 과제 화이팅!"
        />

        <RealTimeRanking products={rankingProducts} />
      </MobileViewport>
    </AppContainer>
  );
}
