import { generateMockArray } from "@/__mock__/generate-mock-array";
import styled from "@emotion/styled";
import { useState } from "react";

const GridContainer = styled.div(props => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: `${props.theme.spacing2}`,
  rowGap: `${props.theme.spacing6}`,
}));

const GridItem = styled.div(props => ({
  backgroundColor: "white",
  borderRadius: `${props.theme.spacing3}`,
  cursor: "pointer",
  position: "relative",
}));

const ImageContainer = styled.img(props => ({
  width: "100%",
  height: "224px",
  display: "flex",
  borderRadius: "4px",
  marginBottom: `${props.theme.spacing3}`,
  alignItems: "center",
  justifyContent: "center",
}));

const RankBadge = styled.div<{ rank: number }>(({ theme, rank }) => ({
  position: "absolute",
  top: `${theme.spacing1}`,
  left: `${theme.spacing1}`,
  width: "20px",
  height: "20px",
  backgroundColor: rank <= 3 ? theme.color.red[600] : theme.color.gray[600],
  color: "white",
  fontSize: `${theme.typography.label2Bold.fontSize}`,
  fontWeight: `${theme.typography.label2Bold.fontWeight}`,
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
}));

const CategoryText = styled.p(props => ({
  fontSize: `${props.theme.typography.label1Regular.fontSize}`,
  fontWeight: `${props.theme.typography.label1Regular.fontWeight}`,
  lineHeight: `${props.theme.typography.label1Regular.lineHeight}`,
  color: `${props.theme.color.gray[500]}`,
}));

const ProductTitle = styled.p(props => ({
  fontSize: `${props.theme.typography.label1Regular.fontSize}`,
  fontWeight: `${props.theme.typography.label1Regular.fontWeight}`,
  color: `${props.theme.color.gray[900]}`,
  marginBottom: `${props.theme.spacing2}`,
}));

const PriceText = styled.p(props => ({
  fontSize: `${props.theme.typography.title2Bold.fontSize}`,
  fontWeight: `${props.theme.typography.title2Bold.fontWeight}`,
  color: `${props.theme.color.gray[900]}`,
}));

const MoreButton = styled.button(props => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "75%",
  padding: `${props.theme.spacing4} ${props.theme.spacing6}`,
  backgroundColor: "white",
  color: `${props.theme.color.gray[900]}`,
  fontSize: `${props.theme.typography.label1Bold.fontSize}`,
  fontWeight: `${props.theme.typography.label1Bold.fontWeight}`,
  border: "1px solid rgb(220,222,227)",
  borderRadius: `${props.theme.spacing2}`,
  cursor: "pointer",
  transition: "all 0.2s ease",
}));

const ButtonContainer = styled.div(props => ({
  display: "flex",
  justifyContent: "center",
  padding: `${props.theme.spacing8} 0 ${props.theme.spacing10} 0`,
}));

const RANK_CORRECTION_NUMBER = 1;
const HotGiftRankingGrid = () => {
  const [showMore, setShowMore] = useState(false);
  const INITIAL_SHOW_COUNT = 6;
  const mockData = generateMockArray();

  const displayedItems = showMore
    ? mockData
    : mockData.slice(0, INITIAL_SHOW_COUNT);

  return (
    <>
      <GridContainer>
        {displayedItems.map((item, index) => (
          <GridItem key={item.id}>
            <ImageContainer src={item.imageURL}></ImageContainer>
            <RankBadge rank={index + RANK_CORRECTION_NUMBER}>
              {index + RANK_CORRECTION_NUMBER}
            </RankBadge>
            <CategoryText>{item.brandInfo.name}</CategoryText>
            <ProductTitle>{item.name}</ProductTitle>
            <PriceText>{item.price.basicPrice}원</PriceText>
          </GridItem>
        ))}
      </GridContainer>

      {!showMore && mockData.length > INITIAL_SHOW_COUNT && (
        <ButtonContainer>
          <MoreButton onClick={() => setShowMore(true)}>더보기</MoreButton>
        </ButtonContainer>
      )}

      {showMore && (
        <ButtonContainer>
          <MoreButton onClick={() => setShowMore(false)}>접기</MoreButton>
        </ButtonContainer>
      )}
    </>
  );
};

export default HotGiftRankingGrid;
