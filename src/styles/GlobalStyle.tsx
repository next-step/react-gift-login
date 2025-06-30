import { css, Global, useTheme } from '@emotion/react';

const GlobalStyle = () => {
  const { palette } = useTheme();

  return (
    <Global
      styles={css`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body {
          height: 100%;
          font-family: 'Pretendard Variable', system-ui, sans-serif;
          background: ${palette.white};
          color: ${palette.gray900};
        }
        a { color: inherit; text-decoration: none; }
        button { font-family: inherit; background: none; border: none; cursor: pointer; }
      `}
    />
  );
};

export default GlobalStyle;