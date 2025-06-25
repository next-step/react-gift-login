import styled from '@emotion/styled';

const StyledPresentItemDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.symenticPalette.kakaoYellow};
  padding: 4px;
`;
export default StyledPresentItemDiv;
