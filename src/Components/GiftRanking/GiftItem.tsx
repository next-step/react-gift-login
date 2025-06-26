/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { ThemeType } from '@/styles/theme';

interface GiftItemProps {
  rank: number;
  name: string;
  imageURL: string;
  price: number;
  brand: string;
}

const card = css`
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const imageWrapper = css`
  width: 100%;
  position: relative;
`;

const image = css`
  width: 100%;
  border-radius: 8px;
`;

const GiftItem = ({ rank, name, imageURL, price, brand }: GiftItemProps) => {
  const theme = useTheme() as ThemeType;

  const rankBadge = css`
    position: absolute;
    top: 4px;
    left: 4px;
    background: ${theme.color.red.red600};
    color: ${theme.color.gray.gray00};
    font-size: 14px;
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 50%;
  `;

  const brandStyle = css`
    font-size: 12px;
    color: ${theme.color.gray.gray700};
  `;

  const productName = css`
    font-size: 14px;
    font-weight: bold;
    color: ${theme.color.semantic.text.default};
    text-align: center;
  `;

  const priceStyle = css`
    font-size: 15px;
    font-weight: bold;
    color: ${theme.color.semantic.text.default};
  `;

  return (
    <div css={card}>
      <div css={imageWrapper}>
        <img src={imageURL} alt={name} css={image} />
        <div css={rankBadge}>{rank}</div>
      </div>
      <div css={brandStyle}>{brand}</div>
      <div css={productName}>{name}</div>
      <div css={priceStyle}>{price.toLocaleString()} 원</div>
    </div>
  );
};

export default GiftItem;
