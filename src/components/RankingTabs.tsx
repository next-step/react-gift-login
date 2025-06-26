import { colors } from '../styles/colors'
import { spacing } from '../styles/spacing'
import { typography } from '../styles/typography'
import { useState } from 'react'

const tabs = [
  { label: '전체', value: 'all' ,icon: 'ALL' },
  { label: '여성', value: 'female', icon: '👩' },
  { label: '남성', value: 'male', icon: '👨' },
  { label: '청소년이', value: 'teen' , icon: '🧑' },
]



const RankingTabs = () => {
  const [selected, setSelected] = useState('female') // 기본값 'female'로 변경
  return (
    <>
      <h3 style={{
        ...typography.body1Bold,
        color: colors.gray900, // 오류 수정: colors.text → colors.gray900
        margin: 0,
        marginBottom: spacing.spacing4,
      }}>실시간 급상승 선물랭킹</h3>
      <div
        style={{
          display: 'flex',
          gap: 0, // gap 대신 justifyContent로 분산
          justifyContent: 'space-between',
          width: '100%',
          padding: `0 ${spacing.spacing4}`,
        }}
      >
        {tabs.map(tab => (
          <button
            key={tab.value}
            onClick={() => setSelected(tab.value)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: 20,
              border: 'none',
              background: selected === tab.value ? colors.blue100 : colors.gray100,
              boxShadow: selected === tab.value ? '0 2px 8px #217cf933' : 'none',
              color: selected === tab.value ? colors.blue700 : colors.textSub,
              cursor: 'pointer',
              transition: 'all 0.2s',
              ...typography.body2Regular,
              fontWeight: selected === tab.value ? 700 : 400,
              padding: 0,
              margin: '0 8px',
            }}
          >
            <span style={{ fontSize: 15 }}>{tab.icon}</span>
            <span style={{ marginTop: spacing.spacing2 }}>{tab.label}</span>
          </button>
        ))}
      </div>
    </>
  )
}

export default RankingTabs
