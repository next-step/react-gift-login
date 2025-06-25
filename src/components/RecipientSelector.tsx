import styled from "@emotion/styled";
import RoundButton from "@src/utils/RoundButton";
import theme from "@src/styles/kakaoTheme";

function RecipientSelector() {
  return (
    <RecipientSelectorWrapper>
      <InnerBox>
        <RoundButton
          color={`${theme.colors.yellow.yellow600}`}
          children="+"
        ></RoundButton>
        <p>선물할 친구를 선택해 주세요.</p>
      </InnerBox>
    </RecipientSelectorWrapper>
  );
}

const InnerBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin: 20px;
  padding: 20px;
  width: 100%;
  background-color: white;
  border-radius: 20px;
`;

const RecipientSelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${theme.colors.gray.gray200};
`;

export default RecipientSelector;
