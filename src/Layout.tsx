import type { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import NavBar from '@/components/NavBar'

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
`
  interface LayoutProps extends PropsWithChildren {
  onBack?: () => void
  logoSrc: string
  onLoginClick?: () => void
 }

const Layout = ({ children, onBack, logoSrc, onLoginClick }: LayoutProps) => {
  return (
    <Container>
      <NavBar onBack={onBack} logoSrc={logoSrc} onLoginClick={onLoginClick} />
      {children}
    </Container>
  )
}

export default Layout