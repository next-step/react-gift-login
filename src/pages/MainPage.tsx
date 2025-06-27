import CheerUpSection from "@/components/CheerUpSection";
import Header from "@/components/Header";
import HotGiftRanking from "@/components/HotGiftRanking";
import PresentTheme from "@/components/PresentTheme";
import SelectFriendSection from "@/components/SelectFriendSection";

const MainPage = () => {
  return (
    <>
      <Header />
      <SelectFriendSection />
      <PresentTheme />
      <CheerUpSection />
      <HotGiftRanking />
    </>
  );
};

export default MainPage;
