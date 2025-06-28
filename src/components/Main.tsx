import Layout from "@/styles/Layout";
import GlobalStyle from "@/styles/GlobalStyle";
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
