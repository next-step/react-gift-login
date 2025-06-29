import styled from "@emotion/styled";
import logo from "@/assets/kakao-logo.svg";

const LoginLogoContainer = styled.div({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
});

const LoginLogoImage = styled.img({
  display: "flex",
  width: "88px",
  height: "88px",
  objectFit: "contain",
});

export const LoginLogo = () => {
  return (
    <LoginLogoContainer>
      <LoginLogoImage src={logo} alt="카카오 로고" />
    </LoginLogoContainer>
  );
};
