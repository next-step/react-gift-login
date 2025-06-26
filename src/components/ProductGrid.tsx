import { useState } from 'react'
import { colors } from '../styles/colors'
import { spacing } from '../styles/spacing'
import { typography } from '../styles/typography'
import product from '@/data/product'

const ProductGrid = () => {
  const [showAll, setShowAll] = useState(false)
  const ranks = showAll ? [...Array(21).keys()].map(i => i + 1) : [...Array(6).keys()].map(i => i + 1)
  return (
    <section style={{ margin: `${spacing.spacing8} 0` }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: parseInt(spacing.spacing6), // 24px
        }}
      >
        {ranks.map(rank => (
          <div
            key={rank}
            style={{
              background: colors.backgroundDefault,
              borderRadius: 16,
              padding: parseInt(spacing.spacing4), // 16px
              boxShadow: '0 2px 8px #0001',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: parseInt(spacing.spacing3), // 12px
                top: parseInt(spacing.spacing3), // 12px
                background: rank <= 3 ? colors.red700 : colors.gray300,
                color: colors.gray00,
                borderRadius: '50%',
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...typography.body2Bold,
              }}
            >
              {rank}
            </span>
            <img
              src={product.imageURL}
              alt={product.name}
              width={160}
              height={120}
              style={{ objectFit: 'cover', borderRadius: 12 }}
            />
            <div style={{ marginTop: parseInt(spacing.spacing3), ...typography.body2Bold, color: colors.textDefault }}>
              {product.name}
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: spacing.spacing6 }}>
        <button
          onClick={() => setShowAll(v => !v)}
          style={{
            margin: '0 auto',
            padding: `${spacing.spacing2} ${spacing.spacing6}`,
            borderRadius: 8,
            border: 'none',
            background: colors.gray200,
            color: colors.gray900,
            cursor: 'pointer',
            ...typography.body2Bold,
          }}
        >
          {showAll ? '접기' : '더보기'}
        </button>
      </div>
    </section>
  )
}

export default ProductGrid
