import styled from '@emotion/styled'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.default};
`

export const Layout = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>
}