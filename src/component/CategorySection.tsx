/** @jsxImportSource @emotion/react */
import { categories } from '@/data/categories'
import { css, useTheme } from '@emotion/react'
import type { ThemeType } from '@/styles/theme'

const containerStyle = (theme: ThemeType) => css`
  margin: 16px 0px;
  padding: 16px;
  background-color: ${theme.colors.colorScale.gray[0]};
`

const gridStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 13px;
  margin-top: 12px;
`

const CategorySection = () => {
  const theme = useTheme()

  return (
    <section css={containerStyle(theme)}>
      <h2 css={{ margin: 0, fontSize: 16, fontWeight: 600 }}>선물 테마</h2>
      <div css={gridStyle}>
        {categories.map((item) => (
          <div key={item.themeId} css={{ textAlign: 'center' }}>
            <img
              src={item.image}
              alt={item.name}
              css={{ width: 48, height: 48, borderRadius: '50%' }}
            />
            <p css={{ fontSize: 12, marginTop: 8 }}>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategorySection
