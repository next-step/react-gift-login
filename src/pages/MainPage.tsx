import PresentCategory from "@/components/PresentCategory";
import SelectFriendBox from "@/components/SelectFriendBox";
import FightingBox from "@/components/FightingBox";
import TheHeader from "@/components/TheHeader";

const MainPage = () => {
  return (
    <>
      <TheHeader />
      <SelectFriendBox />
      <PresentCategory />
      <FightingBox />
    </>
  );
};

export default MainPage;
