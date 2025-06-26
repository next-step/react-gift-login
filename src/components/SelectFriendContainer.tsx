import styled from '@emotion/styled';

const StyledSelectFriendOuterContainer = styled.div`
  width: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSelectFriendBtn = styled.div`
  background-color: ${({ theme }) => theme.symenticPalette.backgroundDefault};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  margin: 20px;
`;
const StyledSelectFriendBtnPlus = styled.div`
  background-color: ${({ theme }) => theme.symenticPalette.kakaoYellow};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 42px;
  margin: 10px;
  border-radius: 15px;
  font: ${({ theme }) => theme.typography.label2Bold};
`;

const StyledSelectFriendP = styled.p`
  width: 100%;
`;

const SelectFriendContainer = () => {
  return (
    <StyledSelectFriendOuterContainer>
      <StyledSelectFriendBtn>
        <StyledSelectFriendBtnPlus>+</StyledSelectFriendBtnPlus>
        <StyledSelectFriendP>선물할 친구를 선택해 주세요</StyledSelectFriendP>
      </StyledSelectFriendBtn>
    </StyledSelectFriendOuterContainer>
  );
};

export default SelectFriendContainer;
