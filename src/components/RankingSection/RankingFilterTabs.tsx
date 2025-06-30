import type { Theme } from "@emotion/react";
import { css, useTheme } from "@emotion/react";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFilter = searchParams.get("gender") || "전체";

  const handleClick = (label: string) => {
    searchParams.set("gender", label);
    setSearchParams(searchParams);
  };

  return (
    <div css={tabsWrapper(theme)}>
      {FILTER_LABELS.map((label) => (
        <div
          key={label}
          css={css`
            ${tabItem(theme)};
            background-color: ${label === selectedFilter
              ? theme.colors.gray.gray300
              : "transparent"};
          `}
          onClick={() => handleClick(label)}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
