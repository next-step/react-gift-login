import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/globalStyle';
import {theme} from '@/styles/theme';
import Layout from '@/components/Layout';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import SelectFriend from './components/Section/SelectFriend';
import GiftCategoryList from './components/Category/GiftCategoryList';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <NavigationBar /> 
        <SelectFriend />
        <GiftCategoryList />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
