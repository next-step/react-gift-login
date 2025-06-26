import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

interface PromotionBannerProps {
  subtitle: string;
  title: string;
  onClick?: () => void;
}

const BannerContainer = styled.div`
  padding: 0 ${theme.spacing.spacing4} ${theme.spacing.spacing4};
`;

const Banner = styled.button`
  width: 100%;
  background: ${theme.colors.kakaoYellow};
  border: none;
  border-radius: 12px;
  padding: ${theme.spacing.spacing4} ${theme.spacing.spacing5};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  text-align: left;

  &:hover {
    background: ${theme.colors.kakaoYellowHover};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(254, 229, 0, 0.3);
  }

  &:active {
    background: ${theme.colors.kakaoYellowActive};
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(254, 229, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const BannerSubtitle = styled.span`
  display: block;
  font-size: ${theme.typography.label1Regular.fontSize};
  font-weight: ${theme.typography.label1Regular.fontWeight};
  line-height: ${theme.typography.label1Regular.lineHeight};
  color: ${theme.colors.gray700};
  margin-bottom: ${theme.spacing.spacing0};
`;

const BannerTitle = styled.span`
  display: block;
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
  line-height: ${theme.typography.body1Bold.lineHeight};
  color: ${theme.colors.gray1000};
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: ${theme.typography.body2Bold.fontSize};
  }
`;

const Emoji = styled.span`
  margin-left: ${theme.spacing.spacing1};
  font-size: 1.2em;
`;

export function PromotionBanner({
  subtitle,
  title,
  onClick,
}: PromotionBannerProps) {
  const handleClick = () => {
    console.log('프로모션 배너 클릭:', title);
    onClick?.();
  };

  return (
    <BannerContainer>
      <Banner onClick={handleClick}>
        <BannerSubtitle>{subtitle}</BannerSubtitle>
        <BannerTitle>
          {title}
          <Emoji>🎉</Emoji>
        </BannerTitle>
      </Banner>
    </BannerContainer>
  );
}
