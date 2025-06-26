import { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const filters = [
  { key: 'all', label: '전체', icon: 'ALL' },
  { key: 'female', label: '여성', icon: '👩' },
  { key: 'male', label: '남성', icon: '👨' },
  { key: 'teen', label: '청소년', icon: '🧒' },
] as const;

type FilterKey = (typeof filters)[number]['key'];

const IconFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${theme.typography.spacing.spacing4};
`;

const IconWrapper = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) =>
    selected ? theme.colors.blue700 : theme.colors.blue100};
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 8px;
`;

const Label = styled.div<{ selected: boolean }>`
  color: ${({ selected }) =>
    selected ? theme.colors.blue700 : theme.colors.gray600};
  ${theme.typography.body2Regular};
  text-align: center;
`;

const Box = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.gray00};
  border: ${theme.colors.gray00};
  cursor: pointer;
`;
const IconFilterItem = ({
  label,
  icon,
  selected,
  onClick,
}: {
  label: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <Box onClick={onClick}>
      <IconWrapper selected={selected}>{icon}</IconWrapper>
      <Label selected={selected}>{label}</Label>
    </Box>
  );
};

const tabOptions = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const Container = styled.div`
  width: 100%;
  padding: 24px 16px;
  background-color: ${theme.colors.backgroundDefault};
`;

const Heading = styled.h2`
  ${theme.typography.title2Bold};
  margin-bottom: 16px;
  padding-left: 8px;
`;

const TabBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.blue100};
  border-radius: 8px;
  overflow: hidden;
`;

const TabButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 12px 0;
  text-align: center;
  ${theme.typography.body2Bold};
  color: ${({ selected }) =>
    selected ? theme.colors.blue700 : theme.colors.blue300};
  background-color: transparent;
  border: none;
`;

export default function GiftRankingFilter() {
  const [selected, setSelected] = useState<FilterKey>('all');
  const [selectedTab, setSelectedTab] = useState('받고 싶어한');

  return (
    <Container>
      <Heading>실시간 급상승 선물랭킹</Heading>

      <IconFilterContainer>
        {filters.map(({ key, label, icon }) => (
          <IconFilterItem
            key={key}
            label={label}
            icon={icon}
            selected={selected === key}
            onClick={() => setSelected(key)}
          />
        ))}
      </IconFilterContainer>

      <TabBar>
        {tabOptions.map(tab => (
          <TabButton
            key={tab}
            selected={selectedTab === tab}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </TabButton>
        ))}
      </TabBar>
    </Container>
  );
}
