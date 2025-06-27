import styled from '@emotion/styled'
import type { PropsWithChildren } from 'react'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.main`
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
`;