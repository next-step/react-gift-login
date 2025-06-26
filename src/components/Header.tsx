import { FiChevronLeft, FiUser } from 'react-icons/fi'
import styled from '@emotion/styled'

export default function Header() {
  return (
    <Container>
      <IconButton aria-label="뒤로가기">
        <FiChevronLeft size={24} />
      </IconButton>
      <Title>선물하기</Title>
      <IconButton aria-label="마이페이지">
        <FiUser size={24} />
      </IconButton>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
  color: ${({ theme }) => theme.colors.text.default};
`;
