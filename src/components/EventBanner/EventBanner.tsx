import styled from '@emotion/styled';

const EventBannerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;

  width: 95%;
  height: 4rem;

  box-sizing: border-box;
  padding: 1rem;
  gap: 5px;

  background-color: ${({ theme }) => theme.colors.brand.kakaoYellow};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const SectionTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Bold.fontWeight};
`;

const SectionSubTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

function EventBanner() {
  return (
    <EventBannerSection>
      <BannerCard>
        <SectionSubTitle>카카오테크 캠퍼스 3기 여러분</SectionSubTitle>
        <SectionTitle>프론트엔드 2단계 과제 화이팅! 🎉</SectionTitle>
      </BannerCard>
    </EventBannerSection>
  );
}

export default EventBanner;
