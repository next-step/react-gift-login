import { useState } from 'react';
import styled from '@emotion/styled';
import { productList } from '@/data/productList';

export default function Gift_Ranking() {
  const [showCount, setShowCount] = useState(6); // 초기에 6개 보여줌
  const [category, setCategory] = useState("전체");
  const [sort, setSort] = useState("받고 싶어한");

  const handleToggle = () => {
    setShowCount(prev => (prev === 6 ? 21 : 6));
  };

  const expandedList = Array(21).fill(productList[0]);

  const categories = [
    { label: '전체', icon: 'ALL' },
    { label: '여성이', icon: '👩🏻' },
    { label: '남성이', icon: '👨🏻' },
    { label: '청소년이', icon: '👦🏻' },
  ];

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

const Section = styled.section`
    padding: 20px;
    background-color: #fff;
`;

const Title = styled.h2`
    margin: 20px 0 20px 12px;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 16px;
`;

const CategoryFilter = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 12px 20px 12px;
`;

const FilterButton = styled.button<{ isActive: boolean }>`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 10px 0;
    background-color: #fff;
    border: none;
    border-radius: 16px;
    cursor: pointer;

    font-size: 13px;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};

    div {
        font-size: 14px;
        width: 44px;
        height: 44px;
        border-radius: 16px;
        padding: 20px;
        background-color: ${({ isActive }) => (isActive ? '#217cf9' : '#eaf3ff')};
        color: ${({ isActive }) => (isActive ? '#fff' : '#aacefd')};
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    p {
        color: ${({ isActive }) => (isActive ? '#217cf9' : '#c9c9c9')};
    }

    transition: background-color 0.2s ease, color 0.2s ease;
`;

const SortOptions = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0;
    margin: 0 auto 20px;
    background-color: #f2f7ff;
    padding: 10px 0;
    border-radius: 12px;
    max-width: 688px;
    height: 50px;
    text-align: center;
`;

const SortSpan = styled.span<{ isActive: boolean }>`
    flex: 1;
    font-size: 14px;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
    color: ${({ isActive }) => (isActive ? '#217cf9' : '#a0bfe9')};
    cursor: pointer;
    transition: color 0.2s ease;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
`;

const Card = styled.div`
    background: #fff;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 12px;
`;

const ImageWrapper = styled.div`
    position: relative;
`

const RankBadge = styled.div<{ rank: number }>`
    position: absolute;
    top: 8px;
    left: 8px;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: bold;
    color: white;
    background-color: ${({ rank }) => (rank <= 3 ? '#ff4b4b' : '#c0c0c0')};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

const ProductImage = styled.img`
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    aspect-ratio: 1;
`;

const BrandName = styled.div`
    margin-top: 8px;
    font-size: 13px;
    color: #888;
`;

const ProductName = styled.div`
    margin-top: 4px;
    font-size: 15px;
    font-weight: 500;
    color: #333;
`;

const Price = styled.div`
    margin-top: 6px;
    font-size: 15px;
    font-weight: bold;
    color: #000;
`;


const MoreButton = styled.button`
    width: 480px;
    height: 45px;
    display: block;
    margin: 20px auto 0;
    padding: 8px 24px;
    background-color: #fff;
    border: 1px solid #c0c0c0;
    border-radius: 12px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
`;
