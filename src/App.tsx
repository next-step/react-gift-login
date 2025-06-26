/** @jsxImportSource @emotion/react */
import MobileLayout from "./layouts/MobileLayout";
import NavBar from "./components/NavBar";
import FriendSelect from "./components/FriendSelect";
import GiftTheme from "./components/GiftTheme";

export default function App() {
  return (
    <MobileLayout>
      <NavBar />
      <main>
        <FriendSelect />
        <GiftTheme />
      </main>
    </MobileLayout>
  );
}
