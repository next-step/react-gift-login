// src/styles/styled.d.ts
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      gray: Record<number, string>;
      yellow: {
        600: string;
        hover: string;
        active: string;
      };
      kakaoBrown: string;
      critical: string;
      info: string;
    };
    text: {
      default: string;
      sub: string;
      disabled: string;
      placeholder: string;
    };
    background: {
      default: string;
      disabled: string;
      fill: string;
    };
    border: {
      default: string;
      disabled: string;
    };
    spacing: Record<number, string>;
    typography: {
      title1Bold: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
      body2Regular: {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
      };
    };
  }
}
