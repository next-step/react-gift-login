import styled from '@emotion/styled';
import type { TrendingGiftsType } from '@/data/trendingGfitsMockData';
import ProductCard from '../ProductCard/ProductCard';

const ProductGridContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: ${({ theme }) => theme.layout.grid.columns.fixed3};
  gap: 12px;
  margin-top: 16px;
`;

interface ProductGridPropsType {
  products: TrendingGiftsType[];
}

function ProductGrid({ products }: ProductGridPropsType) {
  return (
    <ProductGridContainer>
      {products.map((product, idx) => (
        <ProductCard key={idx} product={product} index={idx} />
      ))}
    </ProductGridContainer>
  );
}

export default ProductGrid;
