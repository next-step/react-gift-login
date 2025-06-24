import PresentItem from './PresentItem'
import StyledPresentDiv from '@/styles/StyledPresentDiv'

const Present = () => {
  return (
    <>
      <p>선물 테마</p>
      <StyledPresentDiv className='grid5'>
        <PresentItem></PresentItem>
      </StyledPresentDiv>
    </>
  )
}

export default Present
