import styled from '@emotion/styled';

const FreiendBoxWrapper = styled.div`
  background-color: gray;
  padding: 16px;
`;

const FreiendBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  padding: 12px 16px;
  cursor: pointer;
`;

const PlusButton = styled.button`
  background: none;
  border: none;
  padding: 4px;

  background-color: #ffe812;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 12px;
`;

const GuideText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const FreiendSelector = () => {
  return (
    <FreiendBoxWrapper>
      <FreiendBox>
        <PlusButton>+</PlusButton>
        <GuideText>선물할 친구를 선택해주세요</GuideText>
      </FreiendBox>
    </FreiendBoxWrapper>
  );
};

export default FreiendSelector;
