import styled from '@emotion/styled'
import { FiPlus } from "react-icons/fi";

const Wrapper = styled.section`
  ${({ theme }) => `
    background: ${theme.colors.gray200};
  `}
  padding: 18px;
`
const Container = styled.div`
  ${({ theme }) => `
    background: ${theme.colors.gray00};
  `}
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px;
  border-radius: 20px;
`
const PlusButton = styled.button`
  ${({ theme }) => `
    background: ${theme.colors.kakaoYellow};
  `}
  border: none;
  border-radius: 20px;
  padding: 12px;
  cursor: pointer;
`
const Title = styled.h1`
  ${({ theme }) => `
    color: ${theme.colors.textDefault};
    font-size: ${theme.typography.title1Bold.fontSize};
    font-weight: ${theme.typography.title1Bold.fontWeight};
    line-height: ${theme.typography.title1Bold.lineHeight};
  `}
`
const SelectFriendSection = () => {
  return (
    <Wrapper>
      <Container>
        <PlusButton><FiPlus size = {30}/></PlusButton>
        <Title>선물할 친구를 선택해 주세요.</Title>
      </Container>
    </Wrapper>
  )

}

export default SelectFriendSection;
