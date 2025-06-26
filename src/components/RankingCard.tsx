import { css } from "@emotion/react";

type RankingCardProps = {
  rank: number;
  name: string;
  imageURL: string;
  price: number;
  brandName: string;
  brandImageURL: string;
};

export const RankingCard = ({
  rank,
  name,
  imageURL,
  price,
  brandName,
  brandImageURL,
}: RankingCardProps) => {
  return (
    <div css={cardStyle}>
      <div css={imageWrapper}>
        <img src={imageURL} alt={name} css={productImage} />
        <div css={rankBadge}>{rank}위</div>
      </div>

      <div css={brandInfo}>
        <img src={brandImageURL} alt={brandName} css={brandImage} />
        <span css={brandNameStyle}>{brandName}</span>
      </div>

      <div css={productName}>{name}</div>
      <div css={priceStyle}>{price.toLocaleString()}원</div>
    </div>
  );
};

const cardStyle = css`
  display: flex;
  flex-direction: column;
`;

const imageWrapper = css`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
`;

const productImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const rankBadge = css`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #fee500;
  padding: 2px 6px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
`;

const brandInfo = css`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 4px;
`;

const brandImage = css`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

const brandNameStyle = css`
  font-size: 12px;
  color: #555;
`;

const productName = css`
  font-size: 14px;
  font-weight: 500;
  color: #2a3038;
  line-height: 1.3;
  margin-bottom: 4px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const priceStyle = css`
  font-size: 14px;
  font-weight: 700;
  color: #2a3038;
`;
