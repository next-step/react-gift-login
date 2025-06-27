/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { Theme } from '@/styles/theme';

interface RankingSortProps {
  selectedSort: string;
  onSelect: (label: string) => void;
}

const theme = useTheme();

const sortWrapperStyle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: ${theme.color.blue[100]};
  border-radius: 0.5rem;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[4]};
`;

const sortButtonStyle = (theme: Theme, isActive: boolean) => css`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${isActive
    ? theme.typography.subtitle.subtitle2Bold
    : theme.typography.subtitle.subtitle2Regular};
  color: ${isActive ? theme.color.blue[600] : theme.color.blue[400]};
  background-color: ${theme.color.blue[100]};
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: 200ms;
`;

const RankingSort = ({ selectedSort, onSelect }: RankingSortProps) => {
  const labels = ['받고 싶어한', '많이 선물한', '위시로 받은'];

  return (
    <div css={sortWrapperStyle(theme)}>
      {labels.map(label => (
        <button
          key={label}
          css={sortButtonStyle(theme, selectedSort === label)}
          onClick={() => onSelect(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default RankingSort;
