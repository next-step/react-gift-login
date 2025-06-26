import React from 'react';
import styled from '@emotion/styled';
import CategoryItem from './CategoryItem';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 가로 5칸 */
  grid-template-rows: repeat(3, 1fr);    /* 세로 3칸 */
  gap: ${props => props.theme.spacing.spacing2};
  width: 100%;
  
  /* 작은 화면에서 간격 조정 */
  @media (max-width: 480px) {
    gap: ${props => props.theme.spacing.spacing1};
  }
`;

export interface CategoryData {
  themeId: number;
  name: string;
  image: string;
}

interface CategoryGridProps {
  categories: CategoryData[];
  onCategoryClick?: (category: CategoryData) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ 
  categories, 
  onCategoryClick 
}) => {
  // 15개 아이템으로 제한 (5x3 그리드에 맞춤)
  const displayCategories = categories.slice(0, 15);

  return (
    <GridWrapper>
      {displayCategories.map((category) => (
        <CategoryItem
          key={category.themeId}
          icon={category.image}
          label={category.name}
          onClick={() => onCategoryClick?.(category)}
        />
      ))}
    </GridWrapper>
  );
};

export default CategoryGrid; 