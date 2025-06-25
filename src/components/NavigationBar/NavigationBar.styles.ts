import styled from '@emotion/styled';

export const NavigationContainer = styled.section`
  max-width: ${({ theme }) => theme.layout.width.container};
  width: 100%;
  height: ${({ theme }) => theme.components.navigationBar.height};
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 ${({ theme }) => theme.spacing[2]};
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
`;

export const IconButton = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
`;

export const LeftIcon = styled.img`
  width: ${({ theme }) => theme.components.navigationBar.leftIconSize};
  height: ${({ theme }) => theme.components.navigationBar.leftIconSize};
`;

export const ProfileIcon = styled.img`
  width: ${({ theme }) => theme.components.navigationBar.profileIconSize};
  height: ${({ theme }) => theme.components.navigationBar.profileIconSize};
`;
