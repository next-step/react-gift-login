import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { MobileLayout, Main } from '@/components/layout';
import { NavigationBar } from '@/components/navigation';
import { HomePage, LoginPage } from '@/pages';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const getNavigationConfig = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: '선물하기',
          showBackButton: true,
          showProfileButton: true,
        };
      case '/login':
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
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/login');
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

      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Main>
    </MobileLayout>
  );
}

export default App;
