import type { Theme } from "@emotion/react";
import { css, useTheme } from "@emotion/react";

const FILTER_LABELS = ["전체", "여성", "남성", "청소년이"];
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
      {FILTER_LABELS.map((label) => (
        <div key={label} css={tabItem(theme)}>
          {label}
        </div>
      ))}
    </div>
  );
}
