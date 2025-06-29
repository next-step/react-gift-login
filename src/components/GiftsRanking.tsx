import styled from "@emotion/styled";
import GiftPersonType from "./GiftPersonType";
import { personType, presentType } from "@/data/giftType";
import GiftItem from "./GiftItem";
import { gifts } from "@/data/gift";
import { useState } from "react";

const GiftsRanking = () => {
  const [selectedPersonType, setSelectedPersonType] = useState(
    () => personType[0],
  );
  const [selectedPresentType, setSelectedPresentType] = useState(
    () => presentType[0],
  );
  const [showMore, setShowMore] = useState(false);

  const duplicatedMockGifts = Array(21)
    .fill(null)
    .flatMap((_, i) =>
      gifts.map(gift => ({
        ...gift,
        id: gift.id + i,
      })),
    );
  const visibleGifts = showMore
    ? duplicatedMockGifts
    : duplicatedMockGifts.slice(0, 6);

  return (
    <Background>
      <RankingTitle>실시간 급상승 선물랭킹</RankingTitle>
      <GiftPersonTypeFlex>
        {personType.map((type, index) => (
          <GiftPersonType
            key={index}
            icon={type.icon}
            name={type.name}
            selected={selectedPersonType === type}
            onClick={() => setSelectedPersonType(type)}
          />
        ))}
      </GiftPersonTypeFlex>
      <PresentTypeFlex>
        {presentType.map((type, index) => (
          <PresentType
            key={index}
            selected={selectedPresentType === type}
            onClick={() => setSelectedPresentType(type)}
          >
            {type}
          </PresentType>
        ))}
      </PresentTypeFlex>
      <GiftsGrid>
        {visibleGifts.map((gift, index) => (
          <GiftItem
            key={gift.id}
            gift={gift}
            rank={index + 1}
            as="button"
            type="button"
          />
        ))}
      </GiftsGrid>
      <GiftsToggle>
        <GiftsButton onClick={() => setShowMore(!showMore)}>
          {showMore ? "접기" : "더보기"}
        </GiftsButton>
      </GiftsToggle>
    </Background>
  );
};

export default GiftsRanking;

const Background = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;

const RankingTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: 0;
  padding: ${({ theme }) =>
    `${theme.spacing.spacing5} ${theme.spacing.spacing2}`};
`;

const GiftPersonTypeFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing2};
  padding: ${({ theme }) => `${theme.spacing.spacing4} 0`};
`;

const PresentTypeFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue.blue100};
  padding: ${({ theme }) =>
    `${theme.spacing.spacing3} ${theme.spacing.spacing4}`};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.blue.blue300};
`;

const PresentType = styled.p<{ selected: boolean }>`
  width: 100%;
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme, selected }) =>
    selected
      ? theme.typography.body2Bold.fontWeight
      : theme.typography.body2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2Regular.lineHeight};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.blue.blue700 : theme.colors.blue.blue500};
  margin: ${({ theme }) => theme.spacing.spacing0};
  transition:
    color 200ms,
    font-weight 200ms;
  cursor: pointer;
`;

const GiftsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => `${theme.spacing.spacing6} ${theme.spacing.spacing2}`};
  padding: ${({ theme }) => `${theme.spacing.spacing4} 0`};
`;

const GiftsToggle = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GiftsButton = styled.button`
  max-width: 480px;
  width: 100%;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.spacing3};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray.gray400};
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2Regular.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
`;
