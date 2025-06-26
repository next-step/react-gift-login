// emotion.d.ts
import '@emotion/react';
import { theme } from 'styles/theme';
import type { AppTheme } from './styles/theme';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
