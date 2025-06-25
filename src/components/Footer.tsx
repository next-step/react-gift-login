// src/components/Footer.tsx
import React from 'react';
import styled from '@emotion/styled';
import { spaces, fontSizes } from '../tokens/designTokens';

const Wrap = styled.footer`
  padding: ${spaces.md};
  text-align: center;
  font-size: ${fontSizes.body};
  color: #999;
`;

export default function Footer() {
  return (
    <Wrap>© 2025 Kakao Corp. All rights reserved.</Wrap>
  );
}
