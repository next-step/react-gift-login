import styled from '@emotion/styled'

const Wrapper = styled.section`
  margin: ${({ theme }) => theme.spacing.spacing4};
  padding: ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  border-radius: 12px;
  text-align: center;
`

const Line1 = styled.p`
  ${({ theme }) => `
    font-size: ${theme.typography.body1Regular.fontSize};
    font-weight: ${theme.typography.body1Regular.fontWeight};
    line-height: ${theme.typography.body1Regular.lineHeight};
    color: ${theme.colors.semantic.textSub};
    margin-bottom: ${theme.spacing.spacing2};
  `}
`

const Line2 = styled.p`
  ${({ theme }) => `
    font-size: ${theme.typography.body2Regular.fontSize};
    font-weight: ${theme.typography.body2Regular.fontWeight};
    line-height: ${theme.typography.body2Regular.lineHeight};
    color: ${theme.colors.semantic.textDefault};
    margin: 0;
  `}
`

const DisplaySection = () => {
  return (
    <Wrapper>
      <Line1>카카오테크 캠퍼스 3기 여러분</Line1>
      <Line2>프론트엔드 2단계 과제 화이팅! 🎉</Line2>
    </Wrapper>
  )
}

export default DisplaySection
