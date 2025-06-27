/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { Theme } from '@/styles/theme';
import type { Product } from '@/types/product';
import ProductCard from '@/components/RankingSection/ProductCard';

interface ProductGridProps {
  products: Product[];
}

const theme = useTheme();

const gridStyle = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${theme.spacing[2]};
  row-gap: ${theme.spacing[7]};
  margin-bottom: ${theme.spacing[4]};
`;

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div css={gridStyle(theme)}>
      {products.map((item, index) => (
        <ProductCard key={item.id} item={item} rank={index + 1} />
      ))}
    </div>
  );
};

export default ProductGrid;
