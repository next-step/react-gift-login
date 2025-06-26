import type { CategoryType } from "@/types";
import styled from "@emotion/styled";

const ItemContainer = styled.div(props => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  rowGap: `${props.theme.spacing1}`,
}));

const ItemImage = styled.img({
  width: "50px",
  height: "50px",
  objectFit: "contain",
});

const ItemTitle = styled.p(props => ({
  fontSize: `${props.theme.typography.label2Regular.fontSize}`,
  lineHeight: `${props.theme.typography.label2Regular.lineHeight}`,
  fontWeight: `${props.theme.typography.label2Regular.fontWeight}`,
  color: `${props.theme.color.gray[900]}`,
}));

const ThemeItem = ({ image, name }: CategoryType) => {
  return (
    <ItemContainer>
      <ItemImage src={image} />
      <ItemTitle>{name}</ItemTitle>
    </ItemContainer>
  );
};

export default ThemeItem;
