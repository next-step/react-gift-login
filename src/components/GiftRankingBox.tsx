import type { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import GiftObject from "./GiftObject";
import { useTheme } from "@emotion/react";

const GiftRanking = () => {
  const theme = useTheme();
  return (
    <div css={giftRankingStyle(theme)}>
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
