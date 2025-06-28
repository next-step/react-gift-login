import { useState } from 'react';
import { productList } from '@/data/productList';
import {
  BrandName, Card, CategoryFilter, FilterButton, ImageWrapper,
  MoreButton, Grid, Section, Title,
  Price,
  ProductImage,
  ProductName, RankBadge, SortOptions, SortSpan,
} from '@/components/GiftRanking/GiftRanking.styles';
import { categories } from "@/constants/RankingCategories";

export default function GiftRanking() {
  const [showCount, setShowCount] = useState(6); // 초기에 6개 보여줌
  const [category, setCategory] = useState("전체");
  const [sort, setSort] = useState("받고 싶어한");

  const handleToggle = () => {
    setShowCount(prev => (prev === 6 ? 21 : 6));
  };

  const expandedList = Array(21).fill(productList[0]);

  const sorts = ['받고 싶어한', '많이 선물한', '위시로 받은'];

  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>
      <CategoryFilter>
        {categories.map(({ label, icon }) => (
          <FilterButton
            key={label}
            isActive={category === label}
            onClick={() => setCategory(label)}
          >
            <div>{icon}</div>
            <p>{label}</p>
          </FilterButton>
        ))}
      </CategoryFilter>
      <SortOptions>
        {sorts.map(option => (
          <SortSpan
            key={option}
            isActive={sort === option}
            onClick={() => setSort(option)}
          >
            {option}
          </SortSpan>
        ))}
      </SortOptions>
      <Grid>
        {expandedList.slice(0, showCount).map((item, index) => (
          <Card key={index}>
            <ImageWrapper>
              <RankBadge rank={index + 1}>{index + 1}</RankBadge>
              <ProductImage src={item.imageURL} alt={item.name} />
            </ImageWrapper>
            <BrandName>BBQ</BrandName>
            <ProductName>{item.name}</ProductName>
            <Price>29,000원</Price>
          </Card>
        ))}
      </Grid>
      <MoreButton onClick={handleToggle}>
        {showCount === 6 ? '더보기' : '접기'}
      </MoreButton>
    </Section>
  );
}