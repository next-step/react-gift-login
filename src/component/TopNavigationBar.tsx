/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import NavArrowLeftIcon from '@/assets/nav-arrow-left.svg?react'
import ProfileIcon from '@/assets/profile.svg?react'
import type { ThemeType } from '@/styles/theme'

const iconStyle = css`
  width: 29px;
  height: 29px;
`

const navStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 12px 16px;
  background-color: ${theme.colors.colorScale.gray[0]};
  ${theme.typography.title1Bold};
`

const TopNavigationBar: React.FC = () => {
  const theme = useTheme()

  return (
    <nav css={navStyle(theme)}>
      <NavArrowLeftIcon css={iconStyle} />
      <div>선물하기</div>
      <ProfileIcon css={iconStyle} />
    </nav>
  )
}

export default TopNavigationBar
