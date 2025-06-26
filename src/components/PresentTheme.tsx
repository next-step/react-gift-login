import styled from '@emotion/styled';
import PresentThemeItem from './PresentThemeItem';

const StyledPresentThemeDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: green;
  width: 720px;
`;

const StyledPresentP = styled.p`
  font-size: 20px;
  margin: 5px;
  font-weight: 700;
`;
const StyledPresentContainer = styled.div`
  background-color: ${({ theme }) => theme.symenticPalette.backgroundDefault};
`;

const PresentTheme = () => {
  return (
    <StyledPresentContainer>
      <StyledPresentP>선물 테마</StyledPresentP>
      <StyledPresentThemeDiv>
        <PresentThemeItem></PresentThemeItem>
      </StyledPresentThemeDiv>
    </StyledPresentContainer>
  );
};

export default PresentTheme;
