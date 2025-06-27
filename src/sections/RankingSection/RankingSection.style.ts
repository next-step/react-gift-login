import styled from '@emotion/styled'

export const Wrapper = styled.section`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Title = styled.h1`
  ${({ theme }) => `
    color: ${theme.colors.textDefault};
    font-size: ${theme.typography.title1Bold.fontSize};
    font-weight: ${theme.typography.title1Bold.fontWeight};
    line-height: ${theme.typography.title1Bold.lineHeight};
  `}
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`

export const CardListSection = styled.section``
