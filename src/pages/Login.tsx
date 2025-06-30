import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { spaces, colors, fontSizes } from '@/tokens/designTokens';
import KakaoLogo from '@/assets/kakao-logo.svg';

const Wrap = styled.div`
  max-width: 720px;
  margin: 4rem auto;
  padding: ${spaces.md};
  text-align: center;
`;


const Logo = styled.img`
  display: block;               
  margin: 0 auto ${spaces.lg};
  width: 100px;
  height: auto;   
`;

const Input = styled.input`
  width: 80%;
  padding: ${spaces.sm} 0;
  margin-bottom: ${spaces.md};
  font-size: ${fontSizes.body};
  border: none;
  border-bottom: 1px solid ${colors.surface};
  background: transparent;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${colors.text};
  }
`;

const Button = styled.button`
  width: 80%;
  padding: ${spaces.sm};
  background: ${colors.KakaoMain};
  color: ${colors.text};
  font-size: ${fontSizes.body};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: ${spaces.md};

  &:hover {
    opacity: 0.9;
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from || '/';

  const handleLogin = () => {

    navigate(from, { replace: true });
  };

  return (
    <Wrap>
      <Logo src={KakaoLogo} alt="kakao" />
      <Input type="text" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
      <Button onClick={handleLogin}>로그인</Button>
    </Wrap>
  );
}