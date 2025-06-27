import { category_data } from '@assets/CATEGORY_DATA';
import styled from '@emotion/styled';

const StyledImage = styled.img`
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
  padding: 4px;
`;
const PresentThemeItem = () => {
  return (
    <>
      {category_data.map((item) => (
        <StyledPresentThemeItemDiv key={item.themeId} className='border'>
          <StyledImage src={item.image} alt={item.name} />
          <StyledP>{item.name}</StyledP>
        </StyledPresentThemeItemDiv>
      ))}
    </>
  );
};

export default PresentThemeItem;
