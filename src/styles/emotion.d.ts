// src/styles/emotion.d.ts
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    spacing: {
      [key: string]: string;
    };
    colors: {
      semantic: {
        background: { default: string };
        text: { default: string };
        border: { default: string };
      };
    };
    typography: {
      [key: string]: {
        size: string;
        weight: number;
      };
    };
  }
}