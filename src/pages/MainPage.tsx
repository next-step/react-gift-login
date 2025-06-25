import CheerUpPanel from "@src/components/CheerUpPanel";
import GiftThemePanel from "@src/components/GiftThemePanel";
import NavBar from "@src/components/NavBar";
import RealTimeRankPanel from "@src/components/RealTimeRankPanel/RealTimeRankPanel";
import RecipientSelector from "@src/components/RecipientSelector";

function Mainpage() {
  return (
    <>
      <NavBar />
      <RecipientSelector />
      <GiftThemePanel />
      <CheerUpPanel />
      <RealTimeRankPanel />
    </>
  );
}

export default Mainpage;
