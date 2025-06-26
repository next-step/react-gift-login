import { Global } from "@emotion/react";
import { reset } from "./styles/reset";
import { globalStyle } from "./styles/globalStyle";
import { NavigationBar } from "./components/NavigationBar";
import { CategorySection } from "./components/CategorySection";
import { KakaoTechCampusBanner } from "./components/KakaoTechCampusBanner";
import { FriendBanner } from "./components/FriendBanner";

function App() {
  return (
    <>
      <Global styles={reset} />
      <Global styles={(theme) => globalStyle(theme)} />
      <NavigationBar />
      <FriendBanner />
      <CategorySection />
      <KakaoTechCampusBanner />
      <div>홈 화면입니다</div>
    </>
  );
}

export default App;
