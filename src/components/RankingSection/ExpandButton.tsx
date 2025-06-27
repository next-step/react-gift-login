/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { Theme } from '@/styles/theme';

interface ExpandButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const theme = useTheme();

const moreButtonWrapperStyle = (theme: Theme) => css`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${theme.spacing[5]};
`;

const moreButtonStyle = (theme: Theme) => css`
  max-width: 30rem;
  width: 100%;
  padding: ${theme.spacing[3]};
  border-radius: 4px;
  border: 1px solid rgb(220, 222, 227);
  background-color: ${theme.color.semantic.background.default};
  cursor: pointer;
`;

const ExpandButton = ({ isExpanded, onToggle }: ExpandButtonProps) => {
  return (
    <div css={moreButtonWrapperStyle(theme)}>
      <button css={moreButtonStyle(theme)} onClick={onToggle}>
        {isExpanded ? '접기' : '더보기'}
      </button>
    </div>
  );
};

export default ExpandButton;
