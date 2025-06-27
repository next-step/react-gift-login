/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { Theme } from '@/styles/theme';

interface RankingFilterProps {
  selectedFilter: string;
  onSelect: (label: string) => void;
}

const theme = useTheme();

const filterWrapperStyle = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[4]};
`;

const filterButtonStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[2]};
  border: none;
  background-color: ${theme.color.semantic.background.default};
  cursor: pointer;
`;

const emojiStyle = (theme: Theme, isSelected: boolean) => css`
  background: ${isSelected ? theme.color.blue[700] : theme.color.blue[200]};
  color: ${isSelected ? theme.color.gray[0] : theme.color.blue[400]};
  border-radius: 16px;
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${theme.typography.subtitle.subtitle2Bold};
`;

const labelStyle = (theme: Theme, isSelected: boolean) => css`
  color: ${isSelected ? theme.color.blue[700] : theme.color.semantic.text.sub};
  ${isSelected
    ? theme.typography.subtitle.subtitle2Bold
    : theme.typography.subtitle.subtitle2Regular};
  margin: 0;
  text-align: left;
`;

const RankingFilter = ({ selectedFilter, onSelect }: RankingFilterProps) => {
  const filters = [
    { emoji: 'ALL', label: '전체' },
    { emoji: '👩🏻', label: '여성이' },
    { emoji: '👨🏻', label: '남성이' },
    { emoji: '👦🏻', label: '청소년이' },
  ];

  return (
    <div css={filterWrapperStyle(theme)}>
      {filters.map(filter => {
        const isSelected = selectedFilter === filter.label;
        return (
          <button
            key={filter.label}
            css={filterButtonStyle(theme)}
            onClick={() => onSelect(filter.label)}
          >
            <div css={emojiStyle(theme, isSelected)}>{filter.emoji}</div>
            <p css={labelStyle(theme, isSelected)}>{filter.label}</p>
          </button>
        );
      })}
    </div>
  );
};

export default RankingFilter;
