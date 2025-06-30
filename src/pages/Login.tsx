import styled from '@emotion/styled';
import { useLoginForm } from '../hooks/useLoginForm';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/common/NavigationBar';
import Input from '@/common/Input';
import LoginButton from '@/components/login/LoginButton';

const LoginForm = () => {
  const { id, setId, password, setPassword } = useLoginForm();
  const navigate = useNavigate();

  const LoginRedirect = () => {
    navigate('/');
  };

  return (
    <Layout>
      <NavigationBar />
      <Logo>kakao</Logo>

      <Input
        placeholder="이메일"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton onClick={LoginRedirect} />
    </Layout>
  );
};

export default LoginForm;
const Logo = styled.div`
  font-size: 40px;
  margin-bottom: 40px;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;
