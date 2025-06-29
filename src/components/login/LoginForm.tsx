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

const LoginInput = styled.input(props => ({
  width: "100%",
  padding: `${props.theme.spacing2} 0`,
  fontSize: `${props.theme.typography.label1Regular.fontSize}`,
  lineHeight: `${props.theme.typography.label1Regular.lineHeight}`,
  fontWeight: `${props.theme.typography.label1Regular.fontWeight}`,
  border: "none",
  borderBottom: "1px solid  rgb(220, 222, 227)",
  outline: "none",
  backgroundColor: "transparent",
  transition: "border-bottom-color 0.2s ease",

  "&::placeholder": {
    color: "#999",
    fontSize: "14px",
  },

  "&:focus": {
    borderBottomColor: "#000",
  },
}));

export const LoginForm = () => {
  return (
    <LoginFormContainer>
      <LoginInputWrapper>
        <LoginInput placeholder="이메일" type="email" />
      </LoginInputWrapper>

      <LoginInputWrapper>
        <LoginInput placeholder="비밀번호" type="password" />
      </LoginInputWrapper>
      <LoginButton />
    </LoginFormContainer>
  );
};
