import styled from '@emotion/styled'
import backIcon from '@/assets/back.png'
import loginIcon from '@/assets/user.png'

interface NavBarProps {
  onBack?: () => void
  logoSrc: string
  onLoginClick?: () => void
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
`

const IconButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
  display: flex;
  align-items: center;
`

const LogoLink = styled.a`
  flex: 1;
  text-align: center;
`

const NavBar = ({ onBack, logoSrc, onLoginClick }: NavBarProps) => {
  return (
    <Nav>
      <IconButton onClick={onBack} aria-label="back">
        <img src={backIcon} alt="back" height="28" />
      </IconButton>
      <LogoLink href="/">
        <img src={logoSrc} alt="logo" height="28" />
      </LogoLink>
      <IconButton onClick={onLoginClick} aria-label="login">
        <img src={loginIcon} alt="login" height="24" />
      </IconButton>
    </Nav>
  )
}

export default NavBar