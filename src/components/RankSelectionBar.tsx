import styled from '@emotion/styled';

interface RankSelectionBarProps {
  tabs: { rankType: string; label: string }[];
  selected: string;
  onSelect: (rankType: string) => void;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.blue00};
  border: 1px solid ${({ theme }) => theme.colors.blue200};
  border-radius: 16px;
  padding: 16px 0;
  width: 100%;
  max-width: 800px;
`;

const BarButton = styled.button<{ active: boolean }>`
  flex: 1;
  background: none;
  border: none;
  color: ${({ active, theme }) =>
    active ? theme.colors.blue600 : theme.colors.blue400};
  font-weight: ${({ active }) => (active ? 700 : 400)};
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  cursor: pointer;
  transition: color 0.2s, font-weight 0.2s;
`;

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