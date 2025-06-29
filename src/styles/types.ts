import { colors, semanticColors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

// Theme 타입 정의
export interface Theme {
  colors: typeof colors;
  semanticColors: typeof semanticColors;
  typography: typeof typography;
  spacing: typeof spacing;
}

// Emotion의 Theme 인터페이스 확장
declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
    semanticColors: typeof semanticColors;
    typography: typeof typography;
    spacing: typeof spacing;
  }
}
