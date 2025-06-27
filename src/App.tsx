import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/globalStyle';
import GlobalReset from './styles/GlobalReset';
import {theme} from '@/styles/theme';
import Layout from '@/components/Layout';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import SelectFriend from './components/Section/SelectFriend';
import GiftCategoryList from './components/Category/GiftCategoryList';
import Banner from './components/Section/Banner';
import GiftGrid from './components/GiftRanking/GiftGrid';   
import GiftItem from './components/GiftRanking/GiftItem';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalReset />
      <GlobalStyle />
      <Layout>
        <NavigationBar /> 
        <SelectFriend />
        <GiftCategoryList />
        <Banner />
        <GiftGrid>
          <GiftItem
            rank={1}
            name="BBQ 양념치킨+콜라"
            imageURL="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
            price={29000}
            brand="BBQ"
          />
        </GiftGrid>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
