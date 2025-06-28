import type { TrendingGiftsType } from '@/types/TrendingGiftsType';
import {
  BrandName,
  PriceAmount,
  ProductCardContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  RankBadge,
} from './ProductCard.styles';

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
