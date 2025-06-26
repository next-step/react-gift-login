import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme"; // 방금 정의한 테마 파일
import Layout from "./styles/Layout";
// import NavigationBar from "./components/NavigationBar";
import GlobalStyle from "@/styles/GlobalStyle";
import NavigationBar from "./components/NavigationBar";
import Category from "./components/Category";
import SelectFriend from "./components/SelectFriend";
import Cheering from "./components/Cheering";
import GiftRanking from "./components/GiftRankingBox";
import GiftRankingHeader from "./components/GiftRankingHeader";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <NavigationBar />
        <SelectFriend />
        <Category />
        <Cheering />
        <GiftRankingHeader />
        <GiftRanking />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
