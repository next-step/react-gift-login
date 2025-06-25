import { useTheme } from '@emotion/react'

export const Home = () => {
  const theme = useTheme()

  return (
    <div>
      <h1
        css={{
          ...theme.typography.title.title1Bold,
          color: theme.colors.gray.gray800,
          backgroundColor: theme.colors.gray.gray100,
          padding: `${theme.spacing.spacing4} ${theme.spacing.spacing8}`,
          borderRadius: theme.spacing.spacing4,
          marginBottom: theme.spacing.spacing8,
        }}
      >
        카카오테크 캠퍼스 2단계 - 1차 과제
      </h1>
      <h2 css={theme.typography.subtitle.subtitle1Bold}>카카오 선물하기 로그인</h2>
    </div>
  )
}
