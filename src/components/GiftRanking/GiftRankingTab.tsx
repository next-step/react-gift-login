import styled from '@emotion/styled';
import { tabs } from '@/constants/RankingTabs';
import type { TabValue } from '@/constants/RankingTabs';


type Props = {
  selected: TabValue;
  onChange: (value: TabValue) => void;
};

const GiftRankingTab = ({selected, onChange}:Props) => {
  return (
    <TabContainer>
      {tabs.map(tab => (
        <TabButton
          key={tab.value}
          selected={selected === tab.value}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabContainer>
  );
};

export default GiftRankingTab;

const TabContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 8px;
  margin-bottom: 16px;
`;

const TabButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 10px 0;
  font-size: 14px;
  font-weight: ${({ selected }) => (selected ? '700' : '500')};
  border: none;
  background-color: ${({ theme }) => theme.colors.blue100};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.blue900 : theme.textColors.default};
  border-radius: 8px;
  cursor: pointer;

`;
