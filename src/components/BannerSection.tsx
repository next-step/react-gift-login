import styled from '@emotion/styled';

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[4]}`};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.semantic.kakaoYellow};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing[4]};
`;

const TopText = styled.p`
  ${({ theme }) => theme.typography.label.label2Regular};
  color: ${({ theme }) => theme.color.gray[700]};
`;

const BottomText = styled.p`
  ${({ theme }) => theme.typography.label.label1Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
`;

const BannerSection = () => {
  return (
    <Section>
      <TextWrapper>
        <TopText>카카오테크 캠퍼스 3기여러분</TopText>
        <BottomText>프론트엔드 2단계 과제 화이팅! 🎉</BottomText>
      </TextWrapper>
    </Section>
  );
};

export default BannerSection;
