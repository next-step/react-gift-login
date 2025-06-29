import { category } from "@/__mock__";
import { ThemeItem } from "@/components/main";
import styled from "@emotion/styled";

const PresentSectionPadding = styled.div({
  width: "100%",
  height: "24px",
  backgroundColor: "white",
});

const PresentSectionContainer = styled.section(props => ({
  width: "100%",
  height: "313px",
  padding: `${props.theme.spacing2}`,
  backgroundColor: "white",
}));

const PresentSectionTitleWrapper = styled.div(props => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `0 ${props.theme.spacing2} ${props.theme.spacing5}`,
}));

const PresentSectionTitle = styled.h3(props => ({
  fontSize: `${props.theme.typography.title1Bold.fontSize}`,
  fontWeight: `${props.theme.typography.title1Bold.fontWeight}`,
  lineHeight: `${props.theme.typography.title1Bold.lineHeight}`,
  color: `${props.theme.color.gray[900]}`,
}));

const PresentSectionGridContainer = styled.div(props => ({
  display: "grid",
  gridTemplateRows: "repeat(3,1fr)",
  gridTemplateColumns: "repeat(5,1fr)",
  gap: `${props.theme.spacing1}`,
  rowGap: `${props.theme.spacing5}`,
}));

export const PresentTheme = () => {
  const categories = category;
  return (
    <>
      <PresentSectionPadding />
      <PresentSectionContainer>
        <PresentSectionTitleWrapper>
          <PresentSectionTitle>선물 테마</PresentSectionTitle>
        </PresentSectionTitleWrapper>
        <PresentSectionGridContainer>
          {categories.map(category => (
            <ThemeItem key={category.themeId} {...category} />
          ))}
        </PresentSectionGridContainer>
      </PresentSectionContainer>
      <PresentSectionPadding />
    </>
  );
};
