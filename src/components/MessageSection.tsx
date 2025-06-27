import styled from '@emotion/styled';
//컴포넌트의 가독성을 좋게 하기 위해 styled방식으로 바꾸었습니다.

const MessageSection = () => {
  return (
    <Section>
      <MessageContainer>
        <Subtitle>카카오테크 캠퍼스 3기여러분</Subtitle>
        <Title>프론트엔드 2단계 과제 화이팅! 🎉</Title>
      </MessageContainer>
    </Section>
  );
};

export default MessageSection; 

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
`;

const MessageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.semantic.brand.kakaoYellow};
  border-radius: 12px;
`;

const Title = styled.p`
  ${({ theme }) => theme.typography.body2Bold}
  color: ${({ theme }) => theme.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

const Subtitle = styled.p`
  ${({ theme }) => theme.typography.label1Regular}
  color: ${({ theme }) => theme.colors.gray[700]};
`;