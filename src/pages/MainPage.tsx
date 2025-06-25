import CheerUpPanel from "@src/components/CheerUpPanel";
import NavBar from "@src/components/NavBar";
import RecipientSelector from "@src/components/RecipientSelector";

function Mainpage() {
  return (
    <>
      <NavBar />
      <RecipientSelector />
      <CheerUpPanel />
    </>
  );
}

export default Mainpage;
