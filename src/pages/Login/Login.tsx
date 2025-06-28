import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header';
import { Container, InputWrapper, LoginButton, LogoImg, StyledInput } from '@/pages/Login/Login.styles';
import { KAKAO_LOGO_SVG                                                                                                  } from "@/assets/svg/kakaoLogo";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    const fallback = location.state?.from || '/';
    navigate(fallback);
  }

  return (
    <div>
      <Header />
      <Container>
        <LogoImg
          src={KAKAO_LOGO_SVG}
          alt="kakao-logo"
        />
        <InputWrapper>
          <StyledInput type="text" placeholder="이메일" />
          <StyledInput type="password" placeholder="비밀번호" />
        </InputWrapper>
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </Container>
    </div>
  );
};

export default Login;
