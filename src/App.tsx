/** @jsxImportSource @emotion/react */
import MobileLayout from "./layouts/MobileLayout";
import NavBar from "./components/NavBar";
import FriendSelect from "./components/FriendSelect";

export default function App() {
  return (
    <MobileLayout>
      <NavBar />
      <FriendSelect />
    </MobileLayout>
  );
}
