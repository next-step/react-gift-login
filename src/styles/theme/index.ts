import { colors, semanticColors } from '@/styles/theme/colors';
import { typography } from '@/styles/theme/typography';
import { spacing } from '@/styles/theme/spacing';
import { layout } from './layout';
import { borderRadius } from './borderRadius';

export const theme = {
  colors: {
    ...colors,
    ...semanticColors,
  },
  typography,
  spacing,
  layout,
  borderRadius,

  components: {
    navigationBar: {
      height: '3rem',
      leftIconSize: spacing[6],
      profileIconSize: spacing[5],
      zIndex: 10000,
    },
    giftBanner: {
      height: '7rem',
      width: '95%',
      AddIconSize: spacing[5],
    },
  },
} as const;

// 명시적 타입 계산
type ThemeType = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}

export default theme;
