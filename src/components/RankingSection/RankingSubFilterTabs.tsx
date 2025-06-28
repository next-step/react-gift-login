/** @jsxImportSource @emotion/react */
import type { Theme } from '@emotion/react';
import { css, useTheme } from '@emotion/react';
import { useState } from 'react';

const FILTER_OPTIONS = ['받고 싶어한', '많이 선물한', '위시로 받은'];

export default function RankingSubFilterTabs() {
  const theme = useTheme();
  const [selected, setSelected] = useState('위시로 받은'); 

  return (
    <div css={containerStyle(theme)}>
      {FILTER_OPTIONS.map(option => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          css={tabItemStyle(theme, selected === option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

const containerStyle = (theme: Theme) => css`
  display: flex;
  justify-content: space-around;
  background-color: ${theme.colors.blue.blue100};
  border-radius: 12px;
  padding: 16px 0;
`;

const tabItemStyle = (theme: Theme, isActive: boolean) => css`
  background: none;
  border: none;
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${isActive ? theme.typography.body1Bold.fontWeight : 400};
  color: ${isActive ? theme.colors.blue.blue700 : theme.colors.gray.gray400};
  cursor: pointer;
`;