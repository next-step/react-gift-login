import styled from '@emotion/styled'
import PresentItem from './PresentItem'
import StyledPresentDiv from '@/styles/StyledPresentDiv'

const Present = () => {
  const StyledPresentP = styled.p`
    font-size: 20px;
    margin: 5px;
    font-weight: 700;
  `

  return (
    <>
      <StyledPresentP>선물 테마</StyledPresentP>
      <StyledPresentDiv className='grid5'>
        <PresentItem></PresentItem>
      </StyledPresentDiv>
    </>
  )
}

export default Present
