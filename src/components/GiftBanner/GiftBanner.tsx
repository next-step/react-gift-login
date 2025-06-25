import styled from '@emotion/styled';
import PlusIconSvg from './icons/plus.svg';

const GiftBannerContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.width.container};
  width: 100%;
  height: 7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${({ theme }) => theme.components.navigationBar.height};
  background-color: ${({ theme }) => theme.colors.background.disabled};
`;

const BannerCard = styled.button`
  cursor: pointer;
  border: 0;
  width: 95%;
  padding: 1rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.background.default};

  display: flex;
  align-items: center;
`;

const AddIconWrapper = styled.div`
  cursor: pointer;
  border: 0;
  background-color: ${({ theme }) => theme.colors.brand.kakaoYellow};
  padding: 0.7rem;
  border-radius: 0.9rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: ${({ theme }) => theme.spacing[3]};
`;

const AddIcon = styled.img`
  width: ${({ theme }) => theme.spacing[5]};
  height: ${({ theme }) => theme.spacing[5]};
`;

const BannerMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
`;

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
