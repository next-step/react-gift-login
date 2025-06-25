import CheerUpPanel from "@src/components/CheerUpPanel";
import GiftThemePanel from "@src/components/GiftThemePanel";
import NavBar from "@src/components/NavBar";
import RecipientSelector from "@src/components/RecipientSelector";

function Mainpage() {
  return (
    <>
      <NavBar />
      <RecipientSelector />
      <GiftThemePanel />
      <CheerUpPanel />
    </>
  );
}

export default Mainpage;
