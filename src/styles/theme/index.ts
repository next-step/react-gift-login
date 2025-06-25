import { colors, semanticColors } from '@/styles/theme/colors';
import { typography } from '@/styles/theme/typography';
import { spacing } from '@/styles/theme/spacing';
import { layout } from './layout';

export const theme = {
  colors: {
    ...colors,
    ...semanticColors,
  },
  typography,
  spacing,
  layout,

  components: {
    navigationBar: {
      height: '3rem',
      leftIcon: spacing[6],
      profileIconSize: spacing[5],
    },
  },
} as const;

// 명시적 타입 계산
type ThemeType = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}

export default theme;
