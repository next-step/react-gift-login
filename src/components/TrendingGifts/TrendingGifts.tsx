import styled from '@emotion/styled';
import { useState } from 'react';
import { AllTab, WomenTab, MenTab, TeenTab } from './TabComponents/TabComponents';

const TrendingGiftsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: ${({ theme }) => theme.spacing[11]};
`;

const TitleWarpper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${({ theme }) => theme.components.trendingGifts.contentWidth};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
`;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${({ theme }) => theme.components.trendingGifts.contentWidth};
  box-sizing: border-box;
  padding-top: ${({ theme }) => theme.spacing[6]};
  padding-bottom: ${({ theme }) => theme.spacing[3]};
`;

const MoreInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.components.trendingGifts.moreInfoWidth};
  margin-top: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: ${({ theme }) => theme.components.trendingGifts.subTab.borderWidth} solid
    ${({ theme }) => theme.colors.gray[400]};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

const MoreInfo = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
`;

const MainTabButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const TabIconContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[200]};
  width: ${({ theme }) => theme.spacing[11]};
  height: ${({ theme }) => theme.spacing[11]};

  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.label.label1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Bold.fontWeight};
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.gray[0] : theme.colors.blue[500])};
`;

const TabLabel = styled.p<{ isSelected: boolean }>`
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme, isSelected }) =>
    isSelected
      ? theme.typography.label.label1Bold.fontWeight
      : theme.typography.label.label1Regular.fontWeight};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.gray[700]};
`;

function TrendingGifts() {
  const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0);

  const tabs = [
    {
      name: '전체',
      icon: 'ALL',
      component: <AllTab />,
    },
    {
      name: '여성이',
      icon: '👩🏻',
      component: <WomenTab />,
    },
    {
      name: '남성이',
      icon: '👨🏻',
      component: <MenTab />,
    },
    {
      name: '청소년이',
      icon: '👦🏻',
      component: <TeenTab />,
    },
  ];

  return (
    <TrendingGiftsSection>
      <TitleWarpper>
        <SectionTitle>실시간 급상승 선물랭킹</SectionTitle>
      </TitleWarpper>
      <TabsWrapper>
        {tabs.map((el, idx) => (
          <MainTabButton key={idx} onClick={() => setSelectedTabIdx(idx)}>
            <TabIconContainer isSelected={idx === selectedTabIdx}>
              {el.icon === 'ALL' ? 'ALL' : el.icon}
            </TabIconContainer>
            <TabLabel isSelected={idx === selectedTabIdx}>{el.name}</TabLabel>
          </MainTabButton>
        ))}
      </TabsWrapper>
      {tabs[selectedTabIdx].component}
      <MoreInfoWrapper>
        <MoreInfo>더보기</MoreInfo>
      </MoreInfoWrapper>
    </TrendingGiftsSection>
  );
}

export default TrendingGifts;
