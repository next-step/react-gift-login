import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import {Navigation} from './components/Navigation';
import FriendSelector from './components/FriendSelector';
import {CategorySection} from './components/CategorySection';
import MessageSection from './components/MessageSection';
import {RankingSection} from './components/RankingSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <FriendSelector />
      <CategorySection />
      <MessageSection />
      <RankingSection />
    </ThemeProvider>
  )
}

export default App