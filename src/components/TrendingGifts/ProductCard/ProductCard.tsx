import type { TrendingGiftsType } from '@/data/trendingGfitsMockData';
import styled from '@emotion/styled';

const ProductCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

const RankBadge = styled.div<{ isTopThree: boolean }>`
  position: absolute;
  top: 4px;
  left: 4px;
  background-color: ${({ isTopThree, theme }) =>
    isTopThree ? theme.colors.red[600] : theme.colors.gray[600]};
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 4px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const BrandName = styled.p`
  margin: 4px 0 2px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const ProductName = styled.h4`
  margin: 0 0 4px 0;
  font-size: 14px;
`;

const ProductPrice = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const PriceAmount = styled.span`
  font-weight: ${({ theme }) => theme.typography.label.label1Bold.fontWeight};
`;

export interface ProductCardPropsType {
  product: TrendingGiftsType;
  index: number;
}

function ProductCard({ product, index }: ProductCardPropsType) {
  return (
    <ProductCardContainer>
      <RankBadge isTopThree={index < 3}>{index + 1}</RankBadge>
      <ProductImage src={product.imageURL} alt={product.name} />
      <ProductInfo>
        <BrandName>{product.brandInfo.name}</BrandName>
        <ProductName>{product.name}</ProductName>
      </ProductInfo>
      <ProductPrice>
        <PriceAmount>{product.price.sellingPrice.toLocaleString()}</PriceAmount> 원
      </ProductPrice>
    </ProductCardContainer>
  );
}

export default ProductCard;
