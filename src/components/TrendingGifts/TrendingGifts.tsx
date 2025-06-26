import styled from '@emotion/styled';
import { useState } from 'react';
import { AllTab, WomenTab, MenTab, TeenTab } from './TabComponents/TabComponents';

const TrendingGiftsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 2.5rem;
`;

const TitleWarpper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
`;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 95%;
  box-sizing: border-box;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
`;

const MoreInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-top: 20px;
  padding: 12px;
  border: 1px solid #ddd;
`;

const MoreInfo = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
  color: #666;
`;

const MainTabButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const TabIconContainer = styled.div<{ isSelected: boolean }>`
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[200]};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  font-size: 14px;
  font-weight: 700;
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.gray[0] : theme.colors.blue[500])};
`;

const TabLabel = styled.p<{ isSelected: boolean }>`
  font-size: 0.9rem;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.gray[700]};
  font-weight: ${({ isSelected }) => (isSelected ? 900 : 400)};
  margin: 0;
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
