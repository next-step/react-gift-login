import {
  BannerCard,
  EventBannerSection,
  SectionSubTitle,
  SectionTitle,
} from './EventBanner.styles';

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
