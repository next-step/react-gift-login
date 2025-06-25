import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import Navigation from './components/Navigation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  )
}

export default App