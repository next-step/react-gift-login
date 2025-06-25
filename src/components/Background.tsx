/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import { ReactNode } from 'react';

interface BackgroundProps {
  children?: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  const style = css`
    background-color: ${theme.colors.gray100};
    min-height: 100vh;
  `;

  return <div css={style}>{children}</div>;
};

export default Background;
