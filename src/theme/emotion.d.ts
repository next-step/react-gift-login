import '@emotion/react';

import type { ColorScale, SemanticColors, TypographyTokens, SpacingTokens } from './tokens';

declare module '@emotion/react' {
  export interface Theme {
    colorScale: ColorScale;
    semanticColors: SemanticColors;
    typography: TypographyTokens;
    spacing: SpacingTokens;
  }
}
