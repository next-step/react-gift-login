import styled from "@emotion/styled";

const Container = styled.section`
  height: 80px;
  padding: 15px;
`;
const Content = styled.button`
  border-radius: 15px;
  border: none;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background_color.default};
  padding: 15px;
  gap: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const PlusDiv = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.semantic_color.kakaoYellow};
`;
const Msg = styled.p`
  width: 100%;
  text-align: start;
  font: ${({ theme }) => theme.typography.body1Bold};
`;
const Friend = () => {
  return (
    <Container>
      <Content>
        <PlusDiv>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2a3038"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </PlusDiv>
        <Msg>선물할 친구를 선택해 주세요.</Msg>
      </Content>
    </Container>
  );
};

export default Friend;
