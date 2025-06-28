import Layout from "@/styles/Layout";
import GlobalStyle from "@/styles/GlobalStyle";
import NavigationBar from "@/components/NavigationBar";
import Category from "@/components/Category";
import SelectFriend from "@/components/SelectFriend";
import Cheering from "@/components/Cheering";
import GiftRanking from "@/components/GiftRankingBox";
import GiftRankingHeader from "@/components/GiftRankingHeader";

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <NavigationBar />
        <SelectFriend />
        <Category />
        <Cheering />
        <GiftRankingHeader />
        <GiftRanking />
      </Layout>
    </>
  );
};

export default Main;
