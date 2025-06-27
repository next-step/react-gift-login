import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import GiftObject from "./GiftObject";

const GiftRanking = () => {
  return (
    <div css={(theme) => giftRankingStyle(theme)}>
      <GiftObject />
      <GiftObject />
      <GiftObject />
      <GiftObject />
      <GiftObject />
      <GiftObject />
      <GiftObject />
      <GiftObject />
      <GiftObject />
    </div>
  );
};

export default GiftRanking;

const giftRankingStyle = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background: ${theme.colors.semantic.background.fill};
`;
