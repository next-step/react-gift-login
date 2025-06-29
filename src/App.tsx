import { useState } from 'react';
import { MobileLayout, Main } from '@/components/layout';
import { NavigationBar } from '@/components/navigation';
import { HomePage, LoginPage } from '@/pages';

type PageType = 'home' | 'login';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // 페이지별 네비게이션 설정
  const getNavigationConfig = () => {
    switch (currentPage) {
      case 'home':
        return {
          title: '선물하기',
          showBackButton: true, // 메인 페이지에서도 뒤로가기 표시
          showProfileButton: true,
        };
      case 'login':
        return {
          title: '로그인',
          showBackButton: true,
          showProfileButton: false, // 로그인 페이지에서는 프로필 버튼 숨김
        };
      default:
        return {
          title: '카카오 선물하기',
          showBackButton: true,
          showProfileButton: true,
        };
    }
  };

  const navConfig = getNavigationConfig();

  // 네비게이션 핸들러들
  const handleBackClick = () => {
    setCurrentPage('home'); // 뒤로가기는 항상 홈으로
  };

  const handleProfileClick = () => {
    setCurrentPage('login'); // 프로필 클릭시 로그인 페이지로
  };

  // 페이지 렌더링
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'login':
        return <LoginPage onLoginSuccess={() => setCurrentPage('home')} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <MobileLayout>
      <NavigationBar
        title={navConfig.title}
        showBackButton={navConfig.showBackButton}
        showProfileButton={navConfig.showProfileButton}
        onBackClick={handleBackClick}
        onProfileClick={handleProfileClick}
      />

      <Main>{renderCurrentPage()}</Main>
    </MobileLayout>
  );
}

export default App;
