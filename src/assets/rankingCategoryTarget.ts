import type { RankingCategoryTargetType } from "@/types/RankingCategoryTargetType";

export const rankingCategoryTarget: RankingCategoryTargetType[] = [
  {
    image: "ALL",
    name: "전체",
    targetType: "ALL",
  },
  {
    image: "👩🏻",
    name: "여성이",
    targetType: "FEMALE",
  },
  {
    image: "👨🏻",
    name: "남성이",
    targetType: "MALE",
  },
  {
    image: "👦🏻",
    name: "청소년이",
    targetType: "TEEN",
  },
];
