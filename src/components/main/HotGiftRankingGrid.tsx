import { generateMockArray } from "@/__mock__/generate-mock-array";
import { Button } from "@/components/common";
import styled from "@emotion/styled";
import { useState } from "react";

const HotGiftRankingGridContainer = styled.div(props => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: `${props.theme.spacing2}`,
  rowGap: `${props.theme.spacing6}`,
}));

const HotGiftRankingGridItem = styled.div(props => ({
  backgroundColor: `${props.theme.color.gray[0]}`,
  borderRadius: `${props.theme.spacing3}`,
  cursor: "pointer",
  position: "relative",
}));

const HotGiftRankingImageContainer = styled.img(props => ({
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
  color: `${theme.color.gray[0]}`,
  fontSize: `${theme.typography.label2Bold.fontSize}`,
  fontWeight: `${theme.typography.label2Bold.fontWeight}`,
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
}));

const HotGiftCategoryText = styled.p(props => ({
  fontSize: `${props.theme.typography.label1Regular.fontSize}`,
  fontWeight: `${props.theme.typography.label1Regular.fontWeight}`,
  lineHeight: `${props.theme.typography.label1Regular.lineHeight}`,
  color: `${props.theme.color.gray[500]}`,
}));

const HotGiftProductTitle = styled.p(props => ({
  fontSize: `${props.theme.typography.label1Regular.fontSize}`,
  fontWeight: `${props.theme.typography.label1Regular.fontWeight}`,
  color: `${props.theme.color.gray[900]}`,
  marginBottom: `${props.theme.spacing2}`,
}));

const HotGiftPriceText = styled.p(props => ({
  fontSize: `${props.theme.typography.title2Bold.fontSize}`,
  fontWeight: `${props.theme.typography.title2Bold.fontWeight}`,
  color: `${props.theme.color.gray[900]}`,
}));

const ButtonContainer = styled.div(props => ({
  display: "flex",
  justifyContent: "center",
  padding: `${props.theme.spacing8} 0 ${props.theme.spacing10} 0`,
}));

const RANK_CORRECTION_NUMBER = 1;

export const HotGiftRankingGrid = () => {
  const [showMore, setShowMore] = useState(false);
  const INITIAL_SHOW_COUNT = 6;
  const mockData = generateMockArray();

  const displayedItems = showMore
    ? mockData
    : mockData.slice(0, INITIAL_SHOW_COUNT);

  return (
    <>
      <HotGiftRankingGridContainer>
        {displayedItems.map((item, index) => (
          <HotGiftRankingGridItem key={item.id}>
            <HotGiftRankingImageContainer
              src={item.imageURL}
            ></HotGiftRankingImageContainer>
            <RankBadge rank={index + RANK_CORRECTION_NUMBER}>
              {index + RANK_CORRECTION_NUMBER}
            </RankBadge>
            <HotGiftCategoryText>{item.brandInfo.name}</HotGiftCategoryText>
            <HotGiftProductTitle>{item.name}</HotGiftProductTitle>
            <HotGiftPriceText>{item.price.basicPrice}원</HotGiftPriceText>
          </HotGiftRankingGridItem>
        ))}
      </HotGiftRankingGridContainer>

      {!showMore && mockData.length > INITIAL_SHOW_COUNT && (
        <ButtonContainer>
          <Button
            variant="secondary"
            size="medium"
            width="75%"
            onClick={() => setShowMore(true)}
          >
            더보기
          </Button>
        </ButtonContainer>
      )}

      {showMore && (
        <ButtonContainer>
          <Button
            variant="secondary"
            size="medium"
            width="75%"
            onClick={() => setShowMore(true)}
          >
            더보기
          </Button>
        </ButtonContainer>
      )}
    </>
  );
};
