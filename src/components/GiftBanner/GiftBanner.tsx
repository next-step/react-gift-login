import {
  AddIcon,
  AddIconWrapper,
  BannerCard,
  BannerMessage,
  GiftBannerSection,
} from './GiftBanner.styles';
import PlusIconSvg from './icons/plus.svg';

function GiftBanner() {
  return (
    <GiftBannerSection>
      <BannerCard>
        <AddIconWrapper>
          <AddIcon src={PlusIconSvg} />
        </AddIconWrapper>
        <BannerMessage>선물할 친구를 선택해주세요.</BannerMessage>
      </BannerCard>
    </GiftBannerSection>
  );
}

export default GiftBanner;
