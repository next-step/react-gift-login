import styled from '@emotion/styled';

export const NavigationContainer = styled.section`
  max-width: 720px;
  width: 100%;
  height: 3rem;
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
  width: ${({ theme }) => theme.spacing[6]};
  height: ${({ theme }) => theme.spacing[6]};
`;

export const ProfileIcon = styled.img`
  width: ${({ theme }) => theme.spacing[5]};
  height: ${({ theme }) => theme.spacing[5]};
`;
