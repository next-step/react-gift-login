import styled from '@emotion/styled';
//컴포넌트의 가독성을 좋게 하기 위해 styled방식으로 바꾸었습니다.

const FriendSelector = () => {
  return (
    <Section>
      <Button>
        <IconContainer>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a3038" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </IconContainer>
        <Text>선물할 친구를 선택해 주세요.</Text>
      </Button>
    </Section>
  );
};

export default FriendSelector; 

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 12px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.spacing3};
  width: 42px;
  height: 42px;
  background-color: ${({ theme }) => theme.semantic.brand.kakaoYellow};
  border-radius: 18px;
`;

const Text = styled.p`
  ${({ theme }) => theme.typography.subtitle1Bold}
  color: ${({ theme }) => theme.semantic.text.default};
`;