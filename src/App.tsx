import { useState } from 'react';
import { MobileLayout, Main } from '@/components/layout';
import { NavigationBar } from '@/components/navigation';
import { HomePage, LoginPage } from '@/pages';

type PageType = 'home' | 'login';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const getNavigationConfig = () => {
    switch (currentPage) {
      case 'home':
        return {
          title: '선물하기',
          showBackButton: true,
          showProfileButton: true,
        };
      case 'login':
        return {
          title: '로그인',
          showBackButton: true,
          showProfileButton: false,
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

  const handleBackClick = () => {
    setCurrentPage('home');
  };

  const handleProfileClick = () => {
    setCurrentPage('login');
  };

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
