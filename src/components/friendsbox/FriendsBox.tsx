import React from 'react'
import { css, useTheme } from "@emotion/react";
const FriendsBox = () => {
  const theme = useTheme();
  return (
    <section css={css`
    width: 100%;
    border: none;
    height: auto;
padding: ${theme.spacing.spacing4} ${theme.spacing.spacing3};
        background-color: ${theme.colors.gray.gray200};
    `}
     >
        <button name='선물할 친구를 선택해 주세요.'
        css={css`
        width:100%;
        padding: ${theme.spacing.spacing4};
        border: none;`}
        >
선물할 친구를 선택해 주세요.
        </button>
    </section>
  )
}

export default FriendsBox
