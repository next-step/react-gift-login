import type { TrendingGiftsType } from '@/data/trendingGfitsMockData';
import styled from '@emotion/styled';

const ProductCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.layout.grid.gaps.sm};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

const RankBadge = styled.div<{ isTopThree: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing[1]};
  left: ${({ theme }) => theme.spacing[1]};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ isTopThree, theme }) =>
    isTopThree ? theme.colors.red[600] : theme.colors.gray[600]};
  color: white;

  width: ${({ theme }) => theme.spacing[4]};
  height: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.components.trendingGifts.productCard.rankBadgePadding};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  font-size: ${({ theme }) => theme.typography.label.label2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label2Bold.fontWeight};
`;

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: ${({ theme }) => theme.components.trendingGifts.productCard.imageRatio};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const BrandName = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const ProductName = styled.h4`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
`;

const ProductPrice = styled.p`
  font-size: ${({ theme }) => theme.typography.subtitle.subtitle1Bold.fontSize};
`;

const PriceAmount = styled.span`
  font-weight: ${({ theme }) => theme.typography.subtitle.subtitle1Bold.fontWeight};
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
