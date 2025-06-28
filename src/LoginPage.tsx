import styled from "@emotion/styled";
import KakaoLogo from "@/assets/kakaologo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LogoImage = styled.img`
  width: 88px;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

const Input = styled.input`
  ${({ theme }) => theme.typography.body.body1Regular};
  width: 100%;
  max-width: 320px;
  padding: 12px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.semantic.borderDefault};
  &::placeholder {
    color: ${({ theme }) => theme.color.gray.gray700};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.gray.gray700};
  }
`;

const Button = styled.button`
  ${({ theme }) => theme.typography.body.body2Regular};
  width: 100%;
  max-width: 320px;
  padding: 12px;
  background-color: ${({ theme }) => theme.color.semantic.kakaoYellow};
  color: #000;
  border: none;
  border-radius: 6px;
  margin-top: ${({ theme }) => theme.spacing.spacing9};
  cursor: pointer;

  &:active {
    background-color: ${({ theme }) => theme.color.semantic.kakaoYellowPressed};
    border: none;
  }
`;

export default function LoginPage() {
  return (
    <Container>
      <LogoImage src={KakaoLogo} alt="kakao logo" />
      <Input type="email" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
      <Button>로그인</Button>
    </Container>
  );
}
