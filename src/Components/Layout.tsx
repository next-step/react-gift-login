/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { ReactNode } from 'react';

const layoutStyle = css`
  max-width: 720px;
  margin: 0 auto;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return <div css={layoutStyle}>{children}</div>;
};

export default Layout;