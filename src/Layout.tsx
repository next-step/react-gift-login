import type { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
`

const Layout = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>
}

export default Layout