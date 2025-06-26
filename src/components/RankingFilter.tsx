import { css, useTheme } from "@emotion/react";
import { GENDER_FILTERS, type GenderType } from "../constants/ranking";

type RankingFilterProps = {
  selected: GenderType;
  onChange: (filter: GenderType) => void;
};

export const RankingFilter = ({ selected, onChange }: RankingFilterProps) => {
  const theme = useTheme();

  return (
    <div css={wrapperStyle}>
      {GENDER_FILTERS.map((filter) => (
        <button
          key={filter}
          css={buttonStyle(theme, selected === filter)}
          onClick={() => onChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

const wrapperStyle = css`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  overflow-x: auto;
`;

const buttonStyle = (theme: any, active: boolean) => css`
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 20px;
  border: 1px solid
    ${active ? theme.colors.gray800 : theme.colors.border.default};
  background-color: ${active ? theme.colors.gray800 : "white"};
  color: ${active ? "white" : theme.colors.text.default};
  white-space: nowrap;
`;
