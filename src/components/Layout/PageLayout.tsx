import type { ReactNode } from 'react';
import styled from '@emotion/styled';

interface PageLayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

const PageLayout = ({ children }: PageLayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageLayout;
