import styled from '@emotion/styled'
import { FaChevronLeft, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacing.spacing14};
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.semantic.backgroundDefault};
  border-bottom: 1px solid ${({ theme }) => theme.colors.semantic.borderDefault};
  position: relative;
`

const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
`

const IconButton = styled.button`
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  color: ${({ theme }) => theme.colors.gray.gray800};
  z-index: 1;
`

const Header = () => {
  const navigate = useNavigate()

  const handleGoLogin = () => {
    navigate('/login')
  }

  return (
    <HeaderWrapper>
      <IconButton onClick={handleGoLogin}>
        <FaChevronLeft />
      </IconButton>
      <Title>선물하기</Title>
      <IconButton onClick={handleGoLogin}>
        <FaUser />
      </IconButton>
    </HeaderWrapper>
  )
}

export default Header
