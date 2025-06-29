import { Input } from "@/components/common";
import { LoginButton } from "@/components/login/LoginButton";
import styled from "@emotion/styled";

const LoginFormContainer = styled.section(props => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  maxWidth: "420px",
  padding: `${props.theme.spacing4}`,
}));

const LoginInputWrapper = styled.div(props => ({
  width: "100%",
  marginBottom: `${props.theme.spacing4}`,
}));

export const LoginForm = () => {
  return (
    <LoginFormContainer>
      <LoginInputWrapper>
        <Input placeholder="이메일" type="email" />
      </LoginInputWrapper>

      <LoginInputWrapper>
        <Input placeholder="비밀번호" type="password" />
      </LoginInputWrapper>
      <LoginButton />
    </LoginFormContainer>
  );
};
