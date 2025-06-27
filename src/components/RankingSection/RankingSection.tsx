import RankingCategory from './RankingCategory';
import RankingTextCategory from './RankingTextCategory';
import RankingItem from './RankingItem';
import styled from '@emotion/styled';
import { mockGiftItems } from '@/mocks/itemListMock';
import { useState } from 'react';

const RankingSection = () => {
  const [showAll, setShowAll] = useState(false);
  const item = mockGiftItems[0];
  const RANK_COUNT = showAll ? 12 : 6;

  const toggleShowAll = () => setShowAll((prev) => !prev);

  return (
    <RankingSectionContainer>
      <RankingSectionTitle>실시간 급상승 선물랭킹</RankingSectionTitle>
      <RankingCategory />
      <RankingTextCategory />
      <RankingGrid>
        {Array.from({ length: RANK_COUNT }).map((_, index) => (
          <RankingItem key={index} item={item} rank={index + 1} />
        ))}
      </RankingGrid>
      <MoreButton onClick={toggleShowAll}>{showAll ? '접기' : '더보기'}</MoreButton>
    </RankingSectionContainer>
  );
};

export default RankingSection;

export const RankingSectionContainer = styled.section`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => ` ${theme.spacing.spacing2}`};
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  margin-top: ${({ theme }) => theme.spacing.spacing2};
`;

export const RankingSectionTitle = styled.p`
  ${({ theme }) => `
    font-size: ${theme.font.title1Bold.size};
    font-weight: ${theme.font.title1Bold.weight};
    line-height: ${theme.font.title1Bold.lineHeight};`}
`;

const RankingGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px 8px;
  margin-top: ${({ theme }) => theme.spacing.spacing2};
`;

const MoreButton = styled.button`
  margin: ${({ theme }) => theme.spacing.spacing3} auto 0;
  width: 100%;
  display: block;
  font-weight: bold;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  color: ${({ theme }) => theme.colors.gray700};
  cursor: pointer;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray500};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
    border: 1px solid ${({ theme }) => theme.colors.gray500};
  }

  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;
