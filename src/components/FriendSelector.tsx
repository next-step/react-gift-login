import { colors } from '../styles/colors'
import { spacing } from '../styles/spacing'
import { typography } from '../styles/typography'

const FriendSelector = () => (
  <div
    style={{
      background: colors.blue00,
      padding: parseInt(spacing.spacing5), // 20px
      borderRadius: 12,
      margin: `${spacing.spacing5} 0`, // 20px 0
      display: 'flex',
      alignItems: 'center',
      gap: parseInt(spacing.spacing3), // 12px
    }}
  >
    <span style={{ fontSize: 28, color: colors.kakaoYellow }}>＋</span>
    <span style={{ ...typography.body1Bold, color: colors.textDefault }}>
      선물할 친구를 선택해 주세요.
    </span>
  </div>
)

export default FriendSelector
