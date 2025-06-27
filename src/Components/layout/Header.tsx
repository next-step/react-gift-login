/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fffef9; /* yellow00 */
  padding: 12px 16px;

  @media (min-width: 768px) {
    padding: 16px 32px;
  }
`

const logoStyle = css`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
`

const navStyle = css`
  display: flex;
  gap: 16px;

  a {
    text-decoration: none;
    color: #2a3038; /* text default */
    font-size: 0.875rem;
    font-weight: 400;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Header = () => {
  return (
    <header css={headerStyle}>
      <div css={logoStyle}>GIFT</div>
      <nav css={navStyle}>
        <Link to="/">홈</Link>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </nav>
    </header>
  )
}

export default Header
