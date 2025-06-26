import styled from '@emotion/styled'
import type { ReactNode } from 'react'

export function MainLayout(props: { children: ReactNode }) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Container = styled.main`
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
`;