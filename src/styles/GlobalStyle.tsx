import { Global, css } from '@emotion/react';
import { ResetStyle } from './ResetStyle';
import { BaseStyle } from './BaseStyle';

const GlobalStyle = () => <Global styles={css([ResetStyle, BaseStyle])} />;

export default GlobalStyle;
