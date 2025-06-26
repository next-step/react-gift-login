import TheHeader from "@/components/TheHeader";
import PresentCategory from "@/components/PresentCategory";
import SelectFriendBox from "@/components/SelectFriendBox";
import FightingBox from "@/components/FightingBox";
import GiftsRanking from "@/components/GiftsRanking";

const MainPage = () => {
  return (
    <>
      <TheHeader />
      <SelectFriendBox />
      <PresentCategory />
      <FightingBox />
      <GiftsRanking />
    </>
  );
};

export default MainPage;
