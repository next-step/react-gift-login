import HotGiftRankingGrid from "@/components/HotGiftRankingGrid";
import HotGiftRankingTab from "@/components/HotGiftRankingTab";
import HotGiftRankingTag from "@/components/HotGiftRankingTag";
import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";

const SectionContainer = styled.section(props => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  padding: `0 ${props.theme.spacing4}`,
  backgroundColor: "white",
}));

const SectionTitle = styled.h3(props => ({
  fontSize: `${props.theme.typography.title1Bold.fontSize}`,
  fontWeight: `${props.theme.typography.title1Bold.fontWeight}`,
  lineHeight: `${props.theme.typography.title1Bold.lineHeight}`,
  color: `${props.theme.color.gray[900]}`,
  marginBottom: `${props.theme.spacing5}`,
}));

const SectionTagContainer = styled.div(props => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "67px",
  marginBottom: `${props.theme.spacing4}`,
}));

const tags = [
  { id: "all", emoji: "ALL", text: "전체" },
  { id: "female", emoji: "👩", text: "여성이" },
  { id: "male", emoji: "👨", text: "남성이" },
  { id: "teen", emoji: "👦", text: "청소년이" },
];

const HotGiftRanking = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTag = searchParams.get("targetType") || "ALL";
  const selectedTab = searchParams.get("rankType") || "MANY_WISH";

  const handleTagChange = (tagId: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("targetType", tagId.toUpperCase());
    setSearchParams(newParams);
  };

  const handleTabChange = (tabId: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("rankType", tabId);
    setSearchParams(newParams);
  };

  return (
    <SectionContainer>
      <SectionTitle>실시간 급상승 선물랭킹</SectionTitle>
      <SectionTagContainer>
        {tags.map(tag => (
          <HotGiftRankingTag
            key={tag.id}
            isSelected={selectedTag === tag.id.toUpperCase()}
            onClick={() => handleTagChange(tag.id)}
            tagEmoji={tag.emoji}
            tagText={tag.text}
          />
        ))}
      </SectionTagContainer>
      <HotGiftRankingTab
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />
      <HotGiftRankingGrid />
    </SectionContainer>
  );
};

export default HotGiftRanking;
