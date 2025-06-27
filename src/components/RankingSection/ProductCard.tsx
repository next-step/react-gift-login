/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { Theme } from '@/styles/theme';
import type { Product } from '@/types/product';

interface ProductCardProps {
  item: Product;
  rank: number;
}

const theme = useTheme();

const itemStyle = css`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
`;

const itemImageStyle = (theme: Theme) => css`
  aspect-ratio: 1;
  border-radius: 8px;
  margin-bottom: ${theme.spacing[2]};
  object-fit: fit;
`;

const itemBrandStyle = (theme: Theme) => css`
  ${theme.typography.label.label1Regular}
  color: ${theme.color.gray[700]};
  margin-bottom: ${theme.spacing[1]};
`;

const itemNameStyle = (theme: Theme) => css`
  ${theme.typography.body.body2Regular};
  text-align: left;
  margin-bottom: ${theme.spacing[2]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const itemPriceStyle = (theme: Theme) => css`
  ${theme.typography.title.title2Bold};
  color: ${theme.color.semantic.text.default};
  text-align: left;
  word-break: break-word;
`;

const rankBadgeStyle = (theme: Theme, rank: number) => css`
  position: absolute;
  top: ${theme.spacing[1]};
  left: ${theme.spacing[1]};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${rank <= 3 ? theme.color.red[600] : theme.color.gray[600]};
  border-radius: 4px;
  ${theme.typography.label.label2Bold};
  color: ${theme.color.gray[0]};
  z-index: 1;
`;

const ProductCard = ({ item, rank }: ProductCardProps) => {
  return (
    <div css={itemStyle}>
      <span css={rankBadgeStyle(theme, rank)}>{rank}</span>
      <img css={itemImageStyle(theme)} src={item.imageURL} alt={item.name} />
      <p css={itemBrandStyle(theme)}>{item.brandInfo.name}</p>
      <h6 css={itemNameStyle(theme)}>{item.name}</h6>
      <p css={itemPriceStyle(theme)}>
        {item.price.sellingPrice.toLocaleString()} <span>원</span>
      </p>
    </div>
  );
};

export default ProductCard;
