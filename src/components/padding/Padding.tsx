import styled  from '@emotion/styled'; 
export const PaddingSm = styled.div`
  padding: 4px;
`;
export const PaddingMd = styled.div`
        width: 100%;
        height: ${({theme})=>theme.spacing.spacing8};
        background-color: ${({theme})=>theme.colors.gray.gray00};
`;
export const PaddingLg = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing.spacing10};
  background-color: ${({ theme }) => theme.colors.gray.gray00};
`;
