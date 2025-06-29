# React Gift Login

카카오 선물하기 메인 페이지를 React + TypeScript + Vite + Emotion으로 구현.

## 개발 진행 과정

### 1. Emotion에 Color, Typography 토큰 설정

- **Design Token 시스템 구축**: `src/styles/`
- **색상 토큰**: Gray, Yellow, Brown, Blue, Red 색상 스케일 + 카카오 브랜드 컬러(#fee500)
- **타이포그래피 토큰**: Title, Subtitle, Body, Label 체계
- **간격 토큰**: spacing1~16 일관된 간격 시스템
- **ThemeProvider**: 전역 테마 시스템 적용

### 2. Mobile First Design 기반의 Layout 구현

- **720px 제한** 모바일 중심 UI 설계
- **MobileLayout**: 전체 앱 레이아웃 컨테이너
- **Header**: Sticky 네비게이션 헤더
- **Main**: 메인 콘텐츠 영역
- **Section**: 재사용 가능한 섹션 컴포넌트 (spacing 옵션)
- **터치 친화적**: 44px 최소 터치 영역, iOS 스크롤 최적화

### 3. 상단 네비게이션 바 영역 구현

- **NavigationBar**: [<] [선물하기] [👤] 구조
- **페이지 라우팅**: useState 기반 상태 관리
- **LoginPage**: 카카오 브랜드 아이덴티티 로그인 페이지
- **HomePage**: 메인 선물하기 페이지
- 프로필 버튼 → 로그인, 뒤로가기 → 메인 페이지 이동

### 4. 카테고리 섹션 구현

- **CategoryGrid**: CSS Grid 기반 **5x3 그리드** 레이아웃
- **CategoryItem**: 원형 아이콘 + 하단 라벨 구조
- **"선물 테마"** 섹션으로 15개 카테고리 표시
- 이미지 URL과 이모지 모두 지원, 터치 인터랙션 최적화

### 5. 기타 섹션 (선물할 친구 선택, 카테캠 화이팅) UI 구현

- **FriendSelectSection**: 노란색 + 버튼 + "선물할 친구를 선택해 주세요."
- **PromoSection**: 카카오 옐로우 배경 + "카카오 테크 캠퍼스 3기여러분 프론트엔드 2단계 과제 화이팅!"
- 카카오 브랜드 컬러 활용한 일관된 디자인

### 6. 실시간 급상승 선물랭킹 구현

- **이중 필터 시스템**:
  - 상단: 전체/여성이/남성이/청소년이
  - 하단: 받고싶어한/많이선물한/위시로받은
- **ProductGrid**: **3x2 → 3x7** 확장 가능한 반응형 그리드
- **순위 배지**: 1,2,3등 빨간색 강조, 나머지 회색
- **더보기 기능**: 6개 → 21개 상품 확장
- BBQ 상품 데이터 활용한 랭킹 시스템
