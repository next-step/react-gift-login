# react-gift-login

## 구현할 기능 목록
[ ] 홈과 로그인 - 리엑트 기초, 라우팅
- [o] 1단계 : 프로젝트 초기 세팅
  - [o] 홈과 로그인(WIP) 레포지토리 클론하기
  - [o] 불필요한 파일, 코드 정리하기
        - assets/react.svg, App.css 같은 기본 템플릿 파일 삭제
        - App.tsx 수정(import 삭제, className 삭제)
  - [o] 절대경로 alias 설정
        - vite.config.ts에서 path 설정 (Node.js 설치)
        - 절대 경로 설정하기
  - [o] Prettier 설정
        - Prettier는 코드 포맷터로, 코드 스타일을 자동으로 맞춰주는 도구이다.
        - Prettier 설치
        - .prettierrc 파일 생성 후 코드 작성
  - [o] emotion 스타일 라이브러리 추가 후 reset css 적용
        - Emotion 설치
        - styles>GlobalStyle.tsx 생성 후 Reset CSS를 글로벌 스타일로 적용
  - [o] Pretendard 기본 폰트 적용
        - index.html에 Pretended link 추가
        - GlobalStyle.tsx의 font-family 수정
  - [o] 기능 단위로 나누어 커밋하기

- [ ] 2단계 : 선물하기 메인 페이지 UI 구현하기
    - [o] 화면의 max-width를 720px으로 제한
            - GlobalStyle.tsx에 #root 추가 후 max-width: 720px, margin: 0 auto → 중앙 정렬 및 최대 폭 제한
    - [ ] 디자인 토큰 설정 (emotion 기반 Color, Typography 설정)
            - styles 폴더 안에 디자인 토큰 파일 생성(color.ts, typography.ts)
            - theme.ts로 통합 후, Emotion의 ThemeProvider를 통해 전역 테마로 적용
    - [ ] Mobile First Design 기반의 레이아웃 구조 잡기
    - [ ] 상단 네비게이션 바 구현
    - [ ] 카테고리 섹션 구현
    - [ ] 기타 섹션(선물한 친구 선택, 카테캠 화이팅)  구현
    - [ ] 실시간 급상승 선물 랭킹 구현

- [ ] 3단계 : 로그인 페이지 UI 만들기

- [ ] 
- [ ] 