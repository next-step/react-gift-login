import {
  Wrapper,
  BarButton,
} from "@/components/RankSelectionBar/RankSelectionBar.style";

interface RankSelectionBarProps {
  tabs: { rankType: string; label: string }[];
  selected: string;
  onSelect: (rankType: string) => void;
}

function RankSelectionBar({ tabs, selected, onSelect }: RankSelectionBarProps) {
  return (
    <Wrapper>
      {tabs.map((tab) => (
        <BarButton
          key={tab.rankType}
          active={selected === tab.rankType}
          onClick={() => onSelect(tab.rankType)}
        >
          {tab.label}
        </BarButton>
      ))}
    </Wrapper>
  );
}

export default RankSelectionBar;
