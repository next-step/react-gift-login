import GlobalStyles from '@/styles/GlobalStyles'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme/index';
import Container from './styles/Container.tsx/Container';
import Navbar from './components/navbar/Navbar';
import FriendsBox from './components/friendsbox/FriendsBox';
import Category from './components/category/Category';
import Padding from './components/padding/Padding';
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <Navbar />
      </Container>
    </ThemeProvider>
  );
}

export default App
