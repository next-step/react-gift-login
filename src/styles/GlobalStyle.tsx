/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const GlobalStyle = ({ children }: Props) => (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html,
        body {
          font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui,
            Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #fff;
          color: #9631ac;
          line-height: 2;
        }
        h2 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
      `}
    />
    {children}
  </>
);

export default GlobalStyle;
