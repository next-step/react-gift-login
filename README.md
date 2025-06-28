# react-gift-login

## step1

- readme 작성
- 불필요한 파일, 코드를 정리
- 절대경로로 Import 할 수 있게 alias를 설정
- Prettier 추가
- emotion 스타일 라이브러리를 추가하고, reset css를 적용
- 기본 폰트로 Pretendard를 적용

## step2

- step1 피드백 반영
  - reset.css 역할 분리
  - 자동으로 eol에 마지막줄에 생성되도록 설정
  - 절대 경로 tsconfig.app.json으로 수정

- emotion에 Color, Typography 토큰 설정
- Mobile First Design 기반의 Layout을 구현
- 상단 네비게이션 바 영역을 구현
- 카테고리 섹션을 구현
- 기타 섹션 (선물한 친구 선택, 카테캠 화이팅) UI를 구현
- 실시간 급상승 선물랭킹을 구현

## step3

- step2 피드백 반영
  - emotion의 as prop을 사용하여 컴포넌트 재사용성 높이기
- 로그인
  - /login 페이지 접속 시 로그인 화면으로 연결
  - 로그인 화면 제작
  - 로그인 버튼 클릭 시 이전 페이지로 redirect, 이전 페이지가 없으면 홈으로 이동
  - 네비게이션 바에 로그인과 뒤로가기 기능 추가
- 잘못된 경로로 접속시 Not Found 페이지로 연결
- 실시간 급상승 선물 랭킹에서 선택한 필터를 새로고침 되어도 유지되도록 변경
