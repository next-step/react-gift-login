import { useTheme } from '@emotion/react';
import type { Theme } from './theme';


const useCustomTheme=(): Theme=> {
  return useTheme() as Theme;
};
export default useCustomTheme;


