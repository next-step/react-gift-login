import { css, useTheme } from '@emotion/react';


const Padding = () => {
    const theme = useTheme();
  return (
    <div
      css={css`
        width: 100%;
        height: ${theme.spacing.spacing8};
        background-color: ${theme.colors.gray.gray00};
      `}
    ></div>
  );
}

export default Padding
