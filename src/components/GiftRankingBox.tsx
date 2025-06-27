import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import giftData from "@/data/giftData";

const GiftRanking = () => {
  return (
    <div css={(theme) => giftStyle(theme)}>
      <img src={giftData.imageURL} css={imageStyle()} />
      <div css={() => textContainerStyle()}>
        <p css={(theme) => brandStyle(theme)}>{giftData.brandInfo.name}</p>
        <h3 css={(theme) => titleStyle(theme)}>{giftData.name}</h3>
        <p css={(theme) => priceStyle(theme)}>
          {giftData.price.basicPrice.toLocaleString()}원
        </p>
      </div>
    </div>
  );
};

export default GiftRanking;

const giftStyle = (theme: Theme) => css`
  display: flex;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background: ${theme.colors.semantic.background.fill};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

const imageStyle = () => css`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const textContainerStyle = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const titleStyle = (theme: Theme) => css`
  font-size: ${theme.typography.subtitle1Bold.size};
  font-weight: ${theme.typography.subtitle1Bold.weight};
`;

const priceStyle = (theme: Theme) => css`
  font-size: ${theme.typography.body1Regular.size};
  font-weight: ${theme.typography.body1Regular.weight};
  color: ${theme.colors.semantic.text.default};
`;

const brandStyle = (theme: Theme) => css`
  font-size: ${theme.typography.body2Regular.size};
  color: ${theme.colors.semantic.text.sub};
`;
