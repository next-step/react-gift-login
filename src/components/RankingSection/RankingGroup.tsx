/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import { mockProducts } from '@/data/products';
import type { Theme } from '@/styles/theme';
import RankingFilter from '@/components/RankingSection/RankingFilter';
import RankingSort from '@/components/RankingSection/RankingSort';
import ProductGrid from '@/components/RankingSection/ProductGrid';
import ExpandButton from '@/components/RankingSection/ExpandButton';

const INITIAL_VISIBLE_COUNT = 6;
const theme = useTheme();

const sectionStyle = (theme: Theme) => css`
  padding: ${theme.spacing[0]} ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[5]};
`;

const titleStyle = (theme: Theme) => css`
  ${theme.typography.title.title1Bold};
  margin-bottom: ${theme.spacing[4]};
`;

const RankingGroup = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [selectedFilter, setSelectedFilter] = useState('전체');
  const [selectedSort, setSelectedSort] = useState('받고 싶어한');
  const isExpanded = visibleCount === mockProducts.length;
  const toggleVisibleCount = () => {
    setVisibleCount(isExpanded ? INITIAL_VISIBLE_COUNT : mockProducts.length);
  };

  return (
    <section css={sectionStyle(theme)}>
      <h3 css={titleStyle(theme)}>실시간 급상승 선물랭킹</h3>
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
    </section>
  );
};

export default RankingGroup;
