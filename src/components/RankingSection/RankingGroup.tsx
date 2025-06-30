import styled from '@emotion/styled';
import { useState } from 'react';
import { mockProducts } from '@/data/products';
import RankingFilter from '@/components/RankingSection/RankingFilter';
import RankingSort from '@/components/RankingSection/RankingSort';
import ProductGrid from '@/components/RankingSection/ProductGrid';
import ExpandButton from '@/components/RankingSection/ExpandButton';

const RankingGroup = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [selectedFilter, setSelectedFilter] = useState('전체');
  const [selectedSort, setSelectedSort] = useState('받고 싶어한');

  const isExpanded = visibleCount === mockProducts.length;
  const toggleVisibleCount = () => {
    setVisibleCount(isExpanded ? INITIAL_VISIBLE_COUNT : mockProducts.length);
  };

  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>
      <RankingFilter
        selectedFilter={selectedFilter}
        onSelect={setSelectedFilter}
      />
      <RankingSort selectedSort={selectedSort} onSelect={setSelectedSort} />
      <ProductGrid
        products={
          isExpanded
            ? mockProducts
            : mockProducts.slice(0, INITIAL_VISIBLE_COUNT)
        }
      />
      <ExpandButton isExpanded={isExpanded} onToggle={toggleVisibleCount} />
    </Section>
  );
};

export default RankingGroup;

const INITIAL_VISIBLE_COUNT = 6;

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[4]}`};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

const Title = styled.h3`
  ${({ theme }) => theme.typography.title.title1Bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;
