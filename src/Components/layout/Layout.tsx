import styled from '@emotion/styled'
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`
