import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import Navigation from './components/Navigation';
import FriendSelector from './components/FriendSelector';
import CategorySection from './components/CategorySection';
import MessageSection from './components/MessageSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <FriendSelector />
      <CategorySection />
      <MessageSection />
    </ThemeProvider>
  )
}

export default App