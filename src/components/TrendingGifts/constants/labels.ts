import { deepFreeze } from '@/utils/deepFreeze';

export const TRENDING_GIFTS_TABS = deepFreeze([
  {
    NAME: '전체',
    ICON: 'ALL',
  },
  {
    NAME: '여성이',
    ICON: '👩🏻',
  },
  {
    NAME: '남성이',
    ICON: '👨🏻',
  },
  {
    NAME: '청소년이',
    ICON: '👦🏻',
  },
] as const);

export const TRENDING_GIFTS_LABELS = deepFreeze({
  SECTION_TITLE: '실시간 급상승 선물랭킹',
  MORE_INFO: '더보기',
} as const);
