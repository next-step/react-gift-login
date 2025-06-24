import { CATEGORY_DATA } from '@/assets/CATEGORY_DATA'
import styled from '@emotion/styled'
import StyledPresentItemDiv from '@styles/StyledPresentItemDiv'

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
`
const StyledP = styled.p`
  font-size: 15px;
`

const PresentItem = () => {
  return (
    <>
      {CATEGORY_DATA.map((item) => (
        <StyledPresentItemDiv key={item.themeId} className='border'>
          <StyledImage src={item.image} alt={item.name} />
          <StyledP>{item.name}</StyledP>
        </StyledPresentItemDiv>
      ))}
    </>
  )
}

export default PresentItem
