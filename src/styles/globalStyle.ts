import { css } from "@emotion/react";

export const globalStyle = (theme: any) => css`
  html,
  body {
    font-family: "Pretendard Variable", sans-serif;
    background-color: ${theme.colors.background.default};
    color: ${theme.colors.text.default};
    line-height: 1.6;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  #root {
    max-width: 720px;
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;
