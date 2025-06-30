import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import type { Product, TargetFilter, CategoryFilter } from '@/types';
import { GiftProductCard } from './GiftProductCard';

interface RealTimeRankingProps {
  products: Product[];
}

const INITIAL_PRODUCT_COUNT = 6;

const TARGET_FILTER_MAP: Record<TargetFilter, string> = {
  전체: 'ALL',
  여성이: 'FEMALE',
  남성이: 'MALE',
  청소년이: 'TEEN',
};

const CATEGORY_FILTER_MAP: Record<CategoryFilter, string> = {
  '받고 싶어한': 'WANT_TO_RECEIVE',
  '많이 선물한': 'MANY_GIFT',
  '위시로 받은': 'MANY_WISH',
};

const REVERSE_TARGET_MAP: Record<string, TargetFilter> = {
  ALL: '전체',
  FEMALE: '여성이',
  MALE: '남성이',
  TEEN: '청소년이',
};

const REVERSE_CATEGORY_MAP: Record<string, CategoryFilter> = {
  WANT_TO_RECEIVE: '받고 싶어한',
  MANY_GIFT: '많이 선물한',
  MANY_WISH: '위시로 받은',
};

const profileIconMap: Record<TargetFilter, string> = {
  전체: 'ALL',
  여성이: '👩🏻',
  남성이: '👨🏻',
  청소년이: '👦🏻',
};

const getProfileIconText = (filter: TargetFilter) =>
  profileIconMap[filter] || 'ALL';

const Container = styled.div`
  padding: ${theme.spacing.spacing4};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.title1Bold.fontSize};
  font-weight: ${theme.typography.title1Bold.fontWeight};
  line-height: ${theme.typography.title1Bold.lineHeight};
  color: ${theme.colors.textDefault};
  margin: 0 0 ${theme.spacing.spacing4} 0;
`;

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.spacing2};
  margin-bottom: ${theme.spacing.spacing4};
`;

const FilterTab = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.spacing2};
  padding: ${theme.spacing.spacing3};
  border: none;
  border-radius: 12px;
  background: transparent;
  transition: all 0.2s ease;

  &:hover {
    background: ${theme.colors.gray100};
  }
`;

const ProfileIcon = styled.div<{ isActive: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 40%;
  background: ${props =>
    props.isActive ? theme.colors.blue700 : theme.colors.gray300};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.isActive ? 'white' : theme.colors.blue500)};
  position: relative;
`;

const FilterLabel = styled.span<{ isActive: boolean }>`
  font-size: ${theme.typography.label1Regular.fontSize};
  font-weight: ${props =>
    props.isActive
      ? theme.typography.label1Bold.fontWeight
      : theme.typography.label1Regular.fontWeight};
  color: ${props =>
    props.isActive ? theme.colors.blue700 : theme.colors.textDefault};
`;

const SortContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: ${theme.colors.blue200};
  border-radius: 8px;
  padding: ${theme.spacing.spacing2};
  margin-bottom: ${theme.spacing.spacing4};
`;

const SortButton = styled.button<{ isActive: boolean }>`
  background: transparent;
  border: none;
  color: ${props =>
    props.isActive ? theme.colors.blue800 : theme.colors.blue600};
  font-size: ${theme.typography.label1Regular.fontSize};
  font-weight: ${props =>
    props.isActive
      ? theme.typography.body1Bold.fontWeight
      : theme.typography.label1Regular.fontWeight};
  padding: ${theme.spacing.spacing2} ${theme.spacing.spacing3};
  border-radius: 6px;
  transition: all 0.2s ease;
  text-align: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.spacing2};
  margin-bottom: ${theme.spacing.spacing4};
`;

const MoreButton = styled.button`
  width: 70%;
  padding: ${theme.spacing.spacing3};
  border: 1px solid ${theme.colors.borderDefault};
  border-radius: 6px;
  background: ${theme.colors.default};
  color: ${theme.colors.textDefault};
  font-size: ${theme.typography.body1Regular.fontSize};
  transition: all 0.2s ease;
  margin: 0 auto;
  display: block;

  &:hover {
    background: ${theme.colors.gray100};
    border-color: ${theme.colors.gray400};
  }
`;

const targetFilters: TargetFilter[] = ['전체', '여성이', '남성이', '청소년이'];
const categoryFilter: CategoryFilter[] = [
  '받고 싶어한',
  '많이 선물한',
  '위시로 받은',
];

export function RealTimeRanking({ products }: RealTimeRankingProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // URL에서 초기 필터 값 읽기
  const getInitialTargetFilter = (): TargetFilter => {
    const targetType = searchParams.get('targetType');
    return targetType && REVERSE_TARGET_MAP[targetType]
      ? REVERSE_TARGET_MAP[targetType]
      : '전체';
  };

  const getInitialCategoryFilter = (): CategoryFilter => {
    const categoryType = searchParams.get('categoryType');
    return categoryType && REVERSE_CATEGORY_MAP[categoryType]
      ? REVERSE_CATEGORY_MAP[categoryType]
      : '받고 싶어한';
  };

  const [showAll, setShowAll] = useState(false);

  // URL에서 현재 필터 값 읽기
  const selectedTarget: TargetFilter = getInitialTargetFilter();
  const selectedCategory: CategoryFilter = getInitialCategoryFilter();

  // URL 업데이트 함수
  const updateURL = (target: TargetFilter, category: CategoryFilter) => {
    const targetCode = TARGET_FILTER_MAP[target];
    const categoryCode = CATEGORY_FILTER_MAP[category];

    const newSearchParams = new URLSearchParams();
    newSearchParams.set('targetType', targetCode);
    newSearchParams.set('categoryType', categoryCode);

    navigate(`?${newSearchParams.toString()}`, { replace: true });
  };

  const displayedProducts = showAll
    ? products
    : products.slice(0, INITIAL_PRODUCT_COUNT);

  const handleTargetFilterChange = (filter: TargetFilter) => {
    updateURL(filter, selectedCategory);
  };

  const handleCategoryFilterChange = (category: CategoryFilter) => {
    updateURL(selectedTarget, category);
  };

  const handleProductClick = (product: Product) => {
    console.log('상품 클릭:', product.name);
  };

  return (
    <Container>
      <SectionTitle>실시간 급상승 선물랭킹</SectionTitle>

      <FilterContainer>
        {targetFilters.map(filter => (
          <FilterTab
            key={filter}
            isActive={selectedTarget === filter}
            onClick={() => handleTargetFilterChange(filter)}
          >
            <ProfileIcon isActive={selectedTarget === filter}>
              {getProfileIconText(filter)}
            </ProfileIcon>
            <FilterLabel isActive={selectedTarget === filter}>
              {filter}
            </FilterLabel>
          </FilterTab>
        ))}
      </FilterContainer>

      <SortContainer>
        {categoryFilter.map(category => (
          <SortButton
            key={category}
            isActive={selectedCategory === category}
            onClick={() => handleCategoryFilterChange(category)}
          >
            {category}
          </SortButton>
        ))}
      </SortContainer>

      <ProductGrid>
        {displayedProducts.map((product, index) => (
          <GiftProductCard
            key={product.id}
            product={product}
            rank={index + 1}
            onClick={handleProductClick}
            showRankBadge
          />
        ))}
      </ProductGrid>

      <MoreButton onClick={() => setShowAll(!showAll)}>
        {showAll ? '접기' : '더보기'}
      </MoreButton>
    </Container>
  );
}
