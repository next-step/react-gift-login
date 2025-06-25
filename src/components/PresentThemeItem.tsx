import { CATEGORY_DATA } from '@/assets/CATEGORY_DATA';
import styled from '@emotion/styled';

const StyledImage = styled.img`
  width: 50px;
  height: 60px;
  margin: 5px;
`;
const StyledP = styled.p`
  font-size: 13px;
  margin: 3px;
`;
const StyledPresentThemeItemDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.symenticPalette.kakaoYellow};
  padding: 4px;
`;
const PresentThemeItem = () => {
  return (
    <>
      {CATEGORY_DATA.map((item) => (
        <StyledPresentThemeItemDiv key={item.themeId} className='border'>
          <StyledImage src={item.image} alt={item.name} />
          <StyledP>{item.name}</StyledP>
        </StyledPresentThemeItemDiv>
      ))}
    </>
  );
};

export default PresentThemeItem;
