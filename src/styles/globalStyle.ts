import { css } from "@emotion/react";

export const globalStyle = (theme: any) => css`
  html,
  body {
    font-family: "Pretendard Variable", sans-serif;
    background-color: ${theme.colors.background.default};
    color: ${theme.colors.text.default};
    line-height: 1.6;
  }
`;
