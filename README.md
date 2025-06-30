# React Gift Login

카카오 선물하기 메인 페이지를 React + TypeScript + Vite + Emotion으로 구현.

## Step3 과제 완료

### 1. React Router 도입 및 기본 라우팅 설정

- **useState → Routes/Route**: 본격적인 SPA 라우팅 구현
- **BrowserRouter**: main.tsx에서 전역 라우터 설정
- **URL 기반 페이지 전환**: `/`, `/login` 경로 분리
- **브라우저 히스토리**: 뒤로가기/앞으로가기 지원

### 2. 로그인 페이지 라우팅 및 redirect 기능 구현

- **이전 페이지 redirect**: `location.state.from` 활용
- **useNavigate/useLocation**: React Router 훅 도입
- **replace: true**: 로그인 페이지 히스토리 제거로 UX 개선
- **브라우저 히스토리 기반**: navigate(-1) 뒤로가기 구현

### 3. Not Found 페이지 구현

- **404 처리**: 잘못된 경로 접근 시 Not Found 페이지 표시
- **와일드카드 라우트**: `path="*"` 모든 잘못된 경로 처리
- **카카오 브랜드 일관성**: 노란색 404 + 친근한 메시지
- **홈으로 돌아가기**: 사용자 편의성 고려

### 4. 실시간 급상승 선물랭킹 URL 연동

- **useState → useSearchParams**: URL 쿼리 파라미터 기반 상태 관리
- **새로고침 시 필터 유지**: `?target=FEMALE&rank=MANY_WISH` 형태
- **유효성 검증**: 잘못된 쿼리 파라미터 시 기본값 사용
- **브라우저 히스토리**: 필터 변경 시 뒤로가기/앞으로가기 지원

### 5. 재사용 가능한 Button 컴포넌트 통합

- **`src/components/common/Button.tsx`**: 6가지 variant 통합 컴포넌트
- **Variant 시스템**: primary, secondary, ghost, toggle, icon, category
- **코드량 67% 감소**: ~600줄 → ~200줄 (8개 파일 → 1개 파일)
- **브랜드 일관성**: 모든 버튼에 카카오 컬러 팔레트 통일 적용
- **타입 안전성**: TypeScript variant 타입으로 컴파일 타임 체크
