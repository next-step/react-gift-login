import styled from '@emotion/styled';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const GiftRanKingSection = styled.div`
  padding: 0px 16px;
  width: 100%;

`

const BlankSpace = styled.div`
      width: 100%;
    height: 16px;
    background-color: transparent;
`

const Title = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6875rem;
    color: rgb(42, 48, 56);
    margin: 0px;
    width: 100%;
    text-align: left;
`

const CategoryGroup = styled.div`
    border-radius: 1rem;
    background-color: rgb(255, 255, 255);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PeopleGroup = styled.div`
    width: 100%;
    display: flex
;
    -webkit-box-pack: justify;
    justify-content: space-between;
    gap: 8px;
`

const WishGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(70, 132, 233, 0.1);
    background-color: rgb(239, 246, 255);
    border-radius: 0.5rem;
    padding: 12px 16px;
`

interface FilterButtonProps {
  active: boolean;
}

const FilterButton = styled.button<FilterButtonProps>`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#007bff' : '#f0f0f0')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  transition: background-color 0.2s;
`;

const Label = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 20px;
  text-align: center;
`;

const GiftRanking = () => {
  const [params, setParams] = useSearchParams();

  const targetType = params.get('targetType') || 'ALL';
  const rankType = params.get('rankType') || 'MANY_WISH';

  const handleTargetClick = (type: string) => {
    setParams({ targetType: type, rankType });
  };

  const handleRankClick = (type: string) => {
    setParams({ targetType, rankType: type });
  };

  return (
    <GiftRanKingSection>
      <BlankSpace/>
      <Title> 실시간 급상승 선물랭킹 </Title>
      <BlankSpace/>
      <CategoryGroup>
        <PeopleGroup>
          <FilterButton active={targetType === 'ALL'} onClick={() => handleTargetClick('ALL')}>
            <IconWrapper>ALL</IconWrapper>
            <Label>전체</Label>
          </FilterButton>
          <FilterButton active={targetType === 'FEMALE'} onClick={() => handleTargetClick('FEMALE')}>
            <IconWrapper>👩🏻</IconWrapper>
            <Label>여성이</Label>
          </FilterButton>
          <FilterButton active={targetType === 'MALE'} onClick={() => handleTargetClick('MALE')}>
            <IconWrapper>👨🏻</IconWrapper>
            <Label>남성이</Label>
          </FilterButton>
          <FilterButton active={targetType === 'TEEN'} onClick={() => handleTargetClick('TEEN')}>
            <IconWrapper>👦🏻</IconWrapper>
            <Label>청소년이</Label>
          </FilterButton>
        </PeopleGroup>

        <BlankSpace/>
        <WishGroup>
          <FilterButton active={rankType === 'WANT'} onClick={() => handleRankClick('WANT')}>
            받고 싶어한
          </FilterButton>
          <FilterButton active={rankType === 'MANY_GIFT'} onClick={() => handleRankClick('MANY_GIFT')}>
            많이 선물한
          </FilterButton>
          <FilterButton active={rankType === 'MANY_WISH'} onClick={() => handleRankClick('MANY_WISH')}>
            위시로 받은
          </FilterButton>
        </WishGroup>
      </CategoryGroup>
    </GiftRanKingSection>
  );
};

export default GiftRanking;
