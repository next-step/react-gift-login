import { css, useTheme } from "@emotion/react";
import { RANKING_TABS, type TabType } from "../constants/ranking";

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

const tabButtonStyle = (theme: any, active: boolean) => css`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  border-bottom: 2px solid ${active ? theme.colors.gray1000 : "transparent"};
  color: ${active ? theme.colors.text.default : theme.colors.text.sub};
  background: none;
`;
