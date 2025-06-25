import { colors, semanticColors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

// 테마 인터페이스 정의
export interface Theme {
  colors: typeof colors;
  semantic: typeof semanticColors;
  typography: typeof typography;
  spacing: typeof spacing;
}

// 기본 테마 객체
export const theme: Theme = {
  colors,
  semantic: semanticColors,
  typography,
  spacing,
} as const;

// Emotion의 테마 타입 확장 -> 기본적으로 export interface theme{} 처럼 정의된 테마에 과제 테마추가
declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
    semantic: typeof semanticColors;
    typography: typeof typography;
    spacing: typeof spacing;
  }
}

export default theme; 