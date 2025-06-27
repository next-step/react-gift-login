import type { Theme } from '@emotion/react';
import { css, useTheme } from '@emotion/react';

const tabsWrapper = (theme: Theme) => css`
  display: flex;
  justify-content: space-around;
  padding: 0 ${theme.spacing.spacing4} ${theme.spacing.spacing3};
  font-size: ${theme.fontSizes.label1Regular};
`;

const tabItem = (theme: Theme) => css`
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 8px;
  font-weight: 500;

  &:hover {
    background-color: ${theme.colors.gray.gray200};
  }
`;

export default function RankingFilterTabs() {
  const theme = useTheme();

  return (
    <div css={tabsWrapper(theme)}>
      <div css={tabItem(theme)}>전체</div>
      <div css={tabItem(theme)}>여성</div>
      <div css={tabItem(theme)}>남성</div>
      <div css={tabItem(theme)}>청소년이</div>
    </div>
  );
}