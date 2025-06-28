import styled from '@emotion/styled';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: white;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.title1Bold}
  color: ${({ theme }) => theme.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: ${({ theme }) => theme.spacing.spacing5};
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 52px;
  height: 52px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

export const Name = styled.span`
  ${({ theme }) => theme.typography.label2Regular}
  color: ${({ theme }) => theme.semantic.text.default};
  text-align: center;
`; 