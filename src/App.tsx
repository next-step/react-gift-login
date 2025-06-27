import GlobalStyle from "@/styles/global";
import Layout from "./components/Layout";
import Header from "./components/Header";
import CategorySection from "@/sections/CategorySection";
import FriendSelectBanner from "./sections/FriendSelectBanner";
import CampaignBanner from "./sections/CampaignBanner";
import GiftRankingSection from "@/sections/GiftRankingSection";
import { Route, Routes } from "react-router";
import LoginPage from "./LoginPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={
          <Layout>
            <Header />
            <FriendSelectBanner />
            <CategorySection />
            <CampaignBanner />
            <GiftRankingSection />
          </Layout>
        } />
        <Route path="/login" element={
          <LoginPage />
        } />
      </Routes>

    </>
  );
}

export default App;
