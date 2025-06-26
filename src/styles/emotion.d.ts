import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof import('./theme').theme.colors
    spacing: typeof import('./theme').theme.spacing
    typography: typeof import('./theme').theme.typography
  }
}
