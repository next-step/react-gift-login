import styled from '@emotion/styled';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';

type CategoryType = '전체' | '여성이' | '남성이' | '청소년이';
type SortType = '받고 싶어한' | '많이 선물한' | '위시로 받은';

const GiftChart: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>('전체');
  const [selectedSort, setSelectedSort] = useState<SortType>('받고 싶어한');

  const categories: CategoryType[] = ['전체', '여성이', '남성이', '청소년이'];
  const sortOptions: SortType[] = ['받고 싶어한', '많이 선물한', '위시로 받은'];

  const handleCategoryClick = (category: CategoryType): void => {
    setSelectedCategory(category);
  };

  const handleSortClick = (sort: SortType): void => {
    setSelectedSort(sort);
  };

  return (
    <Layout>
      <TitleText>실시간 급상승 선물랭킹</TitleText>

      <CategoryContainer>
        {categories.map((category) => (
          <CategoryBox
            key={category}
            isSelected={selectedCategory === category}
            onClick={() => handleCategoryClick(category)}
          >
            <CategoryText isSelected={selectedCategory === category}>
              {category}
            </CategoryText>
          </CategoryBox>
        ))}
      </CategoryContainer>

      <SortContainer>
        {sortOptions.map((option) => (
          <SortOption
            key={option}
            isSelected={selectedSort === option}
            onClick={() => handleSortClick(option)}
          >
            {option}
          </SortOption>
        ))}
      </SortContainer>
      <ProductItem>
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </ProductItem>
    </Layout>
  );
};

export default GiftChart;

const Layout = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing6};
`;

const TitleText = styled.h2`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle2Bold.fontWeight};
  margin-bottom: ${({ theme }) => theme.spacing.spacing7};
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.spacing7};
`;

interface CategoryBoxProps {
  isSelected: boolean;
}

const CategoryBox = styled.div<CategoryBoxProps>`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.spacing.spacing4};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue700 : theme.colors.blue100};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

interface CategoryTextProps {
  isSelected: boolean;
}

const CategoryText = styled.span<CategoryTextProps>`
  font-size: 12px;
  font-weight: 500;
  color: ${({ isSelected, theme }) =>
    isSelected ? 'white' : theme.colors.gray700};
`;

const SortContainer = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 24px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.blue200};
  border-radius: ${({ theme }) => theme.spacing.spacing2};
  background-color: ${({ theme }) => theme.colors.blue100};
`;

interface SortOptionProps {
  isSelected: boolean;
}

const SortOption = styled.div<SortOptionProps>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue800 : theme.colors.blue400};
  cursor: pointer;
`;
const ProductItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.spacing3};
  margin-top: ${({ theme }) => theme.spacing.spacing4};
`;
