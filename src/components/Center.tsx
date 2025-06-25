/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { ReactNode } from 'react'; 

interface CenterProps {
  children?: ReactNode;
}

const Center = ({ children }: CenterProps) => {
  const style = css`
    background-color: skyblue;
    max-width:720px;
    margin: 0 auto;
    min-height: 100vh;
  `;

  return <div css={style}>{children}</div>;
};

export default Center;
