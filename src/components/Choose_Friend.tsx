import styled from '@emotion/styled';

export default function Choose_Friend() {
  return (
    <Wrapper>
      <PlusButton>+</PlusButton>
      <Message>선물한 친구를 선택해 주세요.</Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background-color: #FFFFFFFF;
    margin: 20px;
    border-radius: 18px;
    cursor: pointer;
`;

const PlusButton = styled.button`
    background-color: #fee500;
    border: none;
    border-radius: 16px;
    width: 40px;
    height: 40px;
    font-size: 24px;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    transition: background-color 0.2s ease;

  &:hover {
    background-color: #fada0a;
  }
`;

const Message = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #333;
`;
