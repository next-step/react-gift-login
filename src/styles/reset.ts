import { css } from "@emotion/react";

const reset = css`
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #f9f9f9;

    font-family:
      "Pretendard", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕",
      sans-serif;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export default reset;
