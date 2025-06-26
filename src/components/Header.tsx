import { colors } from '../styles/colors'
import { typography } from '../styles/typography'
import { spacing } from '../styles/spacing'

const Header = () => (
  <header
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: spacing.spacing14,
      borderBottom: `1px solid ${colors.borderDefault}`,
      position: 'relative',
      background: colors.backgroundDefault,
    }}
  >
    <button
      style={{
        position: 'absolute',
        left: spacing.spacing4,
        background: 'none',
        border: 'none',
        fontSize: 24,
        cursor: 'pointer',
        color: colors.textDefault,
      }}
      aria-label="뒤로가기"
    >
      &lt;
    </button>
    <h1 style={{ ...typography.title1Bold, color: colors.textDefault }}>
      선물하기
    </h1>
    <button
      style={{
        position: 'absolute',
        right: spacing.spacing4,
        background: 'none',
        border: 'none',
        fontSize: 24,
        cursor: 'pointer',
        color: colors.textDefault,
      }}
      aria-label="즐겨찾기"
    >
      ⭑
    </button>
  </header>
)

export default Header
