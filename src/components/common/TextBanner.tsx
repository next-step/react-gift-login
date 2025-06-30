import styled from '@emotion/styled';
import type { Theme } from '@/styles/theme';

interface TextBannerProps {
  topText: string;
  bottomText: string;
  backgroundColor?: string;
  spacingBottom?: keyof Theme['spacing'];
}

const TextBanner = ({
  topText,
  bottomText,
  backgroundColor,
  spacingBottom = 8 as keyof Theme['spacing'],
}: TextBannerProps) => {
  return (
    <Section spacingBottom={spacingBottom}>
      <TextWrapper backgroundColor={backgroundColor}>
        <TopText>{topText}</TopText>
        <BottomText>{bottomText}</BottomText>
      </TextWrapper>
    </Section>
  );
};

export default TextBanner;

const Section = styled.section<{ spacingBottom: keyof Theme['spacing'] }>`
  padding: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[4]}`};
  margin-bottom: ${({ theme, spacingBottom }) => theme.spacing[spacingBottom]};
`;

const TextWrapper = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.color.semantic.kakaoYellow};
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
