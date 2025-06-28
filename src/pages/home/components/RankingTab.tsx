import { css, useTheme } from "@emotion/react";
import { RANKING_TABS, type TabType } from "../../../constants/ranking";
import type { Theme } from "@emotion/react";

type RankingTabProps = {
  selected: TabType;
  onChange: (tab: TabType) => void;
};

export const RankingTab = ({ selected, onChange }: RankingTabProps) => {
  const theme = useTheme();

  return (
    <div css={tabWrapperStyle}>
      {RANKING_TABS.map((tab) => (
        <button
          key={tab}
          css={tabButtonStyle(theme, selected === tab)}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

const tabWrapperStyle = css`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`;

const tabButtonStyle = (theme: Theme, active: boolean) => css`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  border-bottom: 2px solid
    ${active ? theme.colors.colorScale.gray.gray1000 : "transparent"};
  color: ${active
    ? theme.colors.semantic.text.default
    : theme.colors.semantic.text.sub};
  background: none;
`;
