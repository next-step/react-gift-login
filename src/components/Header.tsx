import React from 'react';
import styled from '@emotion/styled';
import { FiUser } from 'react-icons/fi';
import { FaChevronRight } from 'react-icons/fa';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <FiUser size={24} />
        <Title>{title}</Title>
        <FaChevronRight size={16} />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 720px;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.spacing2};`};
`;

const Title = styled.div`
  ${({ theme }) => `
    font-size: ${theme.font.title1Bold.size};
    font-weight: ${theme.font.title1Bold.weight};
    line-height: ${theme.font.title1Bold.lineHeight};
  `}
`;
