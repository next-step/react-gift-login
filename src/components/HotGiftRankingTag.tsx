import styled from "@emotion/styled";

interface TagProps {
  isSelected: boolean;
  onClick: () => void;
  tagEmoji: string;
  tagText: string;
}

const TagContainer = styled.button<{ isSelected: boolean }>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "58px",
  height: "86px",
  gap: `${theme.spacing2}`,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  columnGap: `${theme.spacing1}`,
  padding: `${theme.spacing2}`,
  borderRadius: "8px",
  transition: "all 0.2s ease",
}));

const TagWrapper = styled.div<{ isSelected: boolean }>(
  ({ theme, isSelected }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    borderRadius: "16px",
    backgroundColor: isSelected ? theme.color.blue[700] : theme.color.blue[100],
    color: isSelected ? "white" : theme.color.gray[700],
    fontSize: "14px",
    transition: "all 0.2s ease",
    transform: isSelected ? "scale(1.05)" : "scale(1)",
  }),
);

const TagText = styled.p<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  fontSize: `${theme.typography.label1Regular.fontSize}`,
  lineHeight: `${theme.typography.label1Regular.lineHeight}`,
  fontWeight: isSelected
    ? theme.typography.label1Bold.fontWeight
    : theme.typography.label1Regular.fontWeight,
  color: isSelected ? theme.color.blue[700] : theme.color.gray[700],
  transition: "all 0.2s ease",
  textAlign: "center",
  whiteSpace: "nowrap",
}));

const HotGiftRankingTag = ({
  isSelected,
  onClick,
  tagEmoji,
  tagText,
}: TagProps) => {
  return (
    <TagContainer isSelected={isSelected} onClick={onClick}>
      <TagWrapper isSelected={isSelected}>{tagEmoji}</TagWrapper>
      <TagText isSelected={isSelected}>{tagText}</TagText>
    </TagContainer>
  );
};

export default HotGiftRankingTag;
