import React, { useState } from 'react';
import styled from '@emotion/styled';

const mockItem = {
  id: 123,
  name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  imageURL: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  price: 29000,
  brand: 'BBQ',
};
const categoryEmojis: Record<string, string> = {
  전체: 'ALL',
  여성이: '👩',
  남성이: '👨',
  청소년이: '👦',
};


const allItems = Array.from({ length: 21 }, (_, i) => ({
  ...mockItem,
  id: i + 1,
}));

const categoryTabs = ['전체', '여성이', '남성이', '청소년이'];
const sortTabs = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  padding: ${({ theme }) => theme.spacing.spacing11} ${({ theme }) => theme.spacing.spacing5};
`;

const Heading = styled.h2`
  font: ${({ theme }) => theme.typography.title1Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

const TabRow = styled.div`
  display: flex;
  font: ${({ theme }) => theme.typography.label1Regular};
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

const CategoryTab = styled.button<{ isSelected: boolean }>`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
  cursor: pointer;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.semantic.info : theme.colors.semantic.textSub};
`;


const TabCircle = styled.div<{ isSelected: boolean }>`
  background-color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.colors.semantic.info
      : theme.colors.semantic.backgroundDisabled};

  color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.colors.semantic.backgroundDefault
      : theme.colors.semantic.textSub};

  border-radius: ${({ theme }) => theme.spacing.spacing5};
  width: ${({ theme }) => theme.spacing.spacing12};
  height: ${({ theme }) => theme.spacing.spacing12};
  font : ${({ theme }) => theme.typography.label1Bold};
  display: flex;
  align-items: center;
  justify-content: center;
`;


const SortRow = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDisabled};
  padding: ${({ theme }) => theme.spacing.spacing3};
  border-radius: ${({ theme }) => theme.spacing.spacing3};
  display: flex;
  justify-content: space-around;
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

const SortTab = styled.button<{ isSelected: boolean }>`
  all: unset;
  font : ${({ theme }) => theme.typography.label2Bold};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.semantic.info : theme.colors.semantic.textSub};
  cursor: pointer;
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing2};
`;

const Card = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.semantic.backgroundDefault};
`;

const RankBadge = styled.div<{ rank: number }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.spacing1};
  left: ${({ theme }) => theme.spacing.spacing1};
  background: ${({ theme, rank }) =>
    rank <= 3 ? theme.colors.red.red600 : theme.colors.semantic.textSub};
  color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  font: ${({ theme }) => theme.typography.label2Bold};
  padding: 2px 6px;
  border-radius: 6px;
`;


const ProductImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing.spacing1};
`;

const BrandName = styled.div`
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.semantic.textSub};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

const ItemName = styled.div`
  font: ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  margin-top: 2px;
`;

const Price = styled.div`
  font: ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
  margin-top: 2px;
`;

const Button = styled.button`
  margin: ${({ theme }) => theme.spacing.spacing6} auto 0;
  width: 70%;
  padding: ${({ theme }) => theme.spacing.spacing3};
  background: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  border: 1px solid ${({ theme }) => theme.colors.semantic.borderDefault};
  border-radius: ${({ theme }) => theme.spacing.spacing1};
  font: ${({ theme }) => theme.typography.body2Regular};
  cursor: pointer;
  display: block;
`;

const GiftRankingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedSort, setSelectedSort] = useState('받고 싶어한');
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded ? allItems : allItems.slice(0, 6);

  return (
    <Section>
      <Heading>실시간 급상승 선물랭킹</Heading>
      <TabRow>
        {categoryTabs.map((tab) => (
          <CategoryTab
            key={tab}
            isSelected={selectedCategory === tab}
            onClick={() => setSelectedCategory(tab)}
          >
            <TabCircle isSelected={selectedCategory === tab}>
              {categoryEmojis[tab]}
            </TabCircle>
            <span>{tab}</span>
          </CategoryTab>
        ))}
      </TabRow>

      <SortRow>
        {sortTabs.map((tab) => (
          <SortTab
            key={tab}
            isSelected={selectedSort === tab}
            onClick={() => setSelectedSort(tab)}
          >
            {tab}
          </SortTab>

        ))}
      </SortRow>
      <Grid>
        {visibleItems.map((item, index) => (
          <Card key={item.id}>
            <RankBadge rank={index + 1}>{index + 1}</RankBadge>
            <ProductImage src={item.imageURL} alt={item.name} />
            <BrandName>{item.brand}</BrandName>
            <ItemName>{item.name}</ItemName>
            <Price>
              <strong>{item.price.toLocaleString()}</strong> 원
            </Price>
          </Card>
        ))}
      </Grid>

      <Button onClick={() => setExpanded((prev) => !prev)}>
        {expanded ? '접기' : '더보기'}
      </Button>
    </Section>
  );
};
export default GiftRankingSection;

