import { FriendBanner } from "@/components/FriendBanner";
import { CategorySection } from "@/components/CategorySection";
import { KakaoTechCampusBanner } from "@/components/KakaoTechCampusBanner";
import { RankingSection } from "@/components/RankingSection";

export default function HomePage() {
  return (
    <>
      <FriendBanner />
      <CategorySection />
      <KakaoTechCampusBanner />
      <RankingSection />
    </>
  );
}
