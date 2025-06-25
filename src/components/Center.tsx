/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from '@src/styles/tokens/index';
import type { ReactNode } from 'react';  // ✅ 이렇게 바꿔야 함


interface CenterProps {
  children?: ReactNode;
}

const Center = ({ children }: CenterProps) => {
  const style = css`
    background-color: skyblue;
    max-width:720px;
    margin: 0 auto;
    min-height: 100vh;
    border: 1px solid black;
  `;

  return <div css={style}>{children}</div>;
};

export default Center;
