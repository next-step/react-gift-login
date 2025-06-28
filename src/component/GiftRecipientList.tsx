/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import type { ThemeType } from '@/styles/theme'

const containerStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px;
  padding: 16px;
  border-radius: 16px;
  margin-top: 18px;
  background-color: ${theme.colors.colorScale.gray[0]};
`

const plusButtonStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 16px;
  background-color: ${theme.colors.semanticColor.brandColor.kakaoYellow};
  ${theme.typography.title1Bold}
`

const textStyle = (theme: ThemeType) => css`
  ${theme.typography.title2Bold}
`

const GiftRecipientList: React.FC = () => {
  const theme = useTheme()

  return (
    <div css={containerStyle(theme)}>
      <div css={plusButtonStyle}>＋</div>
      <span css={textStyle}>선물할 친구를 선택해 주세요.</span>
    </div>
  )
}

export default GiftRecipientList
