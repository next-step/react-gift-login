/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'

const statusBarStyle = css`
  width: 100%;
  height: 8px;
  background: #393939;
  @media (min-width: 720px) {
    display: none;
  }
`

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  height: 56px;
  padding: 0 16px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`

const iconButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  color: #222;
  font-size: 1.8rem;
`

const titleStyle = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
  pointer-events: none;
  font-family: 'Pretendard', 'Apple SD Gothic Neo', Arial, sans-serif;
`

const Header = () => {
  return (
    <>
      <div css={statusBarStyle} />
      <header css={headerStyle}>
        <button css={iconButtonStyle} aria-label="뒤로가기">
          <ArrowBackIosNewRoundedIcon fontSize="inherit" />
        </button>
        <div css={titleStyle}>선물하기</div>
        <button css={iconButtonStyle} aria-label="프로필">
          <PersonOutlineRoundedIcon fontSize="inherit" />
        </button>
      </header>
    </>
  )
}

export default Header
