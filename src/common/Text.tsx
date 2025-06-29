import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import React from 'react';

type TypographyKey = keyof typeof theme.typography;

interface TextProps {
  fontSize?: TypographyKey;
  fontWeight?: TypographyKey;
  children: React.ReactNode;
}

const Text = ({
  fontSize = 'body1Regular',
  fontWeight = 'body1Regular',
  children,
}: TextProps) => {
  return (
    <StyledText fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.div<{
  fontSize: TypographyKey;
  fontWeight: TypographyKey;
}>`
  font-size: ${({ theme, fontSize }) => theme.typography[fontSize].fontSize};
  font-weight: ${({ theme, fontWeight }) =>
    theme.typography[fontWeight].fontWeight};
`;
