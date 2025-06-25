import styled from "@emotion/styled";
import theme from "@src/styles/kakaoTheme";

function LoginPage() {
  return (
    <LoginPageWrapper>
      <InputForm onSubmit={(e) => e.preventDefault()}>
        <h1>Kakao</h1>
        <InputField type="text" placeholder="이메일" />
        <InputField type="password" placeholder="비밀번호" />
        <LoginButton>로그인</LoginButton>
      </InputForm>
    </LoginPageWrapper>
  );
}

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 60%;
`;

const InputField = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
`;

const LoginButton = styled.button`
  border: none;
  background-color: ${theme.colors.yellow.yellow600};
  padding: 20px;
  width: 100%;
`;

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 80vh;
`;

export default LoginPage;
