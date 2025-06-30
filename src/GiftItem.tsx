import { css } from '@emotion/react';
import type { Theme } from '@/theme';

interface GiftItemProps {
  id: number;
  brand: string;
  name: string;
  price: number;
  image: string;
  theme: Theme;
}

const cardStyle = (theme: Theme) => css`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  padding: ${theme.spacing.spacing2};
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const rankBadge = () => css`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: red;
  color: white;
  font-size: 12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const imageStyle = (theme: Theme) => css`
  width: 100%;
  height: auto;
  margin-bottom: ${theme.spacing.spacing2};
`;

const brandStyle = (theme: Theme) => css`
  font-size: 12px;
  color: ${theme.colors.gray400};
`;

const nameStyle = css`
  font-weight: 500;
  margin-top: 2px;
`;

const priceStyle = css`
  font-weight: bold;
  margin-top: 4px;
`;

const GiftItem = ({ id, brand, name, price, image, theme }: GiftItemProps) => {
  return (
    <div css={cardStyle(theme)}>
      <div css={rankBadge}>{id}</div>
      <img src={image} alt={name} css={imageStyle(theme)} />
      <div css={brandStyle(theme)}>{brand}</div>
      <div css={nameStyle}>{name}</div>
      <div css={priceStyle}>{price.toLocaleString()} 원</div>
    </div>
  );
};

export default GiftItem;
