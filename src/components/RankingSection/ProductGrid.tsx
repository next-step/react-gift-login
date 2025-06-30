import styled from '@emotion/styled';
import type { Product } from '@/types/product';
import ProductCard from '@/components/RankingSection/ProductCard';

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <Grid>
      {products.map((item, index) => (
        <ProductCard key={item.id} item={item} rank={index + 1} />
      ))}
    </Grid>
  );
};

export default ProductGrid;

interface ProductGridProps {
  products: Product[];
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${({ theme }) => theme.spacing[2]};
  row-gap: ${({ theme }) => theme.spacing[7]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;
