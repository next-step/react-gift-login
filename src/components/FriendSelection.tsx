import styled from '@emotion/styled'
import { FaPlus } from 'react-icons/fa'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing2};
  margin: ${({ theme }) => theme.spacing.spacing4};
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.semantic.backgroundFill};
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`

const Text = styled.p`
  ${({ theme }) => `
    font-size: ${theme.typography.subtitle2Regular.fontSize};
    font-weight: ${theme.typography.subtitle2Regular.fontWeight};
    line-height: ${theme.typography.subtitle2Regular.lineHeight};
    color: ${theme.colors.semantic.textDefault};
    margin: 0;
  `}
`

const PlusButton = styled.button`
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  border: none;
  border-radius: 50%;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #000;
  cursor: pointer;
`

const FriendSelection = () => {
    const handleClick = () => {
        alert('친구 선택 페이지로 이동 구현 예정.')
    }

    return (
        <Wrapper onClick={handleClick}>
            <PlusButton>
                <FaPlus />
            </PlusButton>
            <Text>선물할 친구를 선택해 주세요.</Text>
        </Wrapper>
    )
}

export default FriendSelection
