import React from "react";

import { css, useTheme } from "@emotion/react";
const Navbar = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 ${theme.spacing.spacing3};
        height: 2.75rem;
        background-color: ${theme.colors.gray};
      `}
    >
      <div>아이콘</div>
      <div>선물하기</div>
      <div>홈 아이콘</div>
    </div>
  );
};

export default Navbar;
