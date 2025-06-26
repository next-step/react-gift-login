// * 타입 정의
export type TargetType = 'ALL' | 'FEMALE' | 'MALE' | 'TEEN'
export type RankType = 'MANY_WISH' | 'MANY_RECEIVE' | 'MANY_WISH_RECEIVE'

// * 유효한 TargetType인지 확인하는 함수
export const isValidTargetType = (value: string): value is TargetType => {
  return ['ALL', 'FEMALE', 'MALE', 'TEEN'].includes(value)
}

// * 유효한 RankType인지 확인하는 함수
export const isValidRankType = (value: string): value is RankType => {
  return ['MANY_WISH', 'MANY_RECEIVE', 'MANY_WISH_RECEIVE'].includes(value)
}
