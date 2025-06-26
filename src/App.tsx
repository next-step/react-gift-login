
import GlobalStyles from '@/styles/GlobalStyles'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme/index';
import Container from './styles/Container.tsx/Container';
import Navbar from './components/navbar/Navbar';
import FriendsBox from './components/friendsbox/FriendsBox';
import Category from './components/category/Category';
import { PaddingMd, PaddingLg } from './components/padding/Padding';
import Banner from './components/banner/Banner';
import Ranking from './components/ranking/Ranking';
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <Navbar />
        <FriendsBox />
        <PaddingMd />
        <Category />
        <PaddingMd />
        <Banner/>
        <PaddingLg />
        <Ranking/>
      </Container>
    </ThemeProvider>
  );


export default App
