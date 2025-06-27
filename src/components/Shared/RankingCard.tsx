/** @jsxImportSource @emotion/react */
import { css, type Theme as ThemeType } from '@emotion/react';

type RankingCardProps = {
  rank: number;
  imageURL: string;
  brand: string;
  name: string;
  price: number;
  theme: ThemeType;
};

const RankingCard = ({ rank, imageURL, brand, name, price, theme }: RankingCardProps) => {
  return (
    <div css={card}>
      <div css={rankBadge(theme, rank)}>{rank}</div>
      <img src={imageURL} alt={name} css={image} />
      <p css={brandStyle}>{brand}</p>
      <p css={nameStyle}>{name}</p>
      <p css={priceStyle}>{price.toLocaleString()}원</p>
    </div>
  );
};

const card = css`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  text-align: center;
`;

const rankBadge = (theme: ThemeType, rank: number) => css`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${rank <= 3 ? theme.color.red.red700 : theme.color.gray.gray600};
  color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const image = css`
  width: 100%;
  border-radius: 8px;
`;

const brandStyle = css`
  font-size: 12px;
  margin-top: 8px;
  color: #666;
`;

const nameStyle = css`
  font-size: 14px;
  font-weight: 500;
  margin-top: 4px;
`;

const priceStyle = css`
  font-size: 14px;
  font-weight: 700;
  margin-top: 4px;
`;

export default RankingCard;
