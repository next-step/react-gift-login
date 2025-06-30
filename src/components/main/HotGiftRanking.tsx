import {
  HotGiftRankingGrid,
  HotGiftRankingTab,
  HotGiftRankingTag,
} from "@/components/main";
import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";

const HotGiftRankingSectionContainer = styled.section(props => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  padding: `0 ${props.theme.spacing4}`,
  backgroundColor: `${props.theme.color.gray[0]}`,
}));

const HotGiftRankingSectionTitle = styled.h3(props => ({
  fontSize: `${props.theme.typography.title1Bold.fontSize}`,
  fontWeight: `${props.theme.typography.title1Bold.fontWeight}`,
  lineHeight: `${props.theme.typography.title1Bold.lineHeight}`,
  color: `${props.theme.color.gray[900]}`,
  marginBottom: `${props.theme.spacing5}`,
}));

const HotGiftRankingSectionTagContainer = styled.div(props => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "67px",
  marginBottom: `${props.theme.spacing4}`,
}));

const tags = [
  { id: "ALL", emoji: "ALL", text: "전체" },
  { id: "FEMALE", emoji: "👩", text: "여성이" },
  { id: "MALE", emoji: "👨", text: "남성이" },
  { id: "TEEN", emoji: "👦", text: "청소년이" },
];

export const HotGiftRanking = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTag = searchParams.get("targetType") || "ALL";
  const selectedTab = searchParams.get("rankType") || "MANY_WISH";

  const handleTagChange = (tagId: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("targetType", tagId);
    setSearchParams(newParams);
  };

  const handleTabChange = (tabId: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("rankType", tabId);
    setSearchParams(newParams);
  };

  return (
    <HotGiftRankingSectionContainer>
      <HotGiftRankingSectionTitle>
        실시간 급상승 선물랭킹
      </HotGiftRankingSectionTitle>
      <HotGiftRankingSectionTagContainer>
        {tags.map(tag => (
          <HotGiftRankingTag
            key={tag.id}
            isSelected={selectedTag === tag.id}
            onClick={() => handleTagChange(tag.id)}
            tagEmoji={tag.emoji}
            tagText={tag.text}
          />
        ))}
      </HotGiftRankingSectionTagContainer>
      <HotGiftRankingTab
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />
      <HotGiftRankingGrid />
    </HotGiftRankingSectionContainer>
  );
};
