import { Global, css, useTheme } from '@emotion/react';
import { ResetStyle } from '@/styles/ResetStyle';
import { BaseStyle } from '@/styles/BaseStyle';

const GlobalStyle = () => {
  const theme = useTheme();

  return <Global styles={css([ResetStyle, BaseStyle(theme)])} />;
};

export default GlobalStyle;
