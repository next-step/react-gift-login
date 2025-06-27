import { Global } from "@emotion/react";
import { reset } from "./styles/reset";
import { globalStyle } from "./styles/globalStyle";
import { NavigationBar } from "./components/NavigationBar";
import { CategorySection } from "./components/CategorySection";
import { KakaoTechCampusBanner } from "./components/KakaoTechCampusBanner";
import { FriendBanner } from "./components/FriendBanner";
import { RankingSection } from "./components/RankingSection";

function App() {
  return (
    <>
      <Global styles={reset} />
      <Global styles={(theme) => globalStyle(theme)} />
      <NavigationBar />
      <FriendBanner />
      <CategorySection />
      <KakaoTechCampusBanner />
      <RankingSection />
    </>
  );
}

export default App;
