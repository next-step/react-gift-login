import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import Navigation from './components/Navigation';
import CategorySection from './components/CategorySection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <CategorySection />
    </ThemeProvider>
  )
}

export default App