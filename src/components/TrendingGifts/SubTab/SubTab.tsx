import styled from '@emotion/styled';

const SubTabContainer = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border: 1px solid ${({ theme }) => theme.colors.blue[300]};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

const SubTabButton = styled.button<{ isSelected: boolean }>`
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[500]};
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme, isSelected }) =>
    isSelected
      ? theme.typography.label.label1Bold.fontWeight
      : theme.typography.label.label1Regular.fontWeight};
`;

interface SubTabPropsType {
  selectedTabIdx: number;
  setSelectedTabIdx: (idx: number) => void;
}

function SubTab({ selectedTabIdx, setSelectedTabIdx }: SubTabPropsType) {
  const tabs = ['받고 싶어한', '많이 선물한', '위시로 받은'];

  return (
    <SubTabContainer>
      {tabs.map((el, idx) => (
        <SubTabButton
          key={idx}
          isSelected={idx === selectedTabIdx}
          onClick={() => setSelectedTabIdx(idx)}
        >
          {el}
        </SubTabButton>
      ))}
    </SubTabContainer>
  );
}

export default SubTab;
