import type { CategoryType } from "@/types";
import styled from "@emotion/styled";

const ThemeItemContainer = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  rowGap: `${props.theme.spacing1}`,
  cursor: "pointer",
}));

const ThemeItemImage = styled.img({
  width: "50px",
  height: "50px",
  objectFit: "contain",
});

const ThemeItemTitle = styled.p(props => ({
  fontSize: `${props.theme.typography.label2Regular.fontSize}`,
  lineHeight: `${props.theme.typography.label2Regular.lineHeight}`,
  fontWeight: `${props.theme.typography.label2Regular.fontWeight}`,
  color: `${props.theme.color.gray[900]}`,
}));

export const ThemeItem = ({ image, name }: CategoryType) => {
  return (
    <ThemeItemContainer>
      <ThemeItemImage src={image} />
      <ThemeItemTitle>{name}</ThemeItemTitle>
    </ThemeItemContainer>
  );
};
