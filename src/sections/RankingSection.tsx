import styled from '@emotion/styled';
import AgeSelectionButton from "@/components/AgeSelectionButton";
import RankSelectionBar from "@/components/RankSelectionBar";
import { useState } from "react";

const Wrapper = styled.section`
  padding: 18px;
`;

const Title = styled.h1`
  ${({ theme }) => `
    color: ${theme.colors.textDefault};
    font-size: ${theme.typography.title1Bold.fontSize};
    font-weight: ${theme.typography.title1Bold.fontWeight};
    line-height: ${theme.typography.title1Bold.lineHeight};
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

const AGE_BUTTONS = [
  { ageType: 'ALL', label: '전체', emoji: '😊' },
  { ageType: 'FEMALE', label: '여성이', emoji: '👧🏻' },
  { ageType: 'MALE', label: '남성이', emoji: '🧑🏻' },
  { ageType: 'YOUTH', label: '청소년이', emoji: '👦🏻' },
];
const TABS = [
  { rankType: 'MANY_WISH', label: '받고 싶어한' },
  { rankType: 'MANY_RECEIVE', label: '많이 선물한' },
  { rankType: 'MANY_WISH_RECEIVE', label: '위시로 받은' },
];

const RankingSection = () => {
  const [selectedAge, setSelectedAge] = useState('ALL');
  const [selectedTab, setSelectedTab] = useState('MANY_WISH');

  return (
    <Wrapper>
      <Title>실시간 급상승 선물랭킹</Title>
      <ButtonGroup>
        {AGE_BUTTONS.map((btn) => (
          <AgeSelectionButton
            key={btn.ageType}
            ageType={btn.ageType}
            label={btn.label}
            emoji={btn.emoji}
            selected={selectedAge === btn.ageType}
            onClick={setSelectedAge}
          />
        ))}
      </ButtonGroup>
      <RankSelectionBar
        tabs={TABS}
        selected={selectedTab}
        onSelect={setSelectedTab}
      />
    </Wrapper>
  );
};

export default RankingSection;