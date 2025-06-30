import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { NavigationHeader } from '@/components/NavigationHeader';
import { LoginForm } from '@/components/LoginForm';
import { theme } from '@/styles/theme';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.gray200};
  display: flex;
  justify-content: center;
  padding: 0 ${theme.spacing.spacing4};

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const MobileViewport = styled.div`
  width: 100%;
  max-width: 720px;
  min-height: 100vh;
  background: ${theme.colors.default};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    box-shadow: none;
  }
`;

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    // 이전 페이지로 이동하거나 홈으로 이동
    const from = location.state?.from || '/';
    navigate(from);
  };

  const handleLogin = (_email: string, _password: string) => {
    // 이전 페이지가 있으면 그곳으로, 없으면 홈으로
    const from = location.state?.from || '/';
    navigate(from, { replace: true });
  };

  return (
    <AppContainer>
      <MobileViewport>
        <NavigationHeader title="선물하기" onBackClick={handleBackClick} />
        <LoginForm onSubmit={handleLogin} />
      </MobileViewport>
    </AppContainer>
  );
}
