import { Gift } from '@/mock/Gift';
import styled from '@emotion/styled';
import React, { useState } from 'react';
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
    display: flex;
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
`

const Label = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  text-align: center;
`

const IconWrapper = styled.div`
  font-size: 20px;
  text-align: center;
`

const ProductDiv = styled.div`
  width: 100%;
`

const ProductGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 8px;
`

const ProductCard = styled.div`
  text-align: center;
  overflow: hidden;
  border-radius: 8px;
`

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
`

const BrandImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 4px auto;
`

const Price = styled.p`
  font-weight: bold;
`

const LoadMoreButtonDiv = styled.button`
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: white;
`
const LoadMoreButton = styled.button`
  max-width: 30rem;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid rgb(220, 222, 227);
`


const GiftRanking = () => {
  const [params, setParams] = useSearchParams();

  const [isExpanded, setIsExpanded] = useState(false);



  const targetType = params.get('targetType') || 'ALL';
  const rankType = params.get('rankType') || 'MANY_WISH';

  const handleTargetClick = (type: string) => {
    setParams({ targetType: type, rankType });
  };

  const handleRankClick = (type: string) => {
    setParams({ targetType, rankType: type });
  };




  const GiftList = Array.from({ length: 12 }, (_, i) => ({
    ...Gift,
    id: i + 1,
  }));


  const visibleCount = isExpanded ? GiftList.length : 6;

  const shownProducts = GiftList.slice(0, visibleCount);

  return (
    <GiftRanKingSection>
      <BlankSpace />
      <Title> 실시간 급상승 선물랭킹 </Title>
      <BlankSpace />
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

        <BlankSpace />
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
      <BlankSpace />
      <ProductDiv>
        <ProductGrid>
          {shownProducts.map((item) => (
            <ProductCard key={item.id}>
              <ProductImage src={item.imageURL} alt={item.name} />
              <BrandImage src={item.brandInfo.imageURL} alt={item.brandInfo.name} />
              <p
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  margin: '6px 0 0',
                }}
                title={item.name}
              >
                {item.name}
              </p>
              <Price>{item.price.sellingPrice.toLocaleString()} 원</Price>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductDiv>

      <BlankSpace />
      <LoadMoreButtonDiv>
      {GiftList.length > 6 && (
        <LoadMoreButton onClick={() => setIsExpanded((prev) => !prev)}>
          {isExpanded ? '접기' : '더보기'}
        </LoadMoreButton>
      )}
      </LoadMoreButtonDiv>

      <BlankSpace />

    </GiftRanKingSection>
    
    
  )
}


export default GiftRanking
