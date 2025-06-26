/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { products } from '@/data/products'
import type { ThemeType } from '@/styles/theme'

const genderList = [
  { label: 'All', icon: 'ALL' },
  { label: '남성이', icon: '👨‍🦰' },
  { label: '여성이', icon: '👩‍🦰' },
  { label: '청소년이', icon: '👨‍🦰' },
]

const whatList = ['받고 싶어한, 많이 선물한, 위시로 받은']

const containerStyle = (theme: ThemeType) => css`
  padding: 16px;
  background-color: ${theme.colors.colorScale.gray[0]};
`

const selectContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
  gap: 150px;
  margin-bottom: 20px;
`

const selectItemStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const selectButtonStyle = (theme: ThemeType) => css`
  width: 50px;
  height: 50px;
  border-radius: 16px;
  background: ${theme.colors.colorScale.gray[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`

const selectLabelStyle = (theme: ThemeType) => css`
  margin-top: 6px;
  font-size: 14px;
  color: ${theme.colors.semanticColor.textColor.default};
  user-select: none;
`

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`

const cardStyle = css`
  background: white;
  border-radius: 8px;
  padding: 3px;
`

const imgStyle = css`
  width: 100%;
  border-radius: 8px;
`

const ButtonListContainer = (theme: ThemeType) => css`
  display: flex;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${theme.colors.colorScale.blue[300]};
  margin: 0 auto 20px;
`

const Button = (theme: ThemeType) => css`
  flex: 1;
  padding: 10px 0;
  background-color: ${theme.colors.colorScale.blue[100]};
  color: ${theme.colors.colorScale.blue[500]};
  border: none;
  cursor: pointer;
  font-weight: 400;
`

const FilterItem: React.FC<{ icon: string; label: string }> = ({
  icon,
  label,
}) => (
  <div css={selectItemStyle}>
    <div css={selectButtonStyle}>{icon}</div>
    <div css={selectLabelStyle}>{label}</div>
  </div>
)

const TrendingGiftRanking = () => {
  const theme = useTheme() as ThemeType

  return (
    <section css={containerStyle(theme)}>
      <h2>실시간 급상승 선물랭킹</h2>
      <div css={selectContainerStyle}>
        {genderList.map(({ icon, label }) => (
          <FilterItem key={label} icon={icon} label={label} />
        ))}
      </div>

      <div css={ButtonListContainer}>
        {whatList.map((label) => (
          <button css={Button}>{label}</button>
        ))}
      </div>

      <div css={gridStyle}>
        {products.map((item) => (
          <div key={item.id} css={cardStyle}>
            <img src={item.imageURL} alt={item.name} css={imgStyle} />
            <p>{item.brandInfo.name}</p>
            <p>{item.name}</p>
            <strong>{item.price.sellingPrice.toLocaleString()} 원</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrendingGiftRanking
