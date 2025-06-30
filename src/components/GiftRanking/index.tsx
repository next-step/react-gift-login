import React, { useState } from 'react';
import {
  Section,
  Heading,
  TabRow,
  CategoryTab,
  TabCircle,
  SortRow,
  SortTab,
  Grid,
  Card,
  RankBadge,
  ProductImage,
  BrandName,
  ItemName,
  Price,
  Button,
} from './styles';

const categoryTabs = ['전체', '여성이', '남성이', '청소년이'] as const;
const sortTabs = ['받고 싶어한', '많이 선물한', '위시로 받은'] as const;

type Category = typeof categoryTabs[number];
type Sort = typeof sortTabs[number];

const categoryEmojis: Record<Category, string> = {
  전체: 'ALL',
  여성이: '👩',
  남성이: '👨',
  청소년이: '👦',
};

const mockItem = {
  id: 123,
  name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  imageURL: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  price: 29000,
  brand: 'BBQ',
};

const allItems = Array.from({ length: 21 }, (_, i) => ({
  ...mockItem,
  id: i + 1,
}));

const GiftRankingSection = () => {
  const getInitialCategory = (): Category => {
    const stored = localStorage.getItem('selectedCategory');
    return categoryTabs.includes(stored as Category) ? (stored as Category) : '전체';
  };

  const getInitialSort = (): Sort => {
    const stored = localStorage.getItem('selectedSort');
    return sortTabs.includes(stored as Sort) ? (stored as Sort) : '받고 싶어한';
  };

  const [selectedCategory, setSelectedCategory] = useState<Category>(getInitialCategory);
  const [selectedSort, setSelectedSort] = useState<Sort>(getInitialSort);
  const [expanded, setExpanded] = useState(false);

  const handleCategoryChange = (tab: Category) => {
    setSelectedCategory(tab);
    localStorage.setItem('selectedCategory', tab);
  };
  const handleSortChange = (tab: Sort) => {
    setSelectedSort(tab);
    localStorage.setItem('selectedSort', tab);
  };

  const visibleItems = expanded ? allItems : allItems.slice(0, 6);

  return (
    <Section>
      <Heading>실시간 급상승 선물랭킹</Heading>

      <TabRow>
        {categoryTabs.map((tab) => (
          <CategoryTab
            key={tab}
            isSelected={selectedCategory === tab}
            onClick={() => handleCategoryChange(tab)}
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
            onClick={() => handleSortChange(tab)}
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
