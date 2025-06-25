import styled from "@emotion/styled";
import RoundButton from "@src/components/RoundButton";

function RecipientSelector() {
  return (
    <RecipientSelectorWrapper>
      <InnerBox>
        <RoundButton color="yellow" children="+"></RoundButton>
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
  background-color: grey;
  border-radius: 20px;
`;

const RecipientSelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: green;
`;

export default RecipientSelector;
