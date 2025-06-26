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

const StyledPlusContainer = styled.div`
  background-color: ${({ theme }) => theme.symenticPalette.kakaoYellow};
  margin: 10px;
  border-radius: 20px;
  padding: 20px;
`;

const PresentThemeConatiner = () => {
  return (
    <StyledPresentContainer>
      <StyledPresentP>선물 테마</StyledPresentP>
      <StyledPresentThemeDiv>
        <PresentThemeItem></PresentThemeItem>
      </StyledPresentThemeDiv>
      <div>
        <StyledPlusContainer>
          <p>카카오테크 캠퍼스 3기여러분</p>
          <p>프론트엔드 2단계 과제 화이팅!</p>
        </StyledPlusContainer>
      </div>
    </StyledPresentContainer>
  );
};

export default PresentThemeConatiner;
