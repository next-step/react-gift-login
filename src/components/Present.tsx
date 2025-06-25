import styled from '@emotion/styled';
import PresentItem from './PresentItem';

const StyledPrsentDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Present = () => {
  return (
    <StyledPrsentDiv>
      <PresentItem></PresentItem>
    </StyledPrsentDiv>
  );
};

export default Present;
