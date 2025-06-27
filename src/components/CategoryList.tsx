import { colors } from '../styles/colors'
import { spacing } from '../styles/spacing'
import { typography } from '../styles/typography'
import categoryData from '@/data/category'

const CategoryList = () => (
  <section
    style={{
      background: colors.backgroundDefault,
      borderRadius: 16,
      padding: parseInt(spacing.spacing6), // 24px
      marginBottom: parseInt(spacing.spacing5), // 20px
    }}
  >
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: parseInt(spacing.spacing8), // 32px
      }}
    >
      {categoryData.map((item: any) => (
        <div
          key={item.themeId}
          style={{ textAlign: 'center', width: 80 }}
        >
          <img
            src={item.image}
            alt={item.name}
            width={56}
            height={56}
            style={{ borderRadius: 12 }}
          />
          <div style={{ marginTop: parseInt(spacing.spacing2), ...typography.body2Regular, color: colors.textDefault }}>
            {item.name}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default CategoryList
