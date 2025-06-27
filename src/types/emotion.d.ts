/** @jsxImportSource @emotion/react */
import '@emotion/react';

declare module 'react' {
  interface Attributes {
    css?: import('@emotion/react').SerializedStyles | string;
  }
}

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof import('@/styles/theme').default.colors;
    fontSizes: typeof import('@/styles/theme').default.fontSizes;
    spacing: typeof import('@/styles/theme').default.spacing;
  }
}