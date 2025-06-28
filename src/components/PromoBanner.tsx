import styled from '@emotion/styled'

const KatecampBanner = styled.div`
  width: 95%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  box-sizing: border-box;
  border-radius: 15px;
  margin: 0px 20px;
  padding: 10px;
`

const KatecampBannerTextOne = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: 11px;
`
const KatecampBannerTextTwo = styled.p`
  color: ${({ theme }) => theme.colors.gray[1000]};
  font-size: 14px;
  line-height:  ${({ theme }) => theme.typography['title1Bold'].lineHeight};
  font-weight: ${({ theme }) => theme.typography['title1Bold'].fontWeight};
`

function PromoBanner() {
    return (
        <KatecampBanner>
            <KatecampBannerTextOne>카카오테크 캠퍼스 3기여러분</KatecampBannerTextOne>
            <KatecampBannerTextTwo>프론트엔드 2단계 과제 화이팅!🎉</KatecampBannerTextTwo>
        </KatecampBanner>
    )
}

export default PromoBanner;