import {
  AddIcon,
  AddIconWrapper,
  BannerCard,
  BannerMessage,
  GiftBannerContainer,
} from './GiftBanner.styles';
import PlusIconSvg from './icons/plus.svg';

function GiftBanner() {
  return (
    <GiftBannerContainer>
      <BannerCard>
        <AddIconWrapper>
          <AddIcon src={PlusIconSvg} />
        </AddIconWrapper>
        <BannerMessage>선물할 친구를 선택해주세요.</BannerMessage>
      </BannerCard>
    </GiftBannerContainer>
  );
}

export default GiftBanner;
