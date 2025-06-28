import "./App.css";
import Layout from "./styles/Layout";
import GlobalStyle from "@/styles/GlobalStyle";
import NavigationBar from "./components/NavigationBar";
import Category from "./components/Category";
import SelectFriend from "./components/SelectFriend";
import Cheering from "./components/Cheering";
import GiftRanking from "./components/GiftRankingBox";
import GiftRankingHeader from "./components/GiftRankingHeader";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";

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
