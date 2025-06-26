import GlobalStyle from "@/styles/global";
import Layout from "./components/Layout";
import Header from "./components/Header";
import CategorySection from "@/sections/CategorySection";
import FriendSelectBanner from "./sections/FriendSelectBanner";
import CampaignBanner from "./sections/CampaignBanner";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <FriendSelectBanner />
        <CategorySection />
        <CampaignBanner />
      </Layout>
    </>
  );
}

export default App;
