import styled from '@emotion/styled';
import SubTab from '../SubTab/SubTab';

const TabContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface TabContentWrapperPropsType {
  selectedTabIdx: number;
  setSelectedTabIdx: (idx: number) => void;
  children: React.ReactNode;
}

function TabContentWrapper({
  selectedTabIdx,
  setSelectedTabIdx,
  children,
}: TabContentWrapperPropsType) {
  return (
    <TabContentContainer>
      <SubTab selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx} />
      {children}
    </TabContentContainer>
  );
}

export default TabContentWrapper;
