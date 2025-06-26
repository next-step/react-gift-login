import styled from '@emotion/styled';

const SubTabContainer = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue[200]};
  border: 1px solid ${({ theme }) => theme.colors.blue[400]};
  box-sizing: border-box;
  padding: 13px;
  border-radius: 5px;
`;

const SubTabButton = styled.button<{ isSelected: boolean }>`
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.blue[700] : theme.colors.blue[500]};
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: ${({ isSelected }) => (isSelected ? 900 : 400)};
`;

interface SubTabProps {
  selectedTabIdx: number;
  setSelectedTabIdx: (idx: number) => void;
}

function SubTab({ selectedTabIdx, setSelectedTabIdx }: SubTabProps) {
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
