import { Link } from 'react-router-dom';
import Header from '@/components/Header/Header.tsx';
import { Container, InputWrapper, LoginButton, LogoImg, StyledInput } from '@/pages/Login/Login.styles.ts';
import { KAKAO_LOGO_SVG } from "@/assets/svg/kakaoLogo.ts";

const Login = () => {
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
        <LoginButton>
          <Link to="/">로그인</Link>
        </LoginButton>
      </Container>
    </div>
  );
};

export default Login;
