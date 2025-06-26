import styled from '@emotion/styled'
import { colors } from '@/theme/color'
import { typography } from '@/theme/typography'

const BannerWrapper = styled.section`
  background-color: ${colors.brand.kakaoYellow};
  border-radius: 8px;
  padding: 12px 16px;
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const SmallText = styled.p`
  font-size: ${typography.body2Regular.fontSize};
  font-weight: ${typography.body2Regular.fontWeight};
  line-height: ${typography.body2Regular.lineHeight};
  color: ${colors.text.default};
`

const BoldText = styled.p`
  font-size: ${typography.subtitle1Bold.fontSize};
  font-weight: ${typography.subtitle1Bold.fontWeight};
  line-height: ${typography.subtitle1Bold.lineHeight};
  color: ${colors.text.default};
`

const CampusBanner = () => {
  return (
    <BannerWrapper>
      <SmallText>카카오테크 캠퍼스 3기여러분</SmallText>
      <BoldText>프론트엔드 2단계 과제 화이팅! 🎉</BoldText>
    </BannerWrapper>
  )
}

export default CampusBanner