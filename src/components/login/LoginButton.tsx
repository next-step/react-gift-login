import styled from "@emotion/styled";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const StyledLoginButton = styled.button(props => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  borderRadius: "4px",
  height: "44px",
  justifyContent: "center",
  marginTop: `${props.theme.spacing11}`,
  backgroundColor: `${props.theme.color.yellow[600]}`,
  color: `${props.theme.color.gray[900]}`,
  fontSize: `${props.theme.typography.label1Regular.fontSize}`,
  fontWeight: `${props.theme.typography.label1Regular.fontWeight}`,
  lineHeight: `${props.theme.typography.label1Regular.lineHeight}`,
}));
export const LoginButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const handleLoginSuccess = () => {
    const previousPage = location.state?.from;
    const redirectPath = previousPage || searchParams.get("redirect") || "/";
    navigate(redirectPath);
  };

  return (
    <StyledLoginButton onClick={handleLoginSuccess}>로그인</StyledLoginButton>
  );
};
