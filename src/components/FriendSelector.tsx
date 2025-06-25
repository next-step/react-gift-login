/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { FaPlus } from 'react-icons/fa';

const container = (theme: any) => css`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  background-color: ${theme.color.gray.gray100};
  border: 1px solid ${theme.color.semantic.borderDefault};
  border-radius: 8px;
  color: ${theme.color.semantic.textDefault};
  font-size: ${theme.typography.body1Regular.fontSize};
  font-weight: ${theme.typography.body1Regular.fontWeight};
  cursor: pointer;
`;

const FriendSelector = () => {
  const theme = useTheme();

  return (
    <button css={container(theme)}>
      <FaPlus style={{ marginRight: '8px' }} />
      선물할 친구를 선택해 주세요.
    </button>
  );
};

export default FriendSelector;

