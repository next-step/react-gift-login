import styled from "@emotion/styled";
import notFound from "@/assets/not-found-image.png";
import { useNavigate } from "react-router-dom";

const NotFoundSectionContainer = styled.section({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
});

const NotFoundStyledImage = styled.img(props => ({
  display: "flex",
  width: "150px",
  height: "150px",
  objectFit: "contain",
  padding: `${props.theme.spacing2}`,
}));

const NotFoundTitle = styled.p(props => ({
  fontSize: `${props.theme.typography.title1Bold.fontSize}`,
  fontWeight: `${props.theme.typography.title1Bold.fontWeight}`,
  lineHeight: `${props.theme.typography.title1Bold.lineHeight}`,
  color: `${props.theme.color.gray[900]}`,
  textAlign: "center",
  padding: `${props.theme.spacing2}`,
}));

const NotFoundDescription = styled.p(props => ({
  fontSize: `${props.theme.typography.title2Regular.fontSize}`,
  fontWeight: `${props.theme.typography.title2Regular.fontWeight}`,
  lineHeight: `${props.theme.typography.title2Regular.lineHeight}`,
  color: `${props.theme.color.gray[700]}`,
  padding: `${props.theme.spacing2}`,
}));

const NotFoundRedirectButton = styled.button(props => ({
  display: "flex",
  width: "160px",
  height: "44px",
  alignItems: "center",
  borderRadius: "4px",
  justifyContent: "center",
  backgroundColor: `${props.theme.color.yellow[600]}`,
  color: `${props.theme.color.gray[900]}`,
  fontSize: `${props.theme.typography.label1Regular.fontSize}`,
  fontWeight: `${props.theme.typography.label1Regular.fontWeight}`,
  lineHeight: `${props.theme.typography.label1Regular.lineHeight}`,
  cursor: "pointer",
}));

export const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigateToHome = () => {
    navigate("/");
  };
  return (
    <NotFoundSectionContainer>
      <NotFoundStyledImage src={notFound} alt="페이지를 찾을 수 없습니다" />
      <NotFoundTitle>잘못된 접근입니다.</NotFoundTitle>
      <NotFoundDescription>
        찾으시는 페이지가 존재하지 않습니다.
      </NotFoundDescription>
      <NotFoundRedirectButton onClick={handleNavigateToHome}>
        홈으로
      </NotFoundRedirectButton>
    </NotFoundSectionContainer>
  );
};
